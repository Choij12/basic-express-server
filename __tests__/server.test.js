const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing for server', () => {

  it('404', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(404);
  });

  it('404', async () => {
    const response = await request.post('/');
    expect(response.status).toEqual(404);
  });
});