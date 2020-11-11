var app = {
  init: function () {

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
    var ROWS = app.targetCell.y + 1;
    var COLUMNS = app.targetCell.x + 1;
    for (let index = 0; index < ROWS; index++) {
      var row = document.createElement("div");
      row.className = "row";
      app.board.appendChild(row);

      for (let index2 = 0; index2 < COLUMNS; index2++) {
        var cellule = document.createElement('div');
        let currentCell = cellule.className = "cell";
        row.appendChild(cellule);
      }
      let cells = document.querySelectorAll(".cell");
      let laCase = cells[index];
      if (laCase = cells[(app.targetCell.y + 1) * (app.targetCell.x + 1) - 1]) {
        laCase.classList.add("targetCell");
      }
      else if (laCase = cells[(app.player.y + 1) * (app.player.x + 1) - 1]){
        let divPlayer=document.createElement("div");
        divPlayer.classList.add("player");
        laCase.appendChild(divPlayer);
      }
    }

  },
  clearBoard: function () {
    app.board.textContent = ""
  },
  redrawBoard: function () {
    app.clearBoard();
    app.drawBoard();
  },
  


};

document.addEventListener('DOMContentLoaded', app.init);