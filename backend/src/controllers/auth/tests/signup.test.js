const request = require("supertest")
const app = require('../app')
const bcrypt = require("bcryptjs")
const User = require('../models/user.model')

describe("POST /api/v1/auth/signup", () => {
  it("should create a user successfully", async () => {
    const res = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Muhammad Bilal",
        email: "Test@Email.com",
        phone: "1234567890",
        orgName: "TestOrg",
        role: "Developer",
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
    await User.create({
      fullName: "Bilal",
      email: "bilal@test.com",
      phone: "1112223333",
      orgName: "Org1",
      role: "User",
      accountType: "applicant",
      password: "pass1234",
    });

    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Bilal 2",
        email: "bilal@test.com",
        phone: "9998887777",
        orgName: "Org2",
        role: "Admin",
        accountType: "sponsor",
        password: "pass5678",
      })
      .expect(409); // duplicate email
  });

  it("should not allow invalid email format", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Bilal",
        email: "invalidEmail",
        phone: "1234567890",
        orgName: "Org",
        role: "User",
        accountType: "applicant",
        password: "pass123",
      })
      .expect(400);
  });

  it("should not allow non-numeric phone numbers", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Bilal",
        email: "bilal2@test.com",
        phone: "abc123",
        orgName: "Org",
        role: "User",
        accountType: "applicant",
        password: "pass123",
      })
      .expect(400);
  });

  it("should not allow invalid enum for accountType", async () => {
    await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "Bilal",
        email: "enum@test.com",
        phone: "1234567890",
        orgName: "Org",
        role: "User",
        accountType: "randomType",
        password: "pass123",
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


