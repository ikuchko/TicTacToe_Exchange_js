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

// Board.prototype.playerMarks = function(x,y,player) {
//   this.spaces.forEach(function(space) {
//     if (space.find(x,y) !== 0) {
//       space.markedBy = player;
//     }
//   });
// },
}


function Game(playerOneName, playerTwoName) {

}
