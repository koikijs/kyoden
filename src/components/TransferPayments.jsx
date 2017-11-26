import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/transfer-payments.less');

const TransferPayments = props =>
  <div
    className={styles.transferPayments}
  >
    <ul>
      {props.transferAmounts.map(amount =>
        <li>{amount.amount}</li>
      )}
    </ul>
  </div>;

TransferPayments.propTypes = {
  transferAmounts: PropTypes.array.isRequired
};

export default TransferPayments;
