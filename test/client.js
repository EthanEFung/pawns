const assert = require("assert");
const chai = require("chai");
const should = chai.should();
const path = require("path");

describe("Client:::", function() {
  it("should have unit tests", function() {});
  it("should have an existing client javascript", function() {
    require("../client/js/index").should.exist;
  });

  describe("The Board", function() {
    const board = require("../client/js/handlers.js");

    describe("the board coloring function", function() {
      it("should have a coloring function", function() {
        board.colorSquares.should.exist;
        assert.equal(typeof board.colorSquares, "function");
      });
      it("should color the upper left square white", function() {
        function FakeSq(num) {
          this.className = "square a " + num;
          this.setAttribute = function(attr, string) {
            this.className = string;
            this[attr] = string;
          };
        }
        fakeSquares = [];
        for (let i = 1; i <= 3; i++) {
          let square = new FakeSq(i);
          fakeSquares.push(square);
        }

        board.colorSquares(fakeSquares);
        assert.equal(fakeSquares[0].className, "square a 1 white");
      });
    });

    it("should have game initializer", function() {
      board.initializeGame.should.exist;
      assert.equal(typeof board.initializeGame, "function");
    });
  });
});
