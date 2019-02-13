const Koa = require('koa');
const Router = require('koa-router');
const fileReader = require('../utils/fileReader');
const cors = require('@koa/cors');
const koaStatic = require('koa-static')('build');

const router = new Router();
const app = new Koa();

app.use(cors());
app.use(koaStatic);

const PORT = process.env.PORT || 3000;

router.get('/api/', async ctx => {
    ctx.body = {
        data: 'Sending some JSON'
    };
});

router.get('/api/emissions/', async ctx => {
    const emissions = fileReader.countrysEmissions;
    ctx.body = emissions(ctx.query.country, ctx.query.percapita);
});

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
    console.error(err);
});

module.exports = server;