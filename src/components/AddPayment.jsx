import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'koiki-ui';

const styles = require('../css/add-payment.less');
const ui = {
  // eslint-disable-next-line global-require
  fa: require('../../node_modules/koiki-ui/less/fa/less/font-awesome.less'),
  // eslint-disable-next-line global-require
  input: require('../css/koiki-ui/light-input.less'),
};

const AddPayment = props =>
  <div
    className={styles.addPayment}
  >
    <div className={styles.column} >
      <select>
        {props.members.map(member =>
          <option key={member.id} value={member.id} >{member.name}</option>
        )}
      </select>
    </div>
    <div className={styles.column} >
      <Input
        styles={ui}
        icon="fa-money"
        value={props.scrooge.paidAmount}
        onChange={event => props.onInputPayment({
          paidAmount: event.target.value,
        })}
        onSubmit={props.onSubmitPayment}
      />
    </div>
    <div className={styles.column} >
      <Input
        styles={ui}
        icon="fa-commenting-o"
        value={props.scrooge.forWhat}
        onChange={event => props.onInputPayment({
          forWhat: event.target.value,
        })}
        onSubmit={props.onSubmitPayment}
      />
    </div>
  </div>;

AddPayment.propTypes = {
  scrooge: PropTypes.object.isRequired,
  members: PropTypes.array.isRequired,
  onInputPayment: PropTypes.func.isRequired,
  onSubmitPayment: PropTypes.func.isRequired,
};

export default AddPayment;
