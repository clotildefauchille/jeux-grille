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
    app.listenKeyboardEvents();
    app.directionRight = app.player.direction[0];
    app.directionLeft=app.player.direction[1];
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
        let indexDeLaCase = index * (COLUMNS - 1) + (index + 1 * index2 + 1);
        if (
          indexDeLaCase ===
          (app.targetCell.y + 1) * (app.targetCell.x + 1) 
        ) {
          cellule.classList.add("targetCell");
        } else if (
          indexDeLaCase ===
          (app.player.y + 1) * (app.player.x + 1) 
        ) {
          app.divPlayer = document.createElement("div");
          app.divPlayer.classList.add("player");
          cellule.appendChild(app.divPlayer);

          if (direction === app.directionUp) {
            app.divPlayer.classList.add("player-up");
          } else if (direction === app.directionDown) {
            app.divPlayer.classList.add("player-down");
          }
          else if (direction === app.directionLeft) {
            app.divPlayer.classList.add("player-left");
          }
        }
      }
      // app.cells = document.querySelectorAll(".cell");
      // app.laCase = app.cells[index];
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
  moveFoward: (direction) => {
    if (direction === app.directionUp) {
      app.player.y--;
    } else if (direction === app.directionDown) {
      app.player.y++;
    }
    app.redrawBoard(direction);
  },
  listenKeyboardEvents: () => {
    document.addEventListener("keyup", function (evt) {
      if (evt.keyCode === 39) {
        app.turnRight(app.directionRight);
      }
      else if (evt.keyCode===37){
        app.turnLeft(app.directionLeft)
      }
      else if (evt.keyCode===40){
        app.moveFoward(app.directionDown)
      }
      else if (evt.keyCode === 38) {
        app.moveFoward(app.directionUp)
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
