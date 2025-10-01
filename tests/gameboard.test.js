import { Gameboard } from '../src/gameboard.js';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  // Test ship placement
  test('places ship at specific coordinates', () => {
    expect(gameboard.placeShip(3, [[0,0], [0,1], [0,2]])).toBe(true);
  });

  // Test ship overlap detection
  test('detects ship overlap', () => {
    gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
    expect(gameboard.placeShip(3, [[0,1], [0,2], [0,3]])).toBe(false);
  });

  // Test ship placement out of bounds
  test('receives attack and records hit', () => {
    gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
    expect(gameboard.receiveAttack([0,1])).toBe('hit');
  });

  // Test receiving attack on empty cell
  test('records missed attack', () => {
    gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
    expect(gameboard.receiveAttack([1,1])).toBe('miss');
  });

  // Test all ships sunk detection
  test('reports when all ships are sunk', () => {
    gameboard.placeShip(2, [[0,0], [0,1]]);
    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([0,1]);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});