import { normalize } from './helpers/url';

const title = 'kyoden';
const description = 'kyoden';

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

const appHost = process.env.GLOBAL_HOST || 'localhost';
const appPort = Number(process.env.GLOBAL_PORT || 3000);
const base = normalize(`${appHost}:${appPort}`);
const api = {
  host: 'koiki-scrooge-v2.herokuapp.com',
  port: 443,
};
const ws = {
  origin: 'koiki-scrooge-v2.herokuapp.com',
  port: 443,
};

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: Number(process.env.PORT || 3000),
    api: {
      ...api,
      base: normalize(`${api.host}:${api.port}`),
    },
    ws: {
      ...ws,
      base: normalize(`${ws.host}:${ws.port}`),
    },
    app: {
      base,
      host: appHost,
      port: appPort,
      title,
      description,
      head: {
        titleTemplate: `${title} - %s`,
        meta: [
          { name: 'description', content: description },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: title },
          { property: 'og:image', content: '/images/favicon.png' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:card', content: 'summary' },
          { property: 'og:creator', content: 'koiki' },
          { property: 'og:image:width', content: '300' },
          { property: 'og:image:height', content: '300' },
        ],
      },
      statics: {
        script: [
          { src: 'https://code.createjs.com/createjs-2015.11.26.min.js' },
          {
            src:
              'https://cdn.rawgit.com/ics-creative/ParticleJS/release/0.1.31/libs/particlejs.min.js',
          },
        ],
        link: [
          { rel: 'shortcut icon', href: '/images/favicon.png' },
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400',
          },
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css',
          },
          { rel: 'stylesheet', type: 'text/css', href: '/css/normalize.css' },
        ],
      },
    },
  },
  environment,
);
