import React from 'react';
import PropTypes from 'prop-types';

const styles = require('../css/title.less');

const Title = props =>
  <div
    className={`${styles.title} ${styles[props.theme]} ${styles[props.align]}`}
  >
    {props.title}
  </div>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['black', 'white']).isRequired,
  align: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Title;
