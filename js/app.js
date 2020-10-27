var app = {
  init: function () {
    console.log('init !');
    app.player = {
      x: 0,
      y: 0,
      direction: "right",
    }
    app.targetCell = {
      x: 5,
      y: 3,
    }
    app.drawBoard()
  },
  drawBoard: function () {
    var ROWS = 4;
    var COLUMNS = 6
    for (let index = 0; index < ROWS; index++) {
      var row = document.createElement("div");
      row.className = "row";
      var board = document.querySelector("#board");
      board.appendChild(row);
      for (var index2 = 0; index2 < COLUMNS; index2++) {
        var cellule = document.createElement('div');
        cellule.className = "cell";
        row.appendChild(cellule);
        var currentCell = document.querySelectorAll(".cell");
        if (currentCell[index] = app.targetCell.x && (currentCell[index] = app.targetCell.y)) {
          cellule.classList.add("targetCell");
        } else if (currentCell[index] = app.player.x && (currentCell[index] = app.player.y)) {
          cellule.classList.add("player");
        }
      }
    }


  }


};

document.addEventListener('DOMContentLoaded', app.init);