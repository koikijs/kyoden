import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { stringify } from 'koiki';
import { change as changeEvent } from '../reducers/event';
import Signature from '../components/Signature';
import Loading from '../components/Loading';
import uris from '../uris';

const Home = (props, context) =>
  <div>
    <Loading
      isActive
    />
    <Signature
      lead={context.i18n.lead}
      sublead={context.i18n.sublead}
      eventName={props.eventName}
      onEventChange={(values) => {
        props.changeEvent(values);
      }}
      onEventSubmit={(values) => {
        context.fetcher.event.save(values)
          .then(({ res }) => {
            // TODO change way to get id
            // koiki better to fetch URL if location header has response.
            // then the body need to pass in callback
            console.log(res, res.headers, res.headers.values());
            const id = res.headers.get('location').match(/\/events\/(.+)$/)[1];
            props.push(stringify(uris.pages.event, { lang: context.lang, id }));
          });
      }}
    />
  </div>;

Home.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
};

Home.propTypes = {
  eventName: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const connected = connect(
  state => ({
    eventName: state.event.name,
  }),
  { push, changeEvent }
)(Home);

export default connected;
