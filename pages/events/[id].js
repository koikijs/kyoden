import React, { Component, useContext } from 'react';
import Head from 'next/head';
import animals from 'animals';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import ws from '../../helpers/ws';
import config from '../../config';
import { get, getStart, selectGroup } from '../../reducers/event';
import Panel from '../../components/Panel';
import Logo from '../../components/Logo';
import Title from '../../components/Title';
import GroupName from '../../components/GroupName';
import Members from '../../components/Members';
import Scrooges from '../../components/Scrooges';
import AddPayment from '../../components/AddPayment';
import TransferPayments from '../../components/TransferPayments';
import Loading from '../../components/Loading';
import Tabs from '../../components/Tabs';
import { Context } from '../../helpers/i18n';

class Event extends Component {
  static async getInitialProps({ query }) {
    return { params: query };
  }

  static contextType = Context;

  componentDidMount() {
    this.props.getStart();
    this.ws = ws({
      url: `wss://${config.ws.origin}/?${this.props.params.id}`,
      onmessage: json => this.props.get(json),
    });
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    const i18n = this.context;
    return (
      <>
        <Head>
          <title>
            {this.props.eventName ? `${this.props.eventName} - ${i18n.t('lead')}` : i18n.t('lead')}
          </title>
        </Head>
        <style jsx>
          {`
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
          `}
        </style>
        <main className="panels">
          <Panel side="left">
            <Logo />
            <Title title={this.props.eventName} theme="black" align="left" />
            <Tabs
              tabs={this.props.groups.map(group => ({
                id: group.id,
                text: group.name,
                isActive: group.id === this.props.selected.id,
              }))}
              onClickTab={tab =>
                this.props.selectGroup({
                  id: tab.id,
                  name: tab.text,
                })
              }
              onClickDelete={tab =>
                fetch(`${config.api.base}/events/${this.props.params.id}/groups/${tab.id}`, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'DELETE',
                  mode: 'cors',
                  credentials: 'include',
                })
              }
              onClickAdd={() =>
                fetch(`${config.api.base}/events/${this.props.params.id}/groups/_add`, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  mode: 'cors',
                  credentials: 'include',
                  body: JSON.stringify({
                    name: animals(),
                  }),
                })
              }
            />
            <GroupName
              name={this.props.selected.name}
              onSubmit={name =>
                fetch(
                  `${config.api.base}/events/${this.props.params.id}/groups/${
                    this.props.selected.id
                  }`,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    method: 'PATCH',
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify({
                      name,
                    }),
                  },
                )
              }
            />
            <Members
              suggests={this.props.suggests}
              members={this.props.members}
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
                  },
                )
              }
            />
            {this.props.members.length ? (
              <AddPayment
                members={this.props.members}
                onSubmitPayment={payment => {
                  fetch(`${config.api.base}/events/${this.props.params.id}/scrooges`, {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(payment),
                  });
                }}
              />
            ) : null}
            <Scrooges
              scrooges={this.props.scrooges}
              onDeleteScrooge={scrooge => {
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
            {this.props.transferAmounts.length ? (
              <TransferPayments transferAmounts={this.props.transferAmounts} />
            ) : null}
          </Panel>
        </main>
        <Loading isActive={this.props.isLoading} />
      </>
    );
  }
}

const connected = connect(
  state => ({
    eventName: state.event.item.name,
    isLoading: state.event.loading,
    transferAmounts: state.event.item.transferAmounts,
    members: state.event.selected.members,
    scrooges: state.event.selected.scrooges,
    selected: state.event.selected,
    groups: state.event.item.groups,
  }),
  {
    get,
    selectGroup,
    getStart,
  },
)(Event);

export default connected;
