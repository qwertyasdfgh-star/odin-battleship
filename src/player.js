import { Gameboard } from './gameboard.js';

// --- PLAYER CLASS ---
export class Player {
  constructor(type, name = 'Player') {
    this.type = type; 
    this.name = name;  
    this.gameboard = new Gameboard();
    this.opponent = null;  
    this.previousAttacks = new Set();
    this.huntTargets = [];
  }

  placeShips(shipsData) {
    shipsData.forEach(({ length, coordinates }) => {
      this.gameboard.placeShip(length, coordinates);
    });
  }

  attack(opponentCoord) {
    return this.opponent.gameboard.receiveAttack(opponentCoord);
  }

  randomAttack() {
    let coord;
    do {
      coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } while (this.previousAttacks.has(`${coord[0]},${coord[1]}`));
    this.previousAttacks.add(`${coord[0]},${coord[1]}`);
    return coord;
  }

  // Enhanced AI: If hit recently, target adjacent
  smartAttack() {
    while (this.huntTargets.length > 0) {
      const target = this.huntTargets.shift();
      if (!this.previousAttacks.has(target)) {
        this.previousAttacks.add(target);
        return target.split(',').map(Number);
      }
    }
    return this.randomAttack();
  }

  attackOpponent() {
    const coord = this.smartAttack();
    const result = this.opponent.gameboard.receiveAttack(coord);
    if (result === 'hit') {
      const [r, c] = coord;
      const adjacents = [
        [r-1, c], [r+1, c], [r, c-1], [r, c+1]
      ].filter(([x, y]) => x >= 0 && x < 10 && y >= 0 && y < 10)
       .map(([x, y]) => `${x},${y}`);
      this.huntTargets.push(...adjacents);
    }
    return { coord, result };
  }
}

