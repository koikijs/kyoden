import React, { useContext } from 'react';

import theme from '../theme';
import { Context } from '../helpers/i18n';

const Scrooges = (props) => {
  const i18n = useContext(Context);

  return (
    <>
      <table className="table">
        <tbody>
          {props.scrooges.map(scrooge => (
            <tr key={scrooge.id} className={scrooge.removed ? 'removed' : ''}>
              <td className="name">{scrooge.memberName}</td>
              <td className="amount">
¥
                {scrooge.paidAmount.toLocaleString()}
              </td>
              <td className="reason">{scrooge.forWhat}</td>
              <td className="delete">
                <button className="trash" onClick={() => props.onDeleteScrooge(scrooge)}>
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>
        {`
          .table {
            width: 70%;
            font-size: 1.25em;
            line-height: 1.5em;
            border-collapse: separate;
            border-spacing: 1em;
            color: ${theme.color.lightPrimary};
            margin-bottom: 2em;
          }

          .name {
            border-bottom: 2px solid ${theme.color.lightPrimary};
            margin-right: 10%;
            text-align: right;
          }

          .trash {
            background: none;
            border: none;
            color: ${theme.color.lightPrimary};
            outline: none;
          }

          .trash:hover {
            transition: color, transform;
            transition-duration: 0.2s;
            color: ${theme.color.lightSecondary};
            transform: scale(1.25);
          }

          .removed {
            transition: opacity, transform;
            transition-duration: 0.2s;
            opacity: 0;
            transform: scale(0);
          }

          .removed .trash {
            display: none;
          }
        `}
      </style>
    </>
  );
};
export default Scrooges;
