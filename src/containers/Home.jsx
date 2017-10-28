import React from 'react';
import PropTypes from 'prop-types';
import { stringify } from 'koiki';
import Signature from '../components/Signature';
import uris from '../uris';

const Home = (props, context) =>
  <div>
    <Signature
      lead={context.i18n.lead}
      link={stringify(uris.pages.people, { lang: context.lang })}
    />
  </div>;

Home.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default Home;
