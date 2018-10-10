class GameBoard {
  constructor(lobby) {
    this.lobby = lobby;
    this.roles = [
      "Loup Garou",
      "Loup Garou",
      "Franc Macon",
      "Franc Macon",
      "Voyante",
      "Noiseuse",
      "Voleur",
      "Soulard",
      "Insomiaque",
      "Chasseur",
      "DoppelGanger"
    ];
    this.turn = 0;
    this.availableRoles = [];
    this.message = "";
    this.players = [];
  }
  
  sleep(ms = 1000) {
    console.log(`sleeping for ${ms}ms...`);
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  timer(fn) {

    fn();
  }

  generateRoles() {
    const stack = this.roles.slice(0, (8 - this.lobby.length) * -1);
    this.availableRoles = stack;

    const players = this.lobby.map(player => {
      const index = Math.floor(Math.random() * stack.length);
      return {
        player,
        role: stack.splice(index, 1)[0]
      };
    });
    this.stack = stack;
    this.players = players;
  }

  newTurn() {
    this.turn++;
    if (this.turn === 1) {
      this.message = "DoppelGanger Turn";
    }
    if (this.turn === 2) {
      turnLoupGarou();
    }
  }

  turnLoupGarou() {
    this.message =
      "Loups-Garous, reveillez vous et cherchez les autres Loups-Garous.";
    const loupsGarous = this.players.filter(
      player => player.role === "Loup Garou"
    );
  }
}

module.exports = GameBoard;
