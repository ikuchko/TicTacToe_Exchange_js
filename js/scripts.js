function Player(mark, isAI) {
  this.mark = mark;
  this.isAI = isAI;
}

Player.prototype.markSpace = function(space) {
  if (space.player === undefined) {
    space.player = this;
    return true;
  } else {
    return false;
  }
}


function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.player;
}

Space.prototype.markedBy = function() {
 return this.player;
}


function Board() {
  this.spaces = [];
  for (var i = 1; i <= 3; i += 1) {
    for (var j = 1; j <= 3; j += 1) {
      var newSpace = new Space(i, j)
      this.spaces.push(newSpace);
    }
  }
}


Board.prototype.findSpace = function(xCoordinate, yCoordinate) {
  for(var indvSpace in this.spaces) {
    if ((xCoordinate === this.spaces[indvSpace].xCoordinate) && (yCoordinate === this.spaces[indvSpace].yCoordinate)){
      return this.spaces[indvSpace];
    }
  }
}


function Game(multiplayer) {
  this.multiplayer = multiplayer;
  this.players = [];
  this.currentTurn = 0;
  //this.currentTurn = Math.floor(Math.random() * 2);
  this.board = new Board();

  this.players.push(new Player("X", false));
  if(multiplayer === true) {
    this.players.push(new Player("O", false));
  } else {
    this.players.push(new Player("O", true));
  }
}

Game.prototype.aiTurn = function(level) {
  var xCoordinate;
  var yCoordinate;
  if (this.countMarkSpaces() < 9) {
    if (level === 0) {
      do {
        xCoordinate = Math.floor((Math.random() * 3) +1);
        yCoordinate = Math.floor((Math.random() * 3) +1);
      } while (this.players[1].markSpace(this.board.findSpace(xCoordinate, yCoordinate)) === false);
    }
    this.changeTurn();
    return xCoordinate + "-" + yCoordinate;
  }
}

Game.prototype.changeTurn = function () {
  this.currentTurn = (this.currentTurn === 0)? 1: 0;
}

Game.prototype.countMarkSpaces = function() {
  var count = 0;
  for (var index in this.board.spaces) {
    if (this.board.spaces[index].player !== undefined) {
      count ++;
    }
  }
  return count;
}

Game.prototype.checkDiagonal = function () {
  if (this.board.findSpace(2, 2).markedBy() != undefined) {
    if (((this.board.findSpace(1, 1).markedBy() === this.board.findSpace(2, 2).markedBy())  && (this.board.findSpace(1, 1).markedBy() === this.board.findSpace(3, 3).markedBy())) || ((this.board.findSpace(1, 3).markedBy() === this.board.findSpace(2, 2).markedBy())  && (this.board.findSpace(1, 3).markedBy() === this.board.findSpace(3, 1).markedBy()))) {
      return true;
    } else {
      return false;
    }
  }
}

Game.prototype.checkVertical = function () {
  // debugger;
  if (this.board.findSpace(2, 1).markedBy() != undefined) {
    if ((this.board.findSpace(1, 1).markedBy() === this.board.findSpace(2, 1).markedBy())  && (this.board.findSpace(2, 1).markedBy() === this.board.findSpace(3, 1).markedBy()) &&
    (this.board.findSpace(1, 1).markedBy() === this.board.findSpace(3, 1).markedBy())) {
      return true;
    }
  }

  if (this.board.findSpace(2, 2).markedBy() != undefined) {
    if ((this.board.findSpace(1, 2).markedBy() === this.board.findSpace(2, 2).markedBy())  && (this.board.findSpace(2, 2).markedBy() === this.board.findSpace(3, 2).markedBy()) &&
    (this.board.findSpace(1, 2).markedBy() === this.board.findSpace(3, 2).markedBy())) {
      return true;
    }
  }

  if (this.board.findSpace(2, 3).markedBy() != undefined) {
    if ((this.board.findSpace(1, 3).markedBy() === this.board.findSpace(2, 3).markedBy()) &&      (this.board.findSpace(1, 3).markedBy() === this.board.findSpace(3, 3).markedBy())  && (this.board.findSpace(2, 3).markedBy() === this.board.findSpace(3, 3).markedBy())) {
      return true;
    }
  }

  return false;
}

Game.prototype.checkHorizontal = function () {
  if (this.board.findSpace(1, 2).markedBy() != undefined) {
    if ((this.board.findSpace(1, 1).markedBy() === this.board.findSpace(1, 2).markedBy())  && (this.board.findSpace(1, 2).markedBy() === this.board.findSpace(1, 3).markedBy()) &&
    (this.board.findSpace(1, 1).markedBy() === this.board.findSpace(1, 3).markedBy())) {
      return true;
    }
  }

  if (this.board.findSpace(2, 2).markedBy() != undefined) {
    if ((this.board.findSpace(2, 1).markedBy() === this.board.findSpace(2, 2).markedBy())  && (this.board.findSpace(2, 2).markedBy() === this.board.findSpace(2, 3).markedBy()) &&
    (this.board.findSpace(2, 1).markedBy() === this.board.findSpace(2, 3).markedBy())) {
      return true;
    }
  }

  if (this.board.findSpace(3, 2).markedBy() != undefined) {
    if ((this.board.findSpace(3, 1).markedBy() === this.board.findSpace(3, 2).markedBy()) &&      (this.board.findSpace(3, 1).markedBy() === this.board.findSpace(3, 3).markedBy())  && (this.board.findSpace(3, 2).markedBy() === this.board.findSpace(3, 3).markedBy())) {
      return true;
    }
  }

  return false;
}

Game.prototype.findWinner = function() {
  debugger;
  if (this.checkVertical() || this.checkHorizontal() || this.checkDiagonal()) {
    return this.players[this.currentTurn];
  } else if (this.countMarkSpaces() === 9) {
    return false;
  }
}

Game.prototype.takeTurn = function (x, y) {
  var space = this.board.findSpace(x, y);
  var playerTurn = this.currentTurn;
  //debugger;
  if(this.players[this.currentTurn].markSpace(space)) {
    //this.populateTable();
    return this.players[playerTurn].mark;
  }
}

Game.prototype.populateTable = function () {
  for (var index in this.board.spaces) {
    $("#" + this.board.spaces[index].xCoordinate + this.board.spaces[index].yCoordinate).text(this.board.spaces[index].player);
  }
};

$(document).ready(function() {
  $("form#single-player").submit(function(event) {
    event.preventDefault();

    var game = new Game(false);
    game.populateTable();


    $("td").click(function(event) {
      var xCoordinate = parseInt(((event.target.id).split("-")[0]));
      var yCoordinate = parseInt(((event.target.id).split("-")[1]));
      var player = game.takeTurn(xCoordinate, yCoordinate);
      if (player != undefined) {
        $("#" + event.target.id).append("<h1>" + "X" + "</h1>");
        var coordinates = game.aiTurn(0);
        $("#" + coordinates).append("<h1>" + "O" + "</h1>");
      }
      //debugger;
      if (game.findWinner() === undefined) {
        game.changeTurn();
      } else if (game.findWinner() != undefined) {
        var player = game.findWinner();
        var playerWin = player.mark
        $(".winner").show();
        if (player === false){
          $(".winner").append("<h1>Draw!!</h1>");
        } else if(player.mark === "X") {
          $(".winner").append("<h1>You beat the computer!</h1>");
        } else if (player.mark === "O"){
          $(".winner").append("<h1>Computer won!</h1>");
        }
      }
    });
  });

  $("form#multiplayer").submit(function(event) {
    event.preventDefault();

    var game = new Game(true);
    game.populateTable();

    $("td").click(function(event) {
      var xCoordinate = parseInt(((event.target.id).split("-")[0]));
      var yCoordinate = parseInt(((event.target.id).split("-")[1]));
      // console.log(game.takeTurn(xCoordinate, yCoordinate));
      $("#" + event.target.id).append("<h1>" + game.takeTurn(xCoordinate, yCoordinate) + "</h1>");

      if (game.findWinner() != undefined) {
        var playerWin = game.findWinner().mark
        $(".winner").show();
      }
    });
  });

  $("form#play-again").submit(function(event) {
    location.reload(forceGet);
  });
});
