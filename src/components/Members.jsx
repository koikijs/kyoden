import React from 'react';
import PropTypes from 'prop-types';
import { Chips } from 'koiki-ui';

const ui = {
  // eslint-disable-next-line global-require
  fa: require('../../node_modules/koiki-ui/less/fa/less/font-awesome.less'),
  // eslint-disable-next-line global-require
  input: require('../css/koiki-ui/light-input.less'),
  // eslint-disable-next-line global-require
  chips: require('../css/koiki-ui/chips.less'),
  // eslint-disable-next-line global-require
  iconButton: require('../css/koiki-ui/icon-button.less'),
};
const styles = require('../css/members.less');

const Members = props =>
  <div
    className={styles.members}
  >
    <Chips
      focused
      icon="fa-user"
      styles={ui}
      placeholder="Add member"
      onChange={event => props.onChangeInputName(event.target.value)}
      onSelect={props.onSelectMember}
      onDelete={props.onDeleteMember}
      suggests={props.suggests}
      chips={props.members}
    />
  </div>;

Members.propTypes = {
  suggests: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  onChangeInputName: PropTypes.func.isRequired,
  onSelectMember: PropTypes.func.isRequired,
  onDeleteMember: PropTypes.func.isRequired,
};

export default Members;
