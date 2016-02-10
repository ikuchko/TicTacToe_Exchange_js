function Player(t_mark) {
  this.t_mark = t_mark;
}

Player.prototype.mark = function() {
  return this.t_mark;
}


function Space(x_coordinate, y_coordinate) {
  this.x_coordinate = x_coordinate;
  this.y_coordinate = y_coordinate;
  this.player = "";
}

Space.prototype.markedBy = function(player) {
 return this.player = player;
}



function Board() {
  this.spaces = [];
}

Board.prototype.initialize = function() {
  z = 0;
  for (var i = 1; i <= 3; i += 1) {
      for (var j = 1; j <= 3; j += 1) {
        var new_space = new Space(i, j)
        this.spaces.push(new_space);
        if (i != z) {
          $("table").append('<tr id=row' + i + '></tr>');
          z = i;
        }
        $('tr#row' + i).append('<td id=' + i + ',' + j +'></td>');
      }
    };
}


Board.prototype.threeInARow = function() {
}

function Game(playerOneName, playerTwoName) {

// var clickTic = function(cell_id, x, y) {
//   $(cell_id).click(function(event) {
//     if (newGame.playerOne.player.t_mark);
//   } else {
//     $(cell_id).text(newGame.playerTwo.player.symbol);
//   });
// //"markCheckAndChange" method
// }

}

$(document).ready(function() {
  $("form#new-game").submit(function(event) {

    // clickTic("#0", 1, 1);
    // clickTic("#1", 1, 2);
    // clickTic("#2", 1, 3);
    // clickTic("#3", 2, 1);
    // clickTic("#4", 2, 2);
    // clickTic("#5", 2, 3);
    // clickTic("#6", 3, 1);
    // clickTic("#7", 3, 2);
    // clickTic("#8", 3, 3);


    event.preventDefault();

    new_board = new Board();
    new_board.initialize();
    // $(new_board.spaces[0]).append("#0");
    console.log("Lets play")
    console.log(new_board)
  });
});
