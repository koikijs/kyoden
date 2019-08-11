import React from 'react';
import Head from 'next/head';
import { Provider, connect } from 'react-redux';
import App, { Container } from 'next/app';
import Loading from '../components/Loading';
import withReduxStore from '../reducers/with-redux-store';
import { Provider as I18nProvider, get } from '../helpers/i18n';
import { Provider as ExtProvider } from '../helpers/ext';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
      headers: ctx.req ? ctx.req.headers : undefined,
      ext: /iPhone|iPad/.test(ctx.req.headers['user-agent']) ? 'png' : 'webp',
    };
  }

  render() {
    const {
      Component, pageProps, reduxStore, headers, ext,
    } = this.props;
    const i18n = get({ headers });
    return (
      <I18nProvider value={i18n}>
        <ExtProvider value={ext}>
          <Container>
            <Provider store={reduxStore}>
              <div className="app">
                <Component {...pageProps} />
                <style jsx>
                  {`
                    .app {
                      background-image: url(/static/images/app.${ext});
                      background-repeat: no-repeat;
                      background-size: cover;
                      overflow: auto;
                      font-family: Roboto;
                      font-weight: 300;
                      height: 100%;
                    }

                    @media (max-width: 768px) {
                      .app {
                        font-size: 0.8em;
                      }
                    }
                  `}
                </style>
              </div>
            </Provider>
          </Container>
        </ExtProvider>
      </I18nProvider>
    );
  }
}

export default withReduxStore(MyApp);
