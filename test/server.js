const assert = require("assert");
const chai = require("chai");
const should = chai.should();
const app = require("../server/config.js");

describe("Server:::", function() {
  it("should have unit tests", function() {});
  it("app should exist", function() {
    app.should.exist;
  });
});
