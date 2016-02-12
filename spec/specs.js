describe('Player', function() {
    it("returns the player's mark", function() {
      var space = new Space(1,2);
      var testPlayer = new Player("X", true);
      testPlayer.markSpace(space);
      expect(space.player).to.equal(testPlayer);
   });

   it("does not allow two players to mark the same space", function() {
     var testPlayer = new Player("X", true);
     var secondTestPlayer = new Player("O", true);
     var testSpace = new Space(1,2);
     testPlayer.markSpace(testSpace);
     secondTestPlayer.markSpace(testSpace);
     expect(testSpace.player).to.equal(testPlayer);
  });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xCoordinate).to.equal(1);
   });

   it("returns the player's mark", function() {
     var testSpace = new Space(1,2);
     expect(testSpace.yCoordinate).to.equal(2);
   });

  it("lets a player mark a space", function() {
      var testPlayer = new Player("X", true);
      var testSpace = new Space(1,2);
      testPlayer.markSpace(testSpace);
      expect(testSpace.markedBy()).to.equal(testPlayer);
   });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    expect(testBoard.spaces[8].xCoordinate).to.equal(3);
   });

   it("returns space on the board by coordinates", function() {
     var testBoard = new Board();
     var testSpace = testBoard.findSpace(3,2);
     expect(testSpace.xCoordinate).to.equal(3);
     expect(testSpace.yCoordinate).to.equal(2);
    });
 });

 describe('Game', function() {
  it("checks all constructor variables", function(){
    var game = new Game(true);
    expect(game.multiplayer).to.equal(true);
    expect(game.players[0].isAI).to.equal(false);
    expect(game.currentTurn < 2).to.equal(!undefined);
  });

  it("changeTurn method changes player turn", function() {
    var game = new Game(true);
    var previousTurn = game.currentTurn;
    expect(game.changeTurn()).to.not.equal(previousTurn);
  });

  it("winner method returns winning player for horizontal match", function() {
    var game = new Game(true);
    var board = game.board;
    var player = game.players[0];
    player.markSpace(board.findSpace(3, 1));
    player.markSpace(board.findSpace(3, 2));
    player.markSpace(board.findSpace(3, 3));
    expect(game.findWinner()).to.equal(player);
  });

  it("winner method returns winning player for vertical match", function() {
    var game = new Game(true);
    var board = game.board;
    var player = game.players[0];
    player.markSpace(board.findSpace(1, 1));
    player.markSpace(board.findSpace(2, 1));
    player.markSpace(board.findSpace(3, 1));
    // debugger;
    expect(game.findWinner()).to.equal(player);
  });

  it("winner method returns winning player for diagonal match", function() {
    var game = new Game(true);
    //var board = game.board;
    var player = game.players[0];
    player.markSpace(board.findSpace(1, 1));
    player.markSpace(board.findSpace(2, 2));
    player.markSpace(board.findSpace(3, 3));
    expect(game.findWinner()).to.equal(player);
  });

  it("winner method returns winning player for next combination", function() {
    var game = new Game(true);
    var board = game.board;
    var player1 = game.players[0];
    var player2 = game.players[1];
    player1.markSpace(board.findSpace(1, 3));
    player2.markSpace(board.findSpace(1, 2));
    expect(game.findWinner()).to.equal(undefined);
  });

  it("winner method returns winning player for next combination", function() {
    var game = new Game(true);
    var board = game.board;
    var player1 = game.players[0];
    var player2 = game.players[1];
    player1.markSpace(board.findSpace(1, 1));
    player1.markSpace(board.findSpace(1, 3));
    player1.markSpace(board.findSpace(2, 3));
    player2.markSpace(board.findSpace(1, 2));
    player2.markSpace(board.findSpace(2, 1));
    expect(game.findWinner()).to.equal(undefined);
  });

  it("marks space on AI turn", function() {
    var game = new Game(false);
    var board = game.board;
    var player1 = game.players[0];
    player1.markSpace(board.findSpace(1, 1));
    game.aiTurn(0);
    expect(game.countMarkSpaces()).to.equal(2);
  });

});
