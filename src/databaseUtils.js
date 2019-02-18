const reader = require('fs');
const Country = require('./models/country');


const updateDatabase = async () => {
    // TODO: download data from worldbank

    const startTime = Date.now();

    const emissionsFile = reader.readFileSync('data/emissions/emissions.csv', 'utf8');
    const years = emissionsFile.split('\n')[4].split('",').slice(4);
    const emissionsFileLines = emissionsFile.split('\n').slice(5);

    const populationsFile = reader.readFileSync('data/population/populations.csv', 'utf8');
    const populationsFileLines = populationsFile.split('\n').slice(5);

    const incomeGroupFile = reader.readFileSync('data/emissions/income_groups.csv', 'utf8');
    const incomeGroupFileLines = incomeGroupFile.split('\n').slice(1);

    emissionsFileLines.forEach(async (e) => {
        const emissionColumns = e.split('",');

        const incomeGroupLine = incomeGroupFileLines.filter(line => line.split('",')[0] === emissionColumns[1])[0];
        const incomeGroup = incomeGroupLine ? incomeGroupLine.split('",')[2] : null;

        const fields = {
            name: emissionColumns[0] ? emissionColumns[0].slice(1) : null,
            code: emissionColumns[1] ? emissionColumns[1].slice(1) : null,
            income_group: incomeGroup ? incomeGroup.slice(1) : null,
            data: emissionColumns.slice(4).map((e, index) => {
                const populationLine = populationsFileLines.filter(line => line.split('",')[0] === emissionColumns[0])[0].split('",');
                const year = parseFloat(years[index].slice(1));
                const emissions = parseFloat(e.slice(1));
                const population = parseFloat(populationLine.slice(4)[index].slice(1));

                return {
                    year: year ? year : null,
                    emissions: emissions ? emissions : null,
                    population: population ? population : null
                };
            }),
        };

        let country = await Country.findOne({ name: fields.name });

        if (country) {
            await country.updateOne({ $set: fields });
        } else {
            country = new Country(fields);
            country.save().then(() => console.log('country saved: ', emissionColumns[0].slice(1)));
        }

    });
    console.log('database updated');

};

const searchCountryByName = async (searchTerm, searchPopulations) => {
    const country = await Country.findOne({ name: { $regex : new RegExp(searchTerm, 'i') } });

    if (!country) {
        return {
            country: 'NOT FOUND',
            data: []
        };
    }

    return {
        country: country.name,
        data: country.data.map((e, index) => {
            return {
                year: e.year,
                emissions: e.emissions,
                population: (searchPopulations && e.population) ? e.population : null,
                perCapita: (searchPopulations && e.population && e.emissions) ? e.emissions / e.population : null
            };
        })
    };
};

const averages = async () => {
    const countries = await Country.find({ income_group: 'High income' });

    const years = countries[0].data.map(d => d.year);

    const average = (values) => {
        return values.reduce((a,b) => a + b, 0) / values.length;
    };

    const averages = years.map(y => {
        return {
            year: y,
            emissionsAverage: average(countries.map(c => c.data).map(d => d.filter(d => d.year === y)).map(d => d.map(d => d.emissions)).filter(e => e).map(e => e[0])),
            populationAverage: average(countries.map(c => c.data).map(d => d.filter(d => d.year === y)).map(d => d.map(d => d.population)).filter(p => p).map(p => p[0]))
        };
    });

    return {
        countries: countries.map(c => c.country),
        averages
    };
};

module.exports = { searchCountryByName, averages, updateDatabase };