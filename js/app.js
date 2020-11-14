var app = {
  init: function () {
    app.board = document.querySelector("#board");
    app.player = {
      x: 0,
      y: 0,
      direction: ["right", "left", "up", "down"],
    };
    app.targetCell = {
      x: 5,
      y: 3,
    };

    app.directionUp = app.player.direction[2];
    app.directionDown = app.player.direction[3];
    app.drawBoard(app.directionDown);
  },
  drawBoard: function (direction) {
    var ROWS = app.targetCell.y + 1;
    var COLUMNS = app.targetCell.x + 1;
    for (let index = 0; index < ROWS; index++) {
      var row = document.createElement("div");
      row.className = "row";
      app.board.appendChild(row);

      for (let index2 = 0; index2 < COLUMNS; index2++) {
        var cellule = document.createElement("div");
        cellule.className = "cell";
        row.appendChild(cellule);
      }
      let cells = document.querySelectorAll(".cell");
      let laCase = cells[index];
      if (
        (laCase = cells[(app.targetCell.y + 1) * (app.targetCell.x + 1) - 1])
      ) {
        laCase.classList.add("targetCell");
      } else if (
        (laCase = cells[(app.player.y + 1) * (app.player.x + 1) - 1])
      ) {
        app.divPlayer = document.createElement("div");
        app.divPlayer.classList.add("player");
        laCase.appendChild(app.divPlayer);

        if (direction === app.directionUp) {
          app.divPlayer.classList.add("player-up");
        } else if (direction === app.directionDown) {
          app.divPlayer.classList.add("player-down");
        }
      }
    }
  },
  clearBoard: function () {
    app.board.textContent = "";
  },
  redrawBoard: function (direction) {
    app.clearBoard();
    app.drawBoard(direction);
  },
  turnLeft: (direction) => {
    app.player.direction[1];
    app.player.x--;

    app.redrawBoard(direction);
  },
  turnRight: (direction) => {
    app.player.direction[0];
    app.player.x++;
    app.redrawBoard(direction);
  },
  moveFoward: () => {
    y++;
    app.redrawBoard();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
