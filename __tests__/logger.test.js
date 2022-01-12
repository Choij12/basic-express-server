'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing checks for logger', () => {
    it('', async () => {
        const response = await request.get('/person?name=Jacob');
        expect(response.text).toEqual('Jacob');
        });
})