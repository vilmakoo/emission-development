const reader = require('fs');

const emissionsPerCountry =  (country) => {
    const file = reader.readFileSync('data/emissions/emissions_per_country.csv', 'utf8');
    const years = file.split('\n')[4].split(',').slice(4); 
    


    let emissions = file.split('\n').filter(line => line.toLowerCase().includes(country)).toString().split(',').slice(4);

    emissions = years.map((year, index) => {
        return {
            year: year,
            emissions: emissions[index],
        };
    });

    return {
        country,
        emissions
    };
};

module.exports = {emissionsPerCountry};