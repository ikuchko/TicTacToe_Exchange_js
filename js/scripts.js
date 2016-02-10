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

}

$(document).ready(function() {
  $("form#new-game").submit(function(event) {

    $("table").on("click", "td", function() {
      console.log(this);
      $(this).css("background-color", "green");
    });

    event.preventDefault();

    new_board = new Board();
    new_board.initialize();
    // $(new_board.spaces[0]).append("#0");
    console.log("Lets play")
    console.log(new_board)
  });
});
