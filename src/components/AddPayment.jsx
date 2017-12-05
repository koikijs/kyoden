import React from 'react';
import PropTypes from 'prop-types';
import { Input, Selectbox } from 'koiki-ui';

const styles = require('../css/add-payment.less');
const ui = {
  // eslint-disable-next-line global-require
  fa: require('../../node_modules/koiki-ui/less/fa/less/font-awesome.less'),
  // eslint-disable-next-line global-require
  input: require('../css/koiki-ui/light-input.less'),
  // eslint-disable-next-line global-require
  selectbox: require('../css/koiki-ui/light-selectbox.less'),
};

const AddPayment = (props) => {
  const selected = (
    props.members.find(member => member.name === props.scrooge.memberName) ||
    props.members[0] ||
      {
        id: '',
        name: '',
      }
  );
  return (
    <div
      className={styles.addPayment}
    >
      <div className={styles.column} >
        <Selectbox
          styles={ui}
          onSelect={
            option => props.onInputPayment({
              memberName: option.value
            })
          }
          selected={{
            text: selected.name,
            value: selected.id,
          }}
          options={
            props.members.map(member => ({
              text: member.name,
              value: member.id,
            }))
          }
        />
      </div>
      <div className={styles.column} >
        <Input
          styles={ui}
          icon="fa-money"
          type="number"
          align="right"
          placeholder="Amount"
          value={props.scrooge.paidAmount}
          onChange={
            event => props.onInputPayment({
              paidAmount: event.target.value,
            })
          }
          onSubmit={props.onSubmitPayment}
        />
      </div>
      <div className={styles.column} >
        <Input
          styles={ui}
          icon="fa-commenting-o"
          placeholder="Reason"
          value={props.scrooge.forWhat}
          onChange={
            event => props.onInputPayment({
              forWhat: event.target.value,
            })
          }
          onSubmit={props.onSubmitPayment}
        />
      </div>
    </div>
  );
};

AddPayment.propTypes = {
  scrooge: PropTypes.object.isRequired,
  members: PropTypes.array.isRequired,
  onInputPayment: PropTypes.func.isRequired,
  onSubmitPayment: PropTypes.func.isRequired,
};

export default AddPayment;
