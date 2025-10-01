// ship.js
export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;  // Number of hits taken
  }

  hit() {
    this.hits += 1;
    console.log(`Ship hit! Total hits: ${this.hits}/${this.length}`);
    if (this.isSunk()) {
      console.log(`Ship sunk! (Length: ${this.length})`);
    }
    return this.hits;
  }

  isSunk() {
    return this.hits >= this.length;  // Sunk when all cells hit
  }
}
