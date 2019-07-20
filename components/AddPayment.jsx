import React from 'react';

import Input from './koiki-ui/Input';
import Selectbox from './koiki-ui/Selectbox';

const AddPayment = (props) => {
  const selected = props.members.find(member => member.name === props.scrooge.memberName) ||
    props.members[0] || {
      id: '',
      name: '',
    };
  return (
    <div className="addPayment">
      <style jsx>{`
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
          .addPayment {
            width: 90%;
          }
        }
      `}</style>
      <div className="column">
        <Selectbox
          onSelect={option =>
            props.onInputPayment({
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
          placeholder="Amount"
          value={props.scrooge.paidAmount}
          onChange={event =>
            props.onInputPayment({
              paidAmount: event.target.value,
            })
          }
          onSubmit={props.onSubmitPayment}
        />
      </div>
      <div className="column">
        <Input
          icon="fa-commenting-o"
          placeholder="Reason"
          value={props.scrooge.forWhat}
          onChange={event =>
            props.onInputPayment({
              forWhat: event.target.value,
            })
          }
          onSubmit={props.onSubmitPayment}
        />
      </div>
    </div>
  );
};

export default AddPayment;
