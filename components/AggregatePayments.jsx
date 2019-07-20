import React from 'react';

import theme from '../theme';

const AggregatePayments = props => (
  <>
    <table className={styles.table}>
      <tbody>
        {props.aggPaidAmount.map(amount => (
          <tr key={amount.memberName}>
            <td className={styles.name}>{amount.memberName}</td>
            <td className={styles.amount}>¥{amount.paidAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>
      {`
        .table {
          width: 70%;
          font-size: 1.5em;
          line-height: 1.5em;
          border-collapse: separate;
          border-spacing: 1em;
        }

        .name {
          border-bottom: 2px solid ${theme.color.lightPrimary};
          margin-right: 10%;
          text-align: right;
        }

        @media (max-width: ${theme.media.screenSpMin}) {
          .table {
            width: 80%;
          }
        }
      `}
    </style>
  </>
);

export default AggregatePayments;
