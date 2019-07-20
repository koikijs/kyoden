import React from 'react';

import theme from '../theme';

const TransferPayments = props => (
  <>
    <table className="table">
      <tbody>
        {props.transferAmounts
          .filter(amount => amount.amount)
          .map((amount, index) => (
            <tr key={`${amount.from}-${amount.to}`}>
              <td className="from">{amount.from}</td>
              <td className="arrow">
                <div className="icon">
                  <i
                    className={`fa fa-money`}
                    style={{
                      animationDelay: `${index * 0.25}s`,
                    }}
                  />
                </div>
              </td>
              <td className="to">{amount.to}</td>
              <td className="amount">￥{amount.amount.toLocaleString()}</td>
            </tr>
          ))}
      </tbody>
    </table>
    <style jsx>{`
      .table {
        width: 70%;
        font-size: 1.25em;
        line-height: 1.5em;
        border-collapse: separate;
        border-spacing: 1em;
        color: ${theme.color.darkPrimary};
        margin-top: 6em;
      }

      .from,
      .to {
        border-bottom: 2px solid ${theme.color.darkPrimary};
        margin-right: 10%;
      }

      .from {
        text-align: right;
      }

      .to {
        text-align: left;
      }

      .icon {
        width: 3em;
        font-size: 0.75em;
        color: ${theme.color.darkSecondary};
      }

      .icon i {
        animation-duration: 1s;
        animation-name: transfer;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: translateX(0em) scale(0);
      }

      @keyframes transfer {
        0% {
          transform: translateX(0em) scale(0);
          opacity: 1;
        }
        25% {
          transform: translateX(0.75em) scale(1);
        }
        50% {
          transform: translateX(1.5em) scale(1.25);
        }
        75% {
          transform: translateX(2.75em) scale(1);
          opacity: 1;
        }
        100% {
          transform: translateX(3em) scale(0);
          opacity: 0;
        }
      }

      @media (max-width: ${theme.media.screenSpMin}) {
        .table {
          width: 80%;
          margin-top: 2em;
          margin-bottom: 2em;
        }
      }
    `}</style>
  </>
);

export default TransferPayments;
