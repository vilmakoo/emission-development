const server = require('../src/server/index');
const request = require('supertest');

afterEach(() => {
    server.close();
});

describe('routes: index', () => {
    test('should respond as expected', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.data).toEqual('Sending some JSON');
    });
});

describe('routes: emissions/:country', () => {
    test('should give country\'s emissions when country is finland', async () => {
        const country = 'finland';
        const response = await request(server).get(`/emissions/${country}`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.data.country).toBe('finland');
        expect(response.body.data.emissions[0]).toEqual({ 'emissions': '"15104.373"', 'year': '"1960"' });
        expect(response.body.data.emissions.length).toEqual(60);
    });
});