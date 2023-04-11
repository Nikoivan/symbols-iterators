import Team from '../src/js/team';
import Character from '../src/js/character';

const bowman = new Character('Ivan', 'Bowman');
const swordsman = new Character('Yana', 'Swordsman');
const magician = new Character('Alexander', 'Magician');

const team = new Team(bowman, swordsman, magician);

test('test for constructor of class Team', () => {
  expect(team).toEqual({
    team: [
      {
        attack: 10,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Ivan',
        type: 'Bowman',
      },
      {
        attack: 10,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Yana',
        type: 'Swordsman',
      },
      {
        attack: 10,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Alexander',
        type: 'Magician',
      },
    ],
  });
});

test('test for Symbol.iterator of class Team', () => {
  const result = [];
  for (const player of team) {
    result.push(player);
  }
  expect(result).toEqual([
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Ivan',
      type: 'Bowman',
    },
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Yana',
      type: 'Swordsman',
    },
    {
      attack: 10,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alexander',
      type: 'Magician',
    },
  ]);
});
