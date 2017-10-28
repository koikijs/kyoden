import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

const Event = props =>
  <div>
    <div {...props} />
  </div>;

Event.propTypes = {
  scrooges: PropTypes.array.isRequired,
};

Event.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    scrooges: state.scrooge.items
  }),
  () => ({})
)(Event);

const asynced = asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
