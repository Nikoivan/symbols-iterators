import Character from "./character";

class Team {
  constructor() {
    this.member = new Set();
  }

  add(player) {
    if (this.member.has(player)) {
      throw new Error("Такой игрок уже существует");
    }
    this.member.add(player);
  }

  addAll(...player) {
    player.forEach((el) => {
      this.member.add(el);
    });
  }

  toArray() {
    return [...this.member];
  }

  [Symbol.iterator]() {
    this.team = [...this.member];
    let current = 0;
    let last = this.team.length;

    return {
      next: function () {
        if (current > last) {
          return {
            value: undefined,
            done: true,
            current,
          };
        }
        const result = {
          value: this.team[current],
          done: false,
          current,
        };
        current++;
        return result;
      }.call(set),
    };
  }
  /*some() {
    this.team = [...this.member];
    return function () {
      return this.team;
    }.call(set);
  }*/
}

export default Team;

const bowman = new Character("Ivan", "Bowman");
const swordsman = new Character("Yana", "Swordsman");
const magician = new Character("Alexander", "Magician");
const set = new Team();
set.addAll(bowman, swordsman, magician);

set.toArray();
console.log(set[Symbol.iterator]());
console.log(set[Symbol.iterator]());
console.log(set[Symbol.iterator]());
console.log(set[Symbol.iterator]());
