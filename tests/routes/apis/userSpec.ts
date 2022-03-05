import supertest from "supertest";
import app from "../../../src";
import routes from "../../../src/routes/apis/user";

app.use('/user', routes);

describe('GET /users routes', () => {
  it('expects index route to work', () => {
    const request = supertest(routes)
    const response = request.get('/')
    expect(response).not.toBeFalsy();
  })
})