import { Player } from '../src/player.js';

describe('Player', () => {
  let human;
  let computer;

  beforeEach(() => {
    human = new Player('human', 'Admiral');
    computer = new Player('computer');
    human.opponent = computer;
    computer.opponent = human;
  });

  test('creates player with correct type', () => {
    expect(human.type).toBe('human');
    expect(computer.type).toBe('computer');
  });

  test('computer makes valid random attacks', () => {
    const { coord, result } = computer.attackOpponent();
    expect(Array.isArray(coord)).toBe(true);
    expect(coord.length).toBe(2);
    expect(['hit', 'miss']).toContain(result);
  });

  test('computer does not attack same coordinate twice', () => {
    const attacks = new Set();
    for (let i = 0; i < 10; i++) {
      const { coord } = computer.attackOpponent();
      const coordStr = coord.join(',');
      expect(attacks.has(coordStr)).toBe(false);
      attacks.add(coordStr);
    }
  });

  test('computer targets adjacent cells after hit', () => {
    // Place a ship on human's board
    human.gameboard.placeShip(3, [[5,5], [5,6], [5,7]]);
    
    // Mock a hit at [5,5]
    computer.previousAttacks.add('5,5');
    computer.huntTargets.push('4,5', '6,5', '5,4', '5,6');
    
    const { coord } = computer.attackOpponent();
    expect(
      ['4,5', '6,5', '5,4', '5,6'].map(c => c.split(',').map(Number))
    ).toContainEqual(coord);
  });
});