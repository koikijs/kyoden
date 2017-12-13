import React from 'react';
import PropTypes from 'prop-types';
import { InputtableButton } from 'koiki-ui';
import Particle from '../components/Particle';

const styles = require('../css/signature.less');
const ui = {
  // eslint-disable-next-line global-require
  inputtableButton: require('../css/koiki-ui/inputtable-button.less'),
  // eslint-disable-next-line global-require
  fa: require('../../node_modules/koiki-ui/less/fa/less/font-awesome.less'),
};
const logo = require('../images/logo.png');

const Signature = props =>
  <header
    className={styles.signature}
  >
    <h1 className={styles.lead} >
      <img
        className={styles.logo}
        src={logo}
        alt={props.lead}
      />
    </h1>
    <h2 className={styles.sublead} >{props.sublead}</h2>
    <div className={styles.button}>
      <InputtableButton
        styles={ui}
        text="Create Event"
        icon="fa-pencil"
        placeholder="Tell me event name"
        onSubmit={(evt) => {
          props.onEventSubmit({
            name: evt.target.value,
          });
        }}
        onChange={(evt) => {
          props.onEventChange({
            name: evt.target.value,
          });
        }}
      />
    </div>
    <Particle value={props.eventName} />
  </header>;

Signature.propTypes = {
  lead: PropTypes.string.isRequired,
  sublead: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  onEventChange: PropTypes.func.isRequired,
  onEventSubmit: PropTypes.func.isRequired,
};

export default Signature;
