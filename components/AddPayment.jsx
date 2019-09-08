import React, { useContext, useState } from 'react';
import theme from '../theme';
import Input from './koiki-ui/Input';
import Selectbox from './koiki-ui/Selectbox';
import { Context } from '../helpers/context';

const AddPayment = (props) => {
  const { i18n } = useContext(Context);
  const defaultPayment = {
    member: {
      text: props.memberNames[0].name,
      value: props.memberNames[0].id,
    },
    paidAmount: '',
    forWhat: '',
  };
  const [payment, setPayment] = useState(defaultPayment);
  const onSubmitPayment = () => {
    props.onSubmitPayment({
      memberName: payment.member.value,
      paidAmount: payment.paidAmount,
      forWhat: payment.forWhat,
    });
    setPayment(defaultPayment);
  };

  return (
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
            onSelect={option => setPayment({
              ...payment,
              member: option,
            })
            }
            selected={payment.member}
            options={props.memberNames.map(member => ({
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
            value={payment.paidAmount}
            onChange={event => setPayment({
              ...payment,
              paidAmount: event.target.value,
            })
            }
            onSubmit={onSubmitPayment}
          />
        </div>
        <div className="column">
          <Input
            icon="fa-commenting-o"
            placeholder={i18n.t('reason')}
            value={payment.forWhat}
            onChange={event => setPayment({
              ...payment,
              forWhat: event.target.value,
            })
            }
            onSubmit={onSubmitPayment}
          />
        </div>
      </div>
    </>
  );
};

export default AddPayment;
