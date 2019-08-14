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
import { Context } from '../../helpers/context';

const defaults = {
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
};

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
    const { i18n, fetcher } = this.context;
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
                fetcher.group.remove({
                  id: this.props.params.id,
                  group: tab.id,
                })
              }
              onClickAdd={() =>
                fetcher.group.add({
                  id: this.props.params.id,
                  name: animals(),
                })
              }
            />
            <GroupName
              name={this.props.selected.name}
              onSubmit={name =>
                fetcher.group.update({
                  id: this.props.params.id,
                  group: this.props.selected.id,
                  name,
                })
              }
            />
            <Members
              suggests={this.props.suggests}
              members={this.props.members}
              onSelectMember={member =>
                fetcher.scrooge.add({
                  id: this.props.params.id,
                  memberName: member.name,
                  paidAmount: 0,
                })
              }
              onDeleteMember={member =>
                fetcher.scrooge.bulkRemove({
                  id: this.props.params.id,
                  memberNames: member.name,
                })
              }
            />
            {this.props.members.length ? (
              <AddPayment
                members={this.props.members}
                onSubmitPayment={payment =>
                  fetcher.scrooge.add({
                    ...payment,
                    id: this.props.params.id,
                  })
                }
              />
            ) : null}
            <Scrooges
              scrooges={this.props.scrooges}
              onDeleteScrooge={scrooge =>
                fetcher.scrooge.remove({
                  id: this.props.params.id,
                  scrooge: scrooge.id,
                })
              }
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
