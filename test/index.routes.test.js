const server = require('../src/index');
const request = require('supertest');
const mongoose = require('mongoose');

afterEach(() => {
    server.close();
});

afterAll(async done => {
    mongoose.connection.close();
    done();
});

describe('routes: /api/index', () => {
    test('should respond as expected', async () => {
        const response = await request(server).get('/api/');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.data).toEqual('Sending some JSON');
    });
});

describe('routes: /api/emissions/:country', () => {
    test('should give country\'s emissions when country is found', async () => {
        const country = 'finland';
        const response = await request(server).get(`/api/emissions/${country}`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country.name).toBe('Finland');
        expect(response.body.country.data[0].emissions).toBe(15104.373);
        expect(response.body.country.data.map(d => d.emissions).length).toEqual(60);
        expect(response.body.country.data.populations).toEqual(undefined);
    });

    test('should give country\'s populations if percapita is set to true in the request', async () => {
        const country = 'finland';
        const response = await request(server).get(`/api/emissions/${country}?percapita=true`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country.name).toBe('Finland');
        expect(response.body.country.data.map(d => d.population).length).toBe(60);
        expect(response.body.country.data.map(d => d.population)[0]).toBe(4429634);
    });

    test('should give \'NOT FOUND\' if nothing is found', async () => {
        const country = 'asdf';
        const response = await request(server).get(`/api/emissions/${country}`);
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.country.name).toBe('NOT FOUND');
        expect(response.body.country.data.map(d => d.emissions)).toEqual([]);
        expect(response.body.country.data.map(d => d.populations)).toEqual([]);
        expect(response.body.country.data.map(d => d.emissions).length).toEqual(0);
    });

    test('should give average emissions of countrys with high income', async () => {
        const response = await request(server).get('/api/emissions/emissions?percapita=true&compare=true');
        expect(response.status).toEqual(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.highIncomeAverages.countriesCount).toBe(80);
        expect(response.body.highIncomeAverages.averages.length).toBe(60);
        expect(response.body.highIncomeAverages.averages[0]).toEqual({ year: 1960, emissionsAverage: 64339.21098749999, populationAverage: 9623624.0375, perCapitaAverage: 0.004847923257891564 });
    });
});

describe('routes: /api/emissions/top_emitters', () => {
    test('should give countries with largest emissions in 2018', async () => {
        const response = await request(server).get('/api/emissions/top_emitters');
        expect(response.status).toEqual(200);
        expect(response.body.length).toBe(10);
        expect(response.body).toEqual(['Qatar', 'Curacao', 'Trinidad and Tobago', 'Kuwait', 'Bahrain', 'United Arab Emirates', 'Brunei Darussalam', 'Saudi Arabia', 'Sint Maarten (Dutch part)', 'Luxembourg']);
    });
});




// TODO: info-kenttä, jossa ohjeistus sovelluksen käyttöön, ja sovelluksen kaunistamista
// TODO: filtteröi maata etsiessä data annetun aikavälin perusteella

// TODO: arkkitehtuuriraportti