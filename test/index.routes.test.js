const server = require('../src/server/index');
const request = require('supertest');

afterEach(() => {
    server.close();
});

describe('routes: index', () => {
    test('should respond as expected', async () => {
        const response = await request(server).get('/api/');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.data).toEqual('Sending some JSON');
    });
});

describe('routes: emissions/:country', () => {
    test('should give country\'s emissions when country is found', async () => {
        const country = 'finland';
        const response = await request(server).get(`/api/emissions?country=${country}`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country).toBe('Finland');
        expect(response.body.emissions[0]).toEqual({ 'value': 15104.373, 'year': 1960 });
        expect(response.body.emissions.length).toEqual(60);
        expect(response.body.populations).toEqual(undefined);
    });

    test('should give country\'s population if percapita is set to true in the request', async () => {
        const country = 'finland';
        const response = await request(server).get(`/api/emissions?country=${country}&percapita=true`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country).toBe('Finland');
        expect(response.body.populations.length).toBe(60);
        expect(response.body.populations[0]).toEqual({ 'value': 4429634, 'year': 1960 });
    });

    test('should give \'NOT FOUND\' if nothing is found', async () => {
        const country = 'asdf';
        const response = await request(server).get(`/api/emissions?${country}`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country).toBe('NOT FOUND');
        expect(response.body.emissions).toEqual([]);
        expect(response.body.populations).toEqual(undefined);
        expect(response.body.emissions.length).toEqual(0);
    });
});
