import Character from '../src/js/character';

const characterErrorList = [
  ["Error - name isn't string", 1, 'Daemon', 'Ошибка в параметре name'],
  ['Error - name is too short', 'a', 'Daemon', 'Ошибка в параметре name'],
  [
    'Error - name is too long',
    'AAAAAAAAAbbbbbddddduuuuullllaaaaeeevvvvv',
    'Daemon',
    'Ошибка в параметре name',
  ],
  [
    'Error - incorrect type of player',
    'Matvey',
    'Demon',
    'Ошибка в типе игрока',
  ],
];

const testCharacterErrors = test.each(characterErrorList);

testCharacterErrors(
  'test Errors of class Character by name is %q type is %w',
  (error, name, type, expected) => {
    expect(() => {
      const result = new Character(name, type);
      console.log(result);
    }).toThrowError(expected);
  },
);
