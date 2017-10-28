import React from 'react';
import PropTypes from 'prop-types';
import Signature from '../components/Signature';

const Home = (props, context) =>
  <div>
    <Signature
      lead={context.i18n.lead}
      sublead={context.i18n.sublead}
      onEventSubmit={(values) => {
        context.fetcher.event.save(values)
          .then(({ res }) => {
            console.log(res.headers.get('location'));
          });
      }}
    />
  </div>;

Home.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default Home;
