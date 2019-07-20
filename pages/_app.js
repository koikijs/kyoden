import React from 'react';
import Head from 'next/head';
import { Provider, connect } from 'react-redux';
import App, { Container } from 'next/app';
import initReactFastclick from 'react-fastclick';
import Loading from '../components/Loading';
import withReduxStore from '../reducers/with-redux-store';

initReactFastclick();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <div className="app">
            <Component {...pageProps} />
            <Head>
              <script src="https://code.createjs.com/createjs-2015.11.26.min.js" />
              <script src="https://cdn.rawgit.com/ics-creative/ParticleJS/release/0.1.31/libs/particlejs.min.js" />
              <link rel="shortcut icon" href="/static/images/favicon.png" />
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
    );
  }
}

export default withReduxStore(MyApp);
