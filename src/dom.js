import { 
    startGame, 
    handlePlayerAttack, 
    handleShipPlacement,
    handleRandomize,
    players,
    placementMode, 
    gameOverFlag, 
    currentPlayer,
    SHIP_LENGTHS,
    resetGame
} from './game.js';

// --- STATE ---
let draggedShip = null;

// --- CONSTANTS ---
const SHIP_TYPES = [
    { id: 'carrier', length: 5, name: 'Carrier' },
    { id: 'battleship', length: 4, name: 'Battleship' },
    { id: 'cruiser', length: 3, name: 'Cruiser' },
    { id: 'submarine', length: 3, name: 'Submarine' },
    { id: 'destroyer', length: 2, name: 'Destroyer' }
];

// --- UI INITIALIZATION ---
function setupUI() {
    const container = document.createElement('div');
    container.id = 'game-container';
    document.body.appendChild(container);

    container.innerHTML = `
        <header>
            <h1>Battleship</h1>
            <div id="status" class="status">Place your ships or click Randomize</div>
        </header>
        <div class="controls">
            <button id="randomize-btn" class="btn">Randomize Fleet</button>
            <button id="start-btn" class="btn" disabled>Start Battle!</button>
        </div>
        <div class="main-game-area">
            <div id="ship-sidebar" class="placement-ui">
                <h3>Your Ships</h3>
                <p>Drag ships to place. Right-click to rotate.</p>
                <div class="ship-container"></div>
            </div>
            <div class="boards">
                <div id="human-board-section" class="board-section">
                    <h2>Your Fleet</h2>
                    <div id="human-board" class="board"></div>
                </div>
                <div id="computer-board-section" class="board-section">
                    <h2>Enemy Waters</h2>
                    <div id="computer-board" class="board"></div>
                </div>
            </div>
        </div>
    `;

    // Setup all interactive parts of the UI
    createDraggableShips();
    setupDragAndDrop();
    setupControlListeners();
    setupAttackListener();
    renderGameboards();
}

// --- EVENT LISTENER SETUP ---
function setupControlListeners() {
    const randomizeBtn = document.getElementById('randomize-btn');
    const startBtn = document.getElementById('start-btn');

    randomizeBtn?.addEventListener('click', () => {
        if (handleRandomize()) {
            document.querySelectorAll('.ship-piece').forEach(ship => {
                ship.classList.add('placed');
                ship.draggable = false;
            });
            startBtn.disabled = false;
            renderGameboards();
        }
    });

    startBtn?.addEventListener('click', () => {
        if (players[0]?.gameboard?.ships?.length === SHIP_LENGTHS.length) {
            startGame();
            renderGameboards();
            document.getElementById('ship-sidebar')?.style.setProperty('display', 'none');
            startBtn.disabled = true;
            randomizeBtn.disabled = true;
        }
    });
}

function setupAttackListener() {
    const computerBoard = document.getElementById('computer-board');
    computerBoard?.addEventListener('click', (e) => {
        if (placementMode || gameOverFlag || currentPlayer?.type !== 'human') {
            return; // Block clicks if not the player's turn
        }
        const cell = e.target.closest('.cell');
        if (cell && !cell.classList.contains('hit') && !cell.classList.contains('miss')) {
            const row = parseInt(cell.dataset.row, 10);
            const col = parseInt(cell.dataset.col, 10);
            handlePlayerAttack([row, col]);
        }
    });
}

// --- DRAG AND DROP LOGIC ---
function createDraggableShips() {
    const container = document.querySelector('.ship-container');
    if (!container) return;
    container.innerHTML = '';
    
    SHIP_TYPES.forEach(({ id, length, name }) => {
        const ship = document.createElement('div');
        ship.className = 'ship-piece';
        ship.draggable = true;
        ship.dataset.id = id;
        ship.dataset.length = length;
        ship.innerHTML = `<span>${name}</span>`;
        
        ship.addEventListener('dragstart', (e) => {
            if (ship.classList.contains('placed')) {
                e.preventDefault();
                return;
            }
            draggedShip = { element: ship, length, isVertical: ship.classList.contains('vertical') };
            e.dataTransfer.setData('text/plain', id); // Necessary for Firefox
        });

        ship.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            ship.classList.toggle('vertical');
            ship.style.width = ship.classList.contains('vertical') ? 'var(--cell-size)' : `calc(${length} * var(--cell-size))`;
            ship.style.height = ship.classList.contains('vertical') ? `calc(${length} * var(--cell-size))` : 'var(--cell-size)';
        });
        container.appendChild(ship);
    });
}

function setupDragAndDrop() {
    const humanBoard = document.getElementById('human-board');
    if (!humanBoard) return;

    humanBoard.addEventListener('dragover', (e) => {
        e.preventDefault(); // This is essential for 'drop' to work
    });

    humanBoard.addEventListener('drop', (e) => {
        e.preventDefault();
        const cell = e.target.closest('.cell');
        if (!cell || !draggedShip) return;

        const row = parseInt(cell.dataset.row, 10);
        const col = parseInt(cell.dataset.col, 10);
        const coordinates = calculateShipCoordinates(row, col, draggedShip.length, draggedShip.isVertical);

        if (handleShipPlacement(draggedShip.length, coordinates)) {
            draggedShip.element.classList.add('placed');
            draggedShip.element.draggable = false;
            if (players[0]?.gameboard?.ships.length === SHIP_LENGTHS.length) {
                document.getElementById('start-btn').disabled = false;
            }
            renderGameboards();
        }
        draggedShip = null;
    });
}

// --- RENDERING LOGIC ---
function renderGameboards() {
    const humanBoard = document.getElementById('human-board');
    const computerBoard = document.getElementById('computer-board');
    if (!humanBoard || !computerBoard) return;

    humanBoard.innerHTML = '';
    computerBoard.innerHTML = '';

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            humanBoard.appendChild(createCell('human', row, col));
            computerBoard.appendChild(createCell('computer', row, col));
        }
    }
}

function createCell(boardType, row, col) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.row = row;
    cell.dataset.col = col;
    updateCellState(cell, row, col, boardType);
    return cell;
}

function updateCellState(cell, row, col, boardType) {
    const player = (boardType === 'human') ? players[0] : players[1];
    if (!player) return;

    const coordStr = `${row},${col}`;
    if (boardType === 'human' && player.gameboard.hasShipAt(row, col)) {
        cell.classList.add('ship');
    }

    if (player.gameboard.hitAttacks.has(coordStr)) {
        cell.classList.add('hit');
        const shipInfo = player.gameboard.getShipAt(row, col);
        if (shipInfo && shipInfo.isSunk()) {
            cell.classList.add('sunk');
        }
    } else if (player.gameboard.missedAttacks.has(coordStr)) {
        cell.classList.add('miss');
    }
}

// --- UTILITY FUNCTIONS ---
function calculateShipCoordinates(row, col, length, isVertical) {
    const coordinates = [];
    for (let i = 0; i < length; i++) {
        coordinates.push(isVertical ? [row + i, col] : [row, col + i]);
    }
    return coordinates;
}

function updatePlacementStatus(message) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = message;
    }
}

function resetUI() {
    document.getElementById('ship-sidebar')?.style.setProperty('display', 'block');
    document.getElementById('randomize-btn').disabled = false;
    document.getElementById('start-btn').disabled = true; 
    document.querySelector('.modal')?.remove();

    createDraggableShips();
    renderGameboards();
}

function showWinModal(winner) {
    if (document.querySelector('.modal')) return;

    const modal = document.createElement('div');
    modal.className = 'modal';

    const isHumanWinner = winner.type === 'human';
    const title = isHumanWinner ? `Victory, ${winner.name}!` : 'Defeat!';
    const message = isHumanWinner ? 'You have conquered the enemy fleet.' : 'The enemy has destroyed your fleet.';

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            <p>${message}</p>
            <div class="modal-buttons">
                <button id="play-again-btn" class="btn">Play Again</button>
                <button id="home-btn" class="btn">Main Menu</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('play-again-btn').addEventListener('click', () => {
        resetGame(); 
        resetUI();  
    });



    document.getElementById('home-btn').addEventListener('click', () => {
        location.reload();
    });
}

export { setupUI, renderGameboards, updatePlacementStatus, showWinModal };