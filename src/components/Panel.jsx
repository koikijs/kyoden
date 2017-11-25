import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/panel.less');

const Panel = props =>
  <div
    className={`${styles.panel} ${styles[props.side]}`}
  >
    <div className={styles.overray} />
    <div className={styles.contents}>
      {props.children}
    </div>
  </div>;

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  side: PropTypes.oneOf(['left', 'right'])
};

export default Panel;
