import  request  from "supertest";
import app from "../app";

it("should add a new member to the waitlist", async () => {
  await request(app)
    .post("/api/v1/waitlist/new-member")
    .send({ email: "test@gmail.com" })
    .expect(201);


});
it("should not add a member with an existing email", async () => {
  await request(app)
    .post("/api/v1/waitlist/new-member")
    .send({ email: "test@gmail.com" })
    .expect(201);
  await request(app)
    .post("/api/v1/waitlist/new-member")
    .send({ email: "test@gmail.com" })
    .expect(409);
});
