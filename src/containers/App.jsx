import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import Loading from '../components/Loading';
import config from '../config';
import styles from '../css/app.less';

const App = props =>
  <div className={styles.app}>
    <Loading isActive={props.loading} />
    {props.children}
    <Helmet {...config.app.head} title="Fair payments across members" />
  </div>;

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

App.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    // Put all loading condition below with || expression
    loading:
      state.event.loading ||
      state.scrooge.loading ||
      state.member.loading,
  }),
  {}
)(App);

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    const promises = [];
    console.log(true || dispatch);
    return Promise.all(promises);
  }
}])(connected);
