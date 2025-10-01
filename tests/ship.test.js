import { Ship } from '../src/ship.js';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Create a ship of length 3
  });

  test('creates ship with correct length', () => {
    expect(ship.length).toBe(3); // Check ship length
  });

  test('hit() increases hits counter', () => {
    ship.hit();
    expect(ship.hits).toBe(1); // Check hits after one hit
  });

  test('isSunk() returns false when not all positions hit', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false); // Check if ship is sunk
  });

  test('isSunk() returns true when all positions hit', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true); // Check if ship is sunk
  });
});