import { Player } from './player.js';
import { renderGameboards, updatePlacementStatus, showWinModal } from './dom.js';

// --- GAME STATE (Exported for dom.js to read) ---
export let players = [];
export let currentPlayer = null;
export let gameOverFlag = false;
export let placementMode = true;

// --- CONSTANTS ---
export const SHIP_LENGTHS = [5, 4, 3, 3, 2];
const COMPUTER_ATTACK_DELAY = 800;

// --- INITIALIZATION ---
export function initGame(playerName = 'Admiral') {
    const human = new Player('human', playerName);
    const computer = new Player('computer');
    human.opponent = computer;
    computer.opponent = human;

    players = [human, computer];
    currentPlayer = human;
    gameOverFlag = false;
    placementMode = true;

    computer.gameboard.placeShipsRandomly(SHIP_LENGTHS);
    
    updatePlacementStatus('Place your ships or click Randomize.');
}

// --- CORE GAME ACTIONS (Called from dom.js) ---
export function handleShipPlacement(length, coordinates) {
    if (!placementMode) return false;
    const success = players[0].gameboard.placeShip(length, coordinates);
    if (success && players[0].gameboard.ships.length === SHIP_LENGTHS.length) {
        updatePlacementStatus('All ships placed. Ready to start!');
    }
    return success;
}

export function handleRandomize() {
    if (!placementMode) return false;
    const success = players[0].gameboard.placeShipsRandomly(SHIP_LENGTHS);
    if (success) {
        updatePlacementStatus('Fleet randomized. Ready to start!');
    }
    return success;
}

export function startGame() {
    if (players[0].gameboard.ships.length !== SHIP_LENGTHS.length) return;
    
    placementMode = false; 
    
    updatePlacementStatus(`Your turn, ${players[0].name}. Attack the enemy waters!`);
}

export function handlePlayerAttack(coord) {
    if (gameOverFlag || placementMode || currentPlayer.type !== 'human') return;

    const result = currentPlayer.opponent.gameboard.receiveAttack(coord);
    renderGameboards(); // Re-render to show the hit/miss/sunk state.

    if (checkGameEnd()) return;
    switch (result) {
        case 'sunk':
            updatePlacementStatus('You sunk an enemy ship! Attack again.');
            break;
        case 'hit':
            updatePlacementStatus('A direct hit! Attack again.');
            break;
        case 'miss':
            currentPlayer = players[1]; // Switch to computer.
            updatePlacementStatus("You missed. Computer's turn...");
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY);
            break;
    }
}

// --- COMPUTER LOGIC ---
function computerTurn() {
    if (gameOverFlag) return;

    const { coord, result } = players[1].attackOpponent();
    renderGameboards(); // Re-render to show computer's hit/miss/sunk.

    if (checkGameEnd()) return;
    switch (result) {
        case 'sunk':
            updatePlacementStatus(`The enemy sunk your ship at [${coord}]! It will attack again.`);
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY); // Sinking a ship grants another turn.
            break;
        case 'hit':
            updatePlacementStatus(`Computer hit your fleet at [${coord}]! It will attack again.`);
            setTimeout(computerTurn, COMPUTER_ATTACK_DELAY); // Hitting grants another turn.
            break;
        case 'miss':
            currentPlayer = players[0]; // Switch back to human.
            updatePlacementStatus(`Computer missed at [${coord}]. Your turn!`);
            break;
    }
}

function checkGameEnd() {
    const humanLost = players[0].gameboard.allShipsSunk();
    const computerLost = players[1].gameboard.allShipsSunk();

    if (humanLost || computerLost) {
        gameOverFlag = true;
        const winner = humanLost ? players[1] : players[0];
        updatePlacementStatus(`Game Over! ${winner.name} is victorious!`);
        
        showWinModal(winner); 

        return true;
    }
    return false;
}

export function resetGame() {
    gameOverFlag = false;
    placementMode = true;
    currentPlayer = players[0];

    players.forEach(p => p.gameboard.reset());
    players[1].gameboard.placeShipsRandomly(SHIP_LENGTHS);

    updatePlacementStatus('Place your ships or click Randomize.');
}