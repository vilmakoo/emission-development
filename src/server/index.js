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

router.get('/', async ctx => {
    ctx.body = {
        data: 'Sending some JSON'
    };
});

router.get('/api/emissions/:country', async ctx => {
    const emissionsPerCountry = fileReader.emissionsPerCountry;
    ctx.body = {
        data: emissionsPerCountry(ctx.params.country)
    };
});

// router.get('/population/:country', async ctx => {
//     ctx.body = {
//         data: {
//             country: ctx.params.country,
//         }
//     };
// });

app.use(router.routes());

const server = app.listen(PORT).on('error', err => {
    console.error(err);
});

module.exports = server;