import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { stringify } from 'koiki';
import { change as changeEvent } from '../reducers/event';
import Signature from '../components/Signature';
import Loading from '../components/Loading';
import uris from '../uris';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <div>
        <Loading isActive={this.state.loading} />
        <Signature
          lead={this.context.i18n.lead}
          sublead={this.context.i18n.sublead}
          eventName={this.props.eventName}
          onEventChange={(values) => {
            this.props.changeEvent(values);
          }}
          onEventSubmit={(values) => {
            this.context.fetcher.event.save(values)
              .then(({ res }) => {
                // TODO change way to get id
                // koiki better to fetch URL if location header has response.
                // then the body need to pass in callback
                console.log(res, res.headers, res.headers.values());
                const id = res.headers.get('location').match(/\/events\/(.+)$/)[1];
                this.props.push(stringify(uris.pages.event, { lang: this.context.lang, id }));
              });
          }}
        />
      </div>
    );
  }
}

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
