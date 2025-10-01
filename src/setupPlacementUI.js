// --- SETUP PLACEMENT UI ---
export function setupPlacementUI() {
    const sidebar = document.createElement('div');
    sidebar.id = 'ship-sidebar';
    sidebar.className = 'placement-ui';
    
    sidebar.innerHTML = `
        <h3>Your Ships</h3>
        <p>Drag ships to place</p>
        <p>Right-click to rotate</p>
        <div class="ship-container"></div>
    `;

    const mainGameArea = document.querySelector('.main-game-area');
    if (mainGameArea) {
        mainGameArea.insertBefore(sidebar, mainGameArea.firstChild);
    }

    const shipTypes = [
        { id: 'carrier', length: 5, name: 'Carrier' },
        { id: 'battleship', length: 4, name: 'Battleship' },
        { id: 'cruiser', length: 3, name: 'Cruiser' },
        { id: 'submarine', length: 3, name: 'Submarine' },
        { id: 'destroyer', length: 2, name: 'Destroyer' }
    ];

    const container = document.querySelector('.ship-container');
    if (container) {
        shipTypes.forEach(({ id, length, name }) => {
            const ship = document.createElement('div');
            ship.className = 'ship-piece';
            ship.draggable = true;
            ship.dataset.id = id;
            ship.dataset.length = length;
            ship.style.width = `${length * 35}px`;
            ship.style.height = '35px';
            ship.innerHTML = `<span>${name}</span>`;
            container.appendChild(ship);
        });
    }

    return sidebar;
}