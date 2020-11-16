var app = {
  init: function () {
    
    app.board = document.querySelector("#board");
    app.player = {
      x: 0,
      y: 0,
      direction: ["right", "left", "up", "down"],
      gameOver:false
    };
    app.targetCell = {
      x: 5,
      y: 3,
    };

    app.listenKeyboardEvents();
    app.directionRight = app.player.direction[0];
    app.directionLeft = app.player.direction[1];
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

        if (app.targetCell.y === index && (app.targetCell.x === index2)) {
          cellule.classList.add("targetCell");
        } 
        if (app.player.x === index2 && app.player.y === index) {
          app.divPlayer = document.createElement("div");
          app.divPlayer.classList.add("player");
          cellule.appendChild(app.divPlayer);

          if (direction === app.directionUp) {
            app.divPlayer.classList.add("player-up");
          } else if (direction === app.directionDown) {
            app.divPlayer.classList.add("player-down");
          } else if (direction === app.directionLeft) {
            app.divPlayer.classList.add("player-left");
          }
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
    if (1 <= app.player.x && app.player.x <= 5) {
      app.player.x--;
      app.redrawBoard(direction);
    }
    else if(app.gameOver===true){

    }

  },
  turnRight: (direction) => {

    if (0 <= app.player.x && app.player.x <= 4) {
      app.player.x++;
      app.redrawBoard(direction);
    }
else if (app.gameOver === true) {

}

  },
  moveFoward: (direction) => {
    if (direction === app.directionUp) {
      if (1 <= app.player.y && app.player.y <= 3) {
        app.player.y--
      };


    } else if (direction === app.directionDown) {
      if (0 <= app.player.y && app.player.y <= 2) {
        app.player.y++
      }
      else if (app.gameOver === true) {

      }
    }
    app.redrawBoard(direction);
    
  },
  listenKeyboardEvents: () => {
    document.addEventListener("keyup", function (evt) {
      if (evt.keyCode === 39) {
        app.turnRight(app.directionRight);
      } else if (evt.keyCode === 37) {
        app.turnLeft(app.directionLeft);
      } else if (evt.keyCode === 40) {
        app.moveFoward(app.directionDown);
      } else if (evt.keyCode === 38) {
        app.moveFoward(app.directionUp);
      }
    });
  },
isGameOver:()=>{
  if (app.player.x===app.targetCell.x&&(app.player.y===app.targetCell.y)){
alert ("game is over!!");
app.player.isGameOver===true;
  }
}
};

document.addEventListener("DOMContentLoaded", app.init);