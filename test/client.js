const assert = require("assert");
const chai = require("chai");
const should = chai.should();
const path = require("path");

describe("Client:::", function() {
  it("should have unit tests", function() {});
  it("should have an existing client javascript", function() {
    require("../client/js/index").should.exist;
  });
  it("should have existing css files", function() {
    require("../client/css/styles").should.exist;
  });
});
