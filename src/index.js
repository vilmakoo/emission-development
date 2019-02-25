require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const databaseUtils = require('./databaseUtils');
const cors = require('@koa/cors');
const koaStatic = require('koa-static')('build');

const router = new Router();
const app = new Koa();

app.use(cors());
app.use(koaStatic);

const PORT = process.env.PORT || 3000;

router.get('/api/update_database', async ctx => {
    const result = await databaseUtils.updateDatabase();
    ctx.body = result;

});

router.get('/api/', async ctx => {
    ctx.body = {
        data: 'Sending some JSON'
    };
});

router.get('/api/emissions/top_emitters', async ctx => {
    const countries = await databaseUtils.topEmitters();
    ctx.body = countries;
});

router.get('/api/emissions/:country', async ctx => {
    const country = await databaseUtils.searchCountryByName(ctx.params.country, ctx.query.percapita);
    let highIncomeAverages;

    if (ctx.query.compare === 'true') {
        highIncomeAverages = await databaseUtils.searchAverages(ctx.query.percapita);
    }

    ctx.body = {
        country,
        highIncomeAverages
    };
});

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
    console.error(err);
});

module.exports = server;