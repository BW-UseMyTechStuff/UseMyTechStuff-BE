const request = require("supertest");

const db = require("../db/db-config");

const server = require("../api/server.js");

describe("HTTP Request Tests", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("tests are running with DB_ENV set to 'testing'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });



})
  describe('POST register', () => {
    it('should post a new blog and return a status code of 404', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ blog_summary: 'I had a helluva day!' })
        .then(response => {
          expect(response).toHaveProperty('status', 404);
        });
    });
    it('register', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'I had a helluva day!',password:"yyet",birthday:"324322",email:"embail@gmajdfasd.com" })
        .then(response => {
            expect(response).toHaveProperty('status', 201);
          });
    });
  });
  describe('POST Login', () => {
    it('should post a new blog and return a status code of 500', () => {
      return request(server)
        .post('/api/auth/login')
        .send({ blog_summary: 'I had a helluva day!' })
        .then(response => {
          expect(response).toHaveProperty('status', 500);
        });
    });
    it('LOGIN', () => {
      return request(server)
        .post('/api/auth/login')
        .send({ username:'I had a helluva day!',password:"fafsdasfdas" })
        .then(res => {
            expect(res.type).toMatch(/json/);
          });
    });
  })
