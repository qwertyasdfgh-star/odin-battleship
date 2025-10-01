import { setupUI } from './dom.js';
import { initGame } from './game.js';
import '../public/styles.css';

// --- DOM Elements ---
const homepage = document.getElementById('homepage');initGame
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('player-name');

// --- Main Application Logic ---
function showGame() {
    if (homepage) {
        homepage.style.display = 'none';
    }
}

// This function starts the entire game process.
function launchGame(playerName) {

    setupUI();

    initGame(playerName);

    showGame();
}

// --- Event Listener for the Homepage Form ---
document.addEventListener('DOMContentLoaded', () => {
    if (nameForm) {
        nameForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from reloading the page.
            const playerName = nameInput.value.trim() || 'Admiral';
            launchGame(playerName);
        });
    } else {
        // If there's no homepage/form, launch the game immediately.
        launchGame('Admiral');
    }
});