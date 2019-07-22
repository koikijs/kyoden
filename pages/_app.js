import React from 'react';
import Head from 'next/head';
import { Provider, connect } from 'react-redux';
import App, { Container } from 'next/app';
import initReactFastclick from 'react-fastclick';
import Loading from '../components/Loading';
import withReduxStore from '../reducers/with-redux-store';
import { Provider as I18nProvider, get } from '../helpers/i18n';

initReactFastclick();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
      headers: ctx.req ? ctx.req.headers : undefined,
    };
  }

  render() {
    const {
      Component, pageProps, reduxStore, headers,
    } = this.props;
    const i18n = get({ headers });
    return (
      <I18nProvider value={i18n}>
        <Container>
          <Provider store={reduxStore}>
            <div className="app">
              <Component {...pageProps} />
              <style jsx>
                {`
                  .app {
                    background-image: url(/static/images/app.png);
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
      </I18nProvider>
    );
  }
}

export default withReduxStore(MyApp);
