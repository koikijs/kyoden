import React from 'react';

const IconButton = ({
  item, onClick, type, styles, hoverToDisplay,
}) => (
  <button
    className={styles.iconButton.item}
    key={item.id}
    onClick={() => onClick(item)}
    tabIndex="-1"
  >
    {item.image ? (
      <img className={styles.iconButton.icon} alt={item.name} src={item.image} />
    ) : null}
    <div className={styles.iconButton.text}>
      {item.name}
      {!hoverToDisplay ? <i className={`fa ${type === 'add' ? 'fa-plus' : 'fa-trash'}`} /> : null}
    </div>
    <div className={styles.iconButton[type]}>
      <i className={`fa ${type === 'add' ? 'fa-plus' : 'fa-trash'}`} />
    </div>
  </button>
);

IconButton.defaultProps = {
  styles: {
    iconButton: require('./less/icon-button.less'),
  },
  hoverToDisplay: true,
  onClick: () => {},
};

export default IconButton;
