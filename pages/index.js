import React, { useContext } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { connect } from 'react-redux';
import { change as changeEvent } from '../reducers/event';
import Signature from '../components/Signature';
import Loading from '../components/Loading';
import SWRegister from '../components/SWRegister';
import uris from '../uris';
import config from '../config';
import { stringify } from '../helpers/url';
import { Context } from '../helpers/context';

const Home = (props) => {
  const { fetcher, i18n } = useContext(Context);

  return (
    <>
      <Head>
        <title>{`${i18n.t('sublead')} - ${i18n.t('lead')}`}</title>
      </Head>
      <Signature
        lead={i18n.t('lead')}
        sublead={i18n.t('sublead')}
        eventName={props.eventName}
        onEventChange={(values) => {
          props.changeEvent(values);
        }}
        onEventSubmit={(values) => {
          fetcher.event.save(values).then(({ body }) => {
            // TODO change way to get id
            // koiki better to fetch URL if location header has response.
            // then the body need to pass in callback
            const { id } = body;
            Router.push('/events/[id]', stringify(uris.pages.event, { id }));
          });
        }}
      />
      <Loading isActive={props.isLoading} />
      <SWRegister />
    </>
  );
};

const connected = connect(
  state => ({
    eventName: state.event.name,
    isLoading: state.event.loading,
  }),
  {
    changeEvent,
  },
)(Home);

export default connected;
