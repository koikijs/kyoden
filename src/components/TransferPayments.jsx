import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/transfer-payments.less');
const fa = require('../../node_modules/koiki-ui/less/fa/less/font-awesome.less');

const TransferPayments = props =>
  <table
    className={styles.table}
  >
    <tbody>
      {
        props.transferAmounts
          .filter(amount => amount.amount)
          .map((amount, index) =>
            <tr key={`${amount.from}-${amount.to}`} >
              <td className={styles.from} >{amount.from}</td>
              <td className={styles.arrow} >
                <div className={styles.icon} >
                  <i
                    className={`${fa.fa} ${fa['fa-money']}`}
                    style={{
                      animationDelay: `${index * 0.25}s`,
                    }}
                  />
                </div>
              </td>
              <td className={styles.to} >{amount.to}</td>
              <td className={styles.amount} >￥{amount.amount.toLocaleString()}</td>
            </tr>
          )
      }
    </tbody>
  </table>;

TransferPayments.propTypes = {
  transferAmounts: PropTypes.array.isRequired
};

export default TransferPayments;
