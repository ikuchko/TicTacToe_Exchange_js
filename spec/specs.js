describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark()).to.equal("X");
   });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.x_coordinate).to.equal(1);
   });

   it("returns the player's mark", function() {
     var testSpace = new Space(1,2);
     expect(testSpace.y_coordinate).to.equal(2);
   });

  it("lets a player mark a space", function() {
      var testPlayer = new Player("X")
      var testSpace = new Space(1,2);
      testSpace.markedBy(testPlayer)
      expect(testSpace.player).to.equal(testPlayer);
   });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board();
    testBoard.initialize();
    expect(testBoard.spaces[0].x_coordinate).to.equal(1);
   });
 });
