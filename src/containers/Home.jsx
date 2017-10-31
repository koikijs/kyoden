import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { stringify } from 'koiki';
import Signature from '../components/Signature';
import uris from '../uris';

const Home = (props, context) =>
  <div>
    <Signature
      lead={context.i18n.lead}
      sublead={context.i18n.sublead}
      onEventSubmit={(values) => {
        context.fetcher.event.save(values)
          .then(({ res }) => {
            // TODO change way to get id
            // koiki better to fetch URL if location header has response.
            // then the body need to pass in callback
            const id = res.headers.get('location').match(/\/events\/(.+)$/);
            push(stringify(uris.pages.event, { lang: context.lang, id }));
          });
      }}
    />
  </div>;

Home.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => state,
  { push }
)(Home);

export default connected;
