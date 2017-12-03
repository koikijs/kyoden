import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import ws from '../helpers/ws';
import config from '../config';
import { get } from '../reducers/event';
import { changeInputName } from '../reducers/member';
import { input as inputScrooge, markAsRemoved as markAsRemovedScrooge } from '../reducers/scrooge';
import Panel from '../components/Panel';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Members from '../components/Members';
import Scrooges from '../components/Scrooges';
import AddPayment from '../components/AddPayment';
import TransferPayments from '../components/TransferPayments';

const styles = require('../css/event.less');

class Event extends Component {
  componentDidMount() {
    this.ws = ws({
      url: `wss://${config.ws.origin}/?${this.props.params.id}`,
      onmessage: json => this.props.get(json),
    });
  }
  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    return (
      <div className={styles.panels} >
        <Panel side="left">
          <Logo />
          <Title
            title={this.props.eventName}
            theme="black"
            align="left"
          />
          <Members
            suggests={this.props.suggests}
            members={this.props.members}
            onChangeInputName={this.props.changeInputName}
            onSelectMember={member => this.context.fetcher.scrooge.add({
              id: this.props.params.id,
              memberName: member.name,
              paidAmount: 0,
            })}
            onDeleteMember={member => this.context.fetcher.scrooge.bulkRemove({
              id: this.props.params.id,
              memberNames: member.name,
            })}
          />
          {
            this.props.members.length ?
              <AddPayment
                scrooge={this.props.scrooge}
                members={this.props.members}
                onInputPayment={this.props.inputScrooge}
                onSubmitPayment={() => this.context.fetcher.scrooge.add({
                  id: this.props.params.id,
                  ...this.props.scrooge,
                })}
              />
            : null
          }
          <Scrooges
            scrooges={this.props.scrooges}
            onDeleteScrooge={(scrooge) => {
              this.props.markAsRemovedScrooge(scrooge);
              this.context.fetcher.scrooge.remove({
                id: this.props.params.id,
                scrooge: scrooge.id
              });
            }}
          />
        </Panel>
        <Panel side="right">
          <Title
            title={this.props.eventName}
            theme="white"
            align="right"
          />
          <TransferPayments transferAmounts={this.props.transferAmounts} />
        </Panel>
      </div>
    );
  }
}

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  transferAmounts: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
  changeInputName: PropTypes.func.isRequired,
  inputScrooge: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
  suggests: PropTypes.array.isRequired,
  scrooge: PropTypes.object.isRequired,
  scrooges: PropTypes.array.isRequired,
  markAsRemovedScrooge: PropTypes.func.isRequired,
};

Event.contextTypes = {
  lang: PropTypes.string.isRequired,
  fetcher: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
};

const connected = connect(
  state => ({
    eventName: state.event.item.name,
    aggPaidAmount: state.event.item.aggPaidAmount,
    transferAmounts: state.event.item.transferAmounts || [],
    members: state.member.items,
    suggests: state.member.suggests,
    scrooge: state.scrooge.item,
    scrooges: state.scrooge.items,
  }),
  {
    get,
    changeInputName,
    inputScrooge,
    markAsRemovedScrooge,
  }
)(Event);

const asynced = asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
