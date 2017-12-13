import React from 'react';

const styles = require('../css/logo.less');
const logo = require('../images/logo.png');

const Logo = () =>
  <a
    className={styles.logo}
    href="/"
  >
    <img src={logo} alt="kyoden" />
  </a>;

export default Logo;
