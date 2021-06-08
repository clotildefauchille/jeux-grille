var app = {
  init: () => {

    app.board = document.querySelector("#board");
    app.player = {
      x: 0,
      y: 0,
      direction: ["right", "left", "up", "down"],
      gameOver: false,
      counter:0,
    };
    app.targetCell = {
      x: Math.floor(Math.random() * 5)+1,
      y: Math.floor(Math.random() * 3)+1,
    };

    app.listenKeyboardEvents();
    app.listenButtonClick();
    app.directionRight = app.player.direction[0];
    app.directionLeft = app.player.direction[1];
    app.directionUp = app.player.direction[2];
    app.directionDown = app.player.direction[3];
    app.drawBoard(app.directionDown);
  },
  drawBoard: (direction) => {
    var ROWS = 4;
    var COLUMNS = 6;
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
          else if (direction === app.directionRight) {
            app.divPlayer.classList.add("player-right")
          }
        }
      }
    }
    app.isGameOver();
  },
  clearBoard: function () {
    app.board.textContent = "";
  },
  redrawBoard: function (direction) {
    app.clearBoard();
    app.drawBoard(direction);
  },
  turnLeft: (direction) => {
    
    if (1 <= app.player.x && app.player.x <= 5 && app.player.gameOver===false) {
      app.player.x--;
      app.player.counter++;
      // console.log('app.counter', app.player.counter)
      app.redrawBoard(direction);
    }
    else {
      // console.log('helloleft')
    }
  },
  turnRight: (direction) => {
    
    if (0 <= app.player.x && app.player.x <= 4 && app.player.gameOver === false) {
        app.player.x++;
        app.player.counter++;
      // console.log('app.counter', app.player.counter)
        app.redrawBoard(direction);
      }
    
    
    else {
      // console.log('helloright')
    }

  },
  moveFoward: (direction) => {
    if (direction === app.directionUp && app.player.gameOver == false){
      if (1 <= app.player.y && app.player.y <= 3 ) {
        app.player.y--
        app.player.counter++;
        // console.log('app.counter', app.player.counter)
      };
      app.redrawBoard(direction);
    } 
    else if (direction === app.directionDown && app.player.gameOver == false) {
     if (0 <= app.player.y && app.player.y <= 2 ) {
        app.player.y++
       app.player.counter++;
      //  console.log('app.counter', app.player.counter)
      }
    app.redrawBoard(direction);
     }
    else {
      // console.log('hellomove') 
    }
  },
  listenKeyboardEvents: () => {
    document.addEventListener('keydown', (evt) => {
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
  replay:()=>{
    app.player = {
      x: 0,
      y: 0,
      gameOver: false,
      counter: 0,
    };
    document.location.reload()
    app.redrawBoard(app.directionDown);
  },
  listenButtonClick: () => {
    document.addEventListener('click', (evt) => {
      app.replay();
    }) 
  },
  isGameOver: () => {
    if (app.player.x == app.targetCell.x && (app.player.y == app.targetCell.y)) {
      app.player.gameOver = true;
      alert(`game is over!! tu t'es déplacé en ${app.player.counter} coups`);
      // console.log("app.player.gameOver", app.player.gameOver)
      app.divPlayer.classList.add("gameOver");
    }
  }
};

document.addEventListener("DOMContentLoaded", app.init);