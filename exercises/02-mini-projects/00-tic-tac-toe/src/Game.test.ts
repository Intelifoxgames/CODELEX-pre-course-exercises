import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  // Creates new test instance.
  it("on click should be able to fill in cell correctly", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to click once", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(0)
  

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win if the whole row is filled with X", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)
  

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any row is filled with O", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(8)
    game.onClick(5)

    expect(game.getCells()).toEqual([
      "X", "X", "-",
      "O", "O", "O",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any column is filled by player", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "X", "O", "O",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if any diagonal is filled by player", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(5)
    game.onClick(4)
    game.onClick(6)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "X", "O",
      "O", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should not allow clicks after game has ended", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(4)
    game.onClick(5)
    game.onClick(8)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "O", "X", "O",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should restart the game", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(3)
    game.onClick(4)
    game.onClick(5)
    game.onClick(8)

    game.restart()

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be a tie when all fields are filled", () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(1)
    game.onClick(2)
    game.onClick(3)
    game.onClick(4)
    game.onClick(5)
    game.onClick(6)
    game.onClick(7)
    game.onClick(8)



    expect(game.getCells()).toEqual([
      "X", "X", "O",
      "O", "X", "X",
      "X", "O", "O"
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
