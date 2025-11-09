const request = require("supertest")
const app = require('../../../app')

describe("POST /api/v1/auth/signin", () => {
    it("should return 400 if email or password is missing", async () => {
        await request(app)
            .post("/api/v1/auth/signin")
            .send({ email: "" })
            .expect(400);

        await request(app)
            .post("/api/v1/auth/signin")
            .send({ password: "12345678" })
            .expect(400);
    });

    it("should return 404 if user does not exist", async () => {
        await request(app)
            .post("/api/v1/auth/signin")
            .send({
                email: "unknown@test.com",
                password: "wrongpass",
            })
            .expect(404);
    });

    it("should return 404 if password is incorrect", async () => {
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
            .post("/api/v1/auth/signin")
            .send({
                email: "Test@Email.com",
                password: "wrongpassword",
            })
            .expect(404);
    });

    it("should return 200 and a token if credentials are correct", async () => {
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

        const res = await request(app)
            .post("/api/v1/auth/signin")
            .send({
                email: "Test@Email.com",
                password: "secure123",
            })
            .expect(200);

        expect(res.body.status).toBe("success");
        expect(res.body.data).toHaveProperty("token");
        expect(res.body.data.user.email).toBe("test@email.com");
    });
});