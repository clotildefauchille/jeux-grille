var app = {
  init: function () {
    console.log('init !');
    app.board = document.querySelector("#board");
    app.player = {
      x: 0,
      y: 0,
      direction: "right",
    };
    app.targetCell = {
      x: 5,
      y: 3,
    };
    app.drawBoard();

  },
  drawBoard: function () {
    var ROWS = 4;
    var COLUMNS = 6
    for (let index = 0; index < ROWS; index++) {
      var row = document.createElement("div");
      row.className = "row";
      app.board.appendChild(row);
      var rowSelect = document.querySelectorAll(".cell");
      // // var currentCell = cells[0];
      if (rowSelect[index] = rowSelect[app.targetCell.x] && (rowSelect[index] = rowSelect[app.targetCell.y])) {
        cellule.classList.add("targetCell");
      } else if (rowSelect[index] = rowSelect[app.player.x] && (rowSelect[index] = rowSelect[app.player.y])) {
        cellule.classList.add("player");
      }
      for (var index2 = 0; index2 < COLUMNS; index2++) {
        var cellule = document.createElement('div');
        cellule.className = "cell";
        row.appendChild(cellule);
        
      }
    }


  },
  clearBoard: function () {
    app.board.textContent = ""
  },
  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  }


};

document.addEventListener('DOMContentLoaded', app.init);