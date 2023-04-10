import Character from "./character";

class Team {
  constructor(...player) {
    this.team = [...player];
  }
  iterator() {
    let current = 0;
    let last = this.team.length;
    return {
      next() {
        if (current >= last) {
          return {
            value: undefined,
            done: true,
          };
        }
        const result = {
          value: this.team[current],
          done: false,
        };
        current++;
        return result;
      },
    };
  }
}

export default Team;

const bowman = new Character("Ivan", "Bowman");
const swordsman = new Character("Yana", "Swordsman");
const magician = new Character("Alexander", "Magician");

const test = new Team(bowman, swordsman, magician);
const gen = test.iterator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
