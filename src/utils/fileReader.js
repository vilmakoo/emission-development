const reader = require('fs');

const searchFile = (searchTerm, searchFrom) => {
    const file = reader.readFileSync(searchFrom, 'utf8');


    const years = file.split('\n')[4].split(',').slice(4);
    const countryLine = file.split('\n').filter(line => {
        let country = line.split(',')[0].toLowerCase();
        country = country.slice(1, country.length - 1);
        return country === searchTerm;
    }).toString().split(',');

    if (countryLine.length === 1) {
        return {
            country: 'NOT FOUND',
            data: []
        };
    }

    const country = countryLine[0].slice(1, countryLine[0].length -1);
    let data = searchFrom.includes('emissions') ? countryLine.slice(4) : countryLine.slice(5);

    data = years.map((year, index) => {
        return {
            year: parseFloat(year.slice(1, year.length - 1)),
            value: parseFloat(data[index].slice(1, data[index].length - 1)),
        };
    });

    return {
        country,
        data
    };
};

const countrysEmissions = (searchTerm, searchPopulation) => {
    const emissions = searchFile(searchTerm, 'data/emissions/emissions.csv');
    let populations = [];

    if (searchPopulation === 'true') {
        populations = searchFile(searchTerm, 'data/population/populations.csv');
    }

    return {
        country: emissions.country,
        emissions: emissions.data,
        populations: populations.data
    };
};

module.exports = { countrysEmissions };