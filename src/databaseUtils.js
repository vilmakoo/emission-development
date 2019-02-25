const fs = require('fs');
const download = require('download');
const unzipper = require('unzipper');

const Country = require('./models/country');

const downloadData = async () => {
    await download('http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL?downloadformat=csv', 'data/downloaded', { filename: 'population.zip' });
    await fs.createReadStream('data/downloaded/population.zip')
        .pipe(unzipper.Extract({ path: 'data/population' }));

    await download('http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT?downloadformat=csv', 'data/downloaded', { filename: 'emissions.zip' });
    await fs.createReadStream('data/downloaded/emissions.zip')
        .pipe(unzipper.Extract({ path: 'data/emissions' }));

    fs.rename('data/population/API_SP.POP.TOTL_DS2_en_csv_v2_10473719.csv', 'data/population/populations.csv', (err) => {
        if (err) throw err;
    });
    fs.rename('data/emissions/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv', 'data/emissions/emissions.csv', (err) => {
        if (err) throw err;
    });
    fs.rename('data/emissions/Metadata_Country_API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv', 'data/emissions/income_groups.csv', (err) => {
        if (err) throw err;
    });

};

const updateDatabase = async () => {
    try {
        downloadData();

        const emissionsFile = fs.readFileSync('data/emissions/emissions.csv', 'utf8');
        const years = emissionsFile.split('\n')[4].split('",').slice(4);
        const emissionsFileLines = emissionsFile.split('\n').slice(5);

        const populationsFile = fs.readFileSync('data/population/populations.csv', 'utf8');
        const populationsFileLines = populationsFile.split('\n').slice(5);

        const incomeGroupFile = fs.readFileSync('data/emissions/income_groups.csv', 'utf8');
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
                        population: population ? population : null,
                        perCapita: (emissions && population) ? emissions / population : null
                    };
                }),
            };

            let country = await Country.findOne({ name: fields.name });

            if (country) {
                await country.updateOne({ $set: fields });
                console.log('country updated:', country.name);
            } else {
                country = new Country(fields);
                await country.save();
                console.log('country saved: ', emissionColumns[0].slice(1));
            }

        });
        console.log('database updated');
        return 'database updated';
    } catch (error) {
        return error;
    }

};

const searchCountryByName = async (searchTerm, searchPopulations) => {
    const country = await Country.findOne({ name: { $regex : new RegExp(searchTerm, 'i') } });

    if (!country) {
        return {
            name: 'NOT FOUND',
            data: []
        };
    }

    return {
        name: country.name,
        data: country.data.map((e, index) => {
            return {
                year: e.year,
                emissions: e.emissions,
                population: (searchPopulations === 'true' && e.population) ? e.population : null,
                perCapita: (searchPopulations === 'true' && e.perCapita) ? e.perCapita : null
            };
        }),
    };
};

const searchAverages = async (searchPopulations) => {
    const countries = await Country.find({ income_group: 'High income' });

    const years = countries[0].data.map(d => d.year);

    const average = (values) => {
        return values.reduce((a,b) => a + b, 0) / values.length;
    };

    let averages = years.map(y => {
        const countriesMapYear = countries.map(c => c.data).map(d => d.filter(d => d.year === y));
        return {
            year: y,
            emissionsAverage: average(countriesMapYear.map(d => d.map(d => d.emissions)).filter(e => e).map(e => e[0])),
            populationAverage: searchPopulations ? average(countriesMapYear.map(d => d.map(d => d.population)).filter(p => (p)).map(p => p[0])) : null,
            perCapitaAverage: searchPopulations ? average(countriesMapYear.map(a => a.map(d => d.perCapita)).filter(p => (p && p[0])).map(p => p[0])) : null
        };
    });

    // how do i want to calculate perCapitaAverages?
    // averages = averages.map(a => {
    //     return {
    //         ...a,
    //         perCapitaAverage: a.populationAverage !== null ? a.emissionsAverage / a.populationAverage : null
    //     };
    // });

    return {
        countriesCount: countries.length,
        averages
    };
};

const topEmitters = async () => {
    const unsorted = await Country.find({ income_group: 'High income' });

    let sorted = unsorted.sort((a, b) => {
        const perCapitaA = a.data.filter(d => d.year === 2014).map(d => d.perCapita)[0];
        const perCapitaB = b.data.filter(d => d.year === 2014).map(d => d.perCapita)[0];
        return perCapitaB - perCapitaA;
    });

    sorted = sorted.slice(0, 10).map(s => s.name);

    return sorted;
};

module.exports = { searchCountryByName, updateDatabase, searchAverages, topEmitters };