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
    databaseUtils.updateDatabase();
    ctx.body = {
        data: 'Database updated!'
    };

});

router.get('/api/', async ctx => {
    ctx.body = {
        data: 'Sending some JSON'
    };
});

router.get('/api/emissions/highincome', async ctx => {
    const averages = await databaseUtils.averages();
    ctx.body = averages;
});

router.get('/api/emissions/:country', async ctx => {
    const emissions = await databaseUtils.searchCountryByName(ctx.params.country, ctx.query.percapita);
    ctx.body = emissions;
});

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
    console.error(err);
});

module.exports = server;