// test
import "jest";
import supertest from "supertest";

// app
import app from "../router";


describe("game api", () => {
  test("get game info responds 200", async (done) => {
    // response
    const response = await supertest(app).get("/api/game/");
    
    // assert
    expect(response.status).toBe(200);
    done();
  });
});
