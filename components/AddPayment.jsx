import React from 'react';
import theme from '../theme';
import Input from './koiki-ui/Input';
import Selectbox from './koiki-ui/Selectbox';
import { Consumer } from '../helpers/i18n';

const AddPayment = (props) => {
  const selected = props.members.find(member => member.name === props.scrooge.memberName)
    || props.members[0] || {
    id: '',
    name: '',
  };
  return (
    <Consumer>
      {i18n => (
        <>
          <style jsx>
            {`
              .title {
                font-size: 1.25em;
                color: ${theme.color.lightPrimary};
                width: 80%;
              }

              .title i {
                margin-right: 10px;
              }
              .addPayment {
                display: flex;
                flex-direction: row;
                width: 80%;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 3em;
              }

              .column {
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              @media (max-width: 768px) {
                .title {
                  width: 90%;
                }
                .addPayment {
                  width: 90%;
                  flex-direction: column;
                }
                .column {
                  width: 100%;
                }
              }
            `}
          </style>
          <p className="title">
            <i className="fa fa-credit-card" />
            {i18n.t('invoices')}
          </p>
          <div className="addPayment">
            <div className="column">
              <Selectbox
                onSelect={option => props.onInputPayment({
                  memberName: option.value,
                })
                }
                selected={{
                  text: selected.name,
                  value: selected.id,
                }}
                options={props.members.map(member => ({
                  text: member.name,
                  value: member.id,
                }))}
              />
            </div>
            <div className="column">
              <Input
                icon="fa-money"
                type="number"
                align="right"
                placeholder={i18n.t('amount')}
                value={props.scrooge.paidAmount}
                onChange={event => props.onInputPayment({
                  paidAmount: event.target.value,
                })
                }
                onSubmit={props.onSubmitPayment}
              />
            </div>
            <div className="column">
              <Input
                icon="fa-commenting-o"
                placeholder={i18n.t('reason')}
                value={props.scrooge.forWhat}
                onChange={event => props.onInputPayment({
                  forWhat: event.target.value,
                })
                }
                onSubmit={props.onSubmitPayment}
              />
            </div>
          </div>
        </>
      )}
    </Consumer>
  );
};

export default AddPayment;
