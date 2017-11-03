const assert = require("assert");
const chai = require("chai");
const should = chai.should();

describe("Server:::", function() {
  it("should have unit tests", function() {});
  it("should have an existing server", function() {
    const app = require("../server/config.js");
    app.should.exist;
  });
});
