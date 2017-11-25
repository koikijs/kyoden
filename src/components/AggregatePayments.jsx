import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/aggregate-payments.less');

const AggregatePayments = props =>
  <table
    className={styles.table}
  >
    <tbody>
      {
        props.aggPaidAmount.map(amount =>
          <tr key={amount.memberName} >
            <td className={styles.name} >{amount.memberName}</td>
            <td className={styles.amount} >¥{amount.paidAmount.toLocaleString()}</td>
          </tr>
        )
      }
    </tbody>
  </table>;

AggregatePayments.propTypes = {
  aggPaidAmount: PropTypes.array.isRequired,
};

export default AggregatePayments;
