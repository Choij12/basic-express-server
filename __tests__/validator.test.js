'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the validator feature', () => {

    it('Should return a 500 status if theres nothing present', async () => {
      const response = await request.get('/person');

      expect(response.status).toEqual(500);
    });
    it('Should return 200 status if name present', async () => {
      const response = await request.get('/person?name=Jacob');
  
      expect(response.status).toEqual(200);
    });
  });