import React from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import config from '../config';
import styles from '../css/app.less';

const App = props =>
  <div className={styles.app}>
    {props.children}
    <Helmet {...config.app.head} title="Fair payments across members" />
  </div>;

App.propTypes = {
  children: PropTypes.element,
};

App.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    const promises = [];
    console.log(true || dispatch);
    return Promise.all(promises);
  }
}])(App);
