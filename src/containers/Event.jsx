import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import ws from '../helpers/ws';
import config from '../config';
import { get } from '../reducers/event';

class Event extends Component {
  componentDidMount() {
    this.ws = ws(`ws://${config.ws.origin}/events?eventId=${this.props.params.id}`);
    this.ws.onmessage(json =>
        this.props.get(json));
  }
  componentDidUnmount() {
    this.ws.close();
  }
  render() {
    return (
      <div>
        <div>
          {this.props.event.name}
        </div>
        <ul>
          {
            this.props.scrooges.map(scrooge =>
              <li>{scrooge.memberName}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  scrooges: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
};

Event.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    event: state.event.item,
    scrooges: state.event.item.scrooges
  }),
  () => ({
    get
  })
)(Event);

const asynced = asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
