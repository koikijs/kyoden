import Document, { Head, Main, NextScript } from 'next/document';
import { get } from '../helpers/i18n';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, headers: ctx.req.headers };
  }

  render() {
    const { headers } = this.props;

    const i18n = get({ headers });

    return (
      <html lang={i18n.lang}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="description" content="kyoden" />
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="kyoden" />
          <meta property="og:image" content="/static/images/favicon.png" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="kyoden" />
          <meta property="og:description" content="kyoden" />
          <meta property="og:card" content="summary" />
          <meta property="og:creator" content="koiki" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/static/images/favicon.png" />
          <link rel="apple-touch-icon" href="/static/images/favicon.png" />
          <script src="https://code.createjs.com/createjs-2015.11.26.min.js" />
          <script src="https://cdn.rawgit.com/ics-creative/ParticleJS/release/0.1.31/libs/particlejs.min.js" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/static/css/normalize.css" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__i18n={resource: ${JSON.stringify(
                i18n.resource,
              )}, lang: ${JSON.stringify(i18n.lang)}}`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
