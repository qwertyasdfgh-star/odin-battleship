import { Ship } from './ship.js';

// --- GAMEBOARD CLASS ---
export class Gameboard {
  constructor() {
    this.reset();
  }

  reset() {
    this.ships = [];  
    this.missedAttacks = new Set();  
    this.hitAttacks = new Set();     
    this.sunkShips = new Set();      
  }

  isValidCoordinate(row, col) {
    return row >= 0 && row < 10 && col >= 0 && col < 10;
  }

  hasShipAt(row, col) {
    const coordKey = `${row},${col}`;
    return this.ships.some(({coordinates}) => 
      coordinates.some(([r, c]) => `${r},${c}` === coordKey)
    );
  }

  placeShip(length, coordinates, ship = null) {
    if (coordinates.length !== length) return false;

    // Validate coordinates
    if (!coordinates.every(([row, col]) => 
        this.isValidCoordinate(row, col) && !this.hasShipAt(row, col))) {
      return false;
    }

    // Create or use provided ship
    this.ships.push({ 
      coordinates, 
      ship: ship || new Ship(length) 
    });
    return true;
  }

  placeShipsRandomly(shipLengths) {
    this.reset();

    for (const length of shipLengths) {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;

      while (!placed && attempts < maxAttempts) {
        attempts++;
        const isVertical = Math.random() > 0.5;
        const coordinates = this.generateRandomCoordinates(length, isVertical);
        placed = this.placeShip(length, coordinates);
      }

      if (!placed) return false;
    }

    return true;
  }

  generateRandomCoordinates(length, isVertical) {
    if (isVertical) {
      const col = Math.floor(Math.random() * 10);
      const startRow = Math.floor(Math.random() * (11 - length));
      return Array.from({length}, (_, i) => [startRow + i, col]);
    } else {
      const row = Math.floor(Math.random() * 10);
      const startCol = Math.floor(Math.random() * (11 - length));
      return Array.from({length}, (_, i) => [row, startCol + i]);
    }
  }

  receiveAttack([row, col]) {
    const coordKey = `${row},${col}`;

    if (!this.isValidCoordinate(row, col)) return 'invalid';
    if (this.hitAttacks.has(coordKey) || this.missedAttacks.has(coordKey)) {
      return 'already attacked';
    }

    const shipIndex = this.ships.findIndex(({coordinates}) =>
      coordinates.some(([r, c]) => r === row && c === col)
    );

    if (shipIndex !== -1) {
      const { ship } = this.ships[shipIndex];
      ship.hit();
      this.hitAttacks.add(coordKey);
      
      if (ship.isSunk()) {
        this.sunkShips.add(shipIndex);
        return 'sunk';
      }
      return 'hit';
    }

    this.missedAttacks.add(coordKey);
    return 'miss';
  }

  allShipsSunk() {
    return this.ships.length > 0 && 
           this.ships.every(({ship}) => ship.isSunk());
  }

  getShipAt(row, col) {
    const placement = this.ships.find(({coordinates}) =>
      coordinates.some(([r, c]) => r === row && c === col)
    );
    return placement?.ship || null;
  }
}