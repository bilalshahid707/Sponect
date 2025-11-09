const request = require("supertest")
const app = require('../../../app')
const User = require('../../../models/user.model')

describe("POST /api/v1/auth/signup", () => {
  it("should create a user successfully", async () => {
    const res = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "1234567890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "applicant",
        password: "secure123",
      })
      .expect(201);

    expect(res.body.status).toBe("success");

    // check lowercase transformations in DB
    const createdUser = await User.findOne({ where: { email: "test@email.com" } });
    expect(createdUser).not.toBeNull();
    expect(createdUser.email).toBe("test@email.com");
    expect(createdUser.accountType).toBe("applicant");
  });

  it("should not allow duplicate emails", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "1234567890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "applicant",
        password: "secure123",
      })

    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "1234567890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "applicant",
        password: "secure123",
      })
      .expect(409); // duplicate email
  });

  it("should not allow invalid email format", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "TestEmail.com",
        phone: "1234567890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "applicant",
        password: "secure123",
      })
      .expect(400);
  });

  it("should not allow non-numeric phone numbers", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "123456q890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "applicant",
        password: "secure123",
      })
      .expect(400);
  });

  it("should not allow invalid enum for accountType", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "1234567890",
        orgnanizationName: "TestOrg",
        designation: "Developer",
        accountType: "admin",
        password: "secure123",
      })
      .expect(400);
  });

  it("should fail when required fields are missing", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        email: "missing@test.com",
        password: "pass123",
      })
      .expect(400);
  });
});


