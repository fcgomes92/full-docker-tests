import app from "../../src/server";
import chai from "chai";
import request from "supertest";

const expect = chai.expect;

describe("Sanity test", () => {
  it("should get ok from root endpoint", done => {
    request(app)
      .get("/")
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
      done();
  });
});
