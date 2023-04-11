class Team {
  constructor(...player) {
    this.team = [...player];
  }

  [Symbol.iterator]() {
    const { team } = this;
    let index = -1;

    return {
      next() {
        if (index >= team.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        index += 1;
        return {
          value: team[index],
          done: false,
        };
      },
    };
  }
}

export default Team;
