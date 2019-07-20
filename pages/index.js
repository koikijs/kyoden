import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  change as changeEvent,
  saveStart as saveStartEvent,
  saveSuccess as saveSuccessEvent,
  saveFail as saveFailEvent,
} from '../reducers/event';
import Signature from '../components/Signature';
import Loading from '../components/Loading';
import uris from '../uris';
import config from '../config';
import { stringify } from '../helpers/url';

const Home = (props, context) => (
  <>
    <Head>
      <title>Fair payments across members - kyoden</title>
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
    </Head>
    <Signature
      lead="kyoden"
      sublead="Provide fair payments across members"
      eventName={props.eventName}
      onEventChange={values => {
        props.changeEvent(values);
      }}
      onEventSubmit={values => {
        props.saveStartEvent();
        fetch(`${config.api.base}/events`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify(values),
        })
          .then(res => {
            if (res.ok) {
              props.saveSuccessEvent({});
              // TODO change way to get id
              // koiki better to fetch URL if location header has response.
              // then the body need to pass in callback
              const id = res.headers.get('location').match(/\/events\/(.+)$/)[1];
              Router.push(stringify(uris.pages.event, { id }));
            } else {
              return Promise.reject(res);
            }
          })
          .catch(error => {
            console.log(error);
            props.saveFailEvent(error);
          });
      }}
    />
    <Loading isActive={props.isLoading} />
  </>
);

const connected = connect(
  state => ({
    eventName: state.event.name,
    isLoading: state.event.loading,
  }),
  { changeEvent, saveStartEvent, saveSuccessEvent, saveFailEvent }
)(Home);

export default connected;
