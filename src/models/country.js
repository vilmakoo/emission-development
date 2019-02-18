const mongoose = require('mongoose');

const dbUrl = process.env.DB_URI;

mongoose.connect(dbUrl, { useNewUrlParser: true })
    .then(result => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

const countrySchema = new mongoose.Schema({
    name: String,
    code: String,
    income_group: String,
    data: [{
        year: Number,
        emissions: Number,
        population: Number
    }],
});

countrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Country', countrySchema);