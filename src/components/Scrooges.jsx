import React from 'react';
import PropTypes from 'prop-types';
import fa from '../../node_modules/koiki-ui/less/fa/less/font-awesome.less';

const styles = require('../css/scrooges.less');

const Scrooges = props =>
  <table
    className={styles.table}
  >
    <tbody>
      {
        props.scrooges.map(scrooge =>
          <tr key={scrooge.id} >
            <td className={styles.name} >{scrooge.memberName}</td>
            <td className={styles.amount} >¥{scrooge.paidAmount.toLocaleString()}</td>
            <td className={styles.reason} >{scrooge.forWhat}</td>
            <td className={styles.delete} >
              <button
                className={styles.trash}
                onClick={
                  () => props.onDeleteScrooge(scrooge)
                }
              >
                <i className={`${fa.fa} ${fa['fa-trash']}`} />
              </button>
            </td>
          </tr>
        )
      }
    </tbody>
  </table>;

Scrooges.propTypes = {
  scrooges: PropTypes.array.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  onDeleteScrooge: PropTypes.func.isRequired,
};

export default Scrooges;
