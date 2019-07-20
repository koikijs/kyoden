import React, { Component } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import ws from '../../helpers/ws';
import config from '../../config';
import { get } from '../../reducers/event';
import { changeInputName } from '../../reducers/member';
import {
  input as inputScrooge,
  markAsRemoved as markAsRemovedScrooge,
  reset as resetScrooge,
} from '../../reducers/scrooge';
import Panel from '../../components/Panel';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import Members from '../../components/Members';
import Scrooges from '../../components/Scrooges';
import AddPayment from '../../components/AddPayment';
import TransferPayments from '../../components/TransferPayments';

class Event extends Component {
  static async getInitialProps({ query }) {
    return { params: query };
  }
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
      <>
        <Head>
          <title>{this.props.eventName} - kyoden</title>
          <meta name="description" content="kyoden" />
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="kyoden" />
          <meta property="og:image" content="/static/images/favicon.png" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="kyoden" />
          <meta property="og:description" content="kyoden" />
          <meta property="og:card" content="summary" />
          <meta property="og:creator" content="koiki" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </Head>
        <style jsx>{`
          .panels {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            height: 100%;
          }

          @media (max-width: 768px) {
            .panels {
              display: block;
              height: auto;
            }
          }
        `}</style>
        <div className="panels">
          <Panel side="left">
            <Logo />
            <Title title={this.props.eventName} theme="black" align="left" />
            <Members
              suggests={this.props.suggests}
              members={this.props.members}
              onChangeInputName={this.props.changeInputName}
              onSelectMember={member =>
                fetch(`${config.api.base}/events/${this.props.params.id}/scrooges`, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  mode: 'cors',
                  credentials: 'include',
                  body: JSON.stringify({
                    memberName: member.name,
                    paidAmount: 0,
                  }),
                })
              }
              onDeleteMember={member =>
                fetch(
                  `${config.api.base}/events/${
                    this.props.params.id
                  }/scrooges?memberNames=${encodeURIComponent(member.name)}`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    method: 'DELETE',
                    mode: 'cors',
                    credentials: 'include',
                  }
                )
              }
            />
            {this.props.members.length ? (
              <AddPayment
                scrooge={this.props.scrooge}
                members={this.props.members}
                onInputPayment={this.props.inputScrooge}
                onSubmitPayment={() => {
                  fetch(`${config.api.base}/events/${this.props.params.id}/scrooges`, {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify({
                      ...this.props.scrooge,
                      memberName: this.props.scrooge.memberName || this.props.members[0].id,
                    }),
                  });
                  this.props.resetScrooge();
                }}
              />
            ) : null}
            <Scrooges
              scrooges={this.props.scrooges}
              onDeleteScrooge={scrooge => {
                this.props.markAsRemovedScrooge(scrooge);
                fetch(`${config.api.base}/events/${this.props.params.id}/scrooges/${scrooge.id}`, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'DELETE',
                  mode: 'cors',
                  credentials: 'include',
                });
              }}
            />
          </Panel>
          <Panel side="right">
            <Title title={this.props.eventName} theme="white" align="right" />
            <TransferPayments transferAmounts={this.props.transferAmounts} />
          </Panel>
        </div>
      </>
    );
  }
}

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
    resetScrooge,
  }
)(Event);

export default connected;
