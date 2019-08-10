import React, { useRef, useEffect } from 'react';

const Tabs = ({
  tabs = [],
  onClickTab = () => {},
  onClickDelete = () => {},
  onClickAdd = () => {},
}) => {
  const ulEl = useRef(null);
  const surroundEl = useRef(null);
  const leftSpace = 20;
  const marginRight = 10;
  const padding = 10;
  const selectedIndex = tabs.findIndex(tab => tab.isActive);
  useEffect(() => {
    const ulWidth = ulEl.current.offsetWidth;
    const children = Array.from(ulEl.current.childNodes).filter((el, index) => index); // filter out surround nodes
    const left = children
      .filter((el, index) => index < selectedIndex) // filter out after selected tabs
      .reduce((acc, val) => acc + val.offsetWidth, selectedIndex * marginRight + leftSpace);
    surroundEl.current.style.left = `${left}px`;
    surroundEl.current.style.width = `${children[selectedIndex].offsetWidth - padding * 2}px`;
  });
  return (
    <>
      <ul ref={ulEl}>
        <li className="surround" ref={surroundEl} />
        {tabs.map(tab => (
          <li
            className={tab.isActive ? 'isActive' : ''}
            key={tab.id}
            onClick={(evt) => {
              evt.preventDefault();
              onClickTab(tab);
            }}
          >
            <span>{tab.text}</span>
            <button
              aria-label="delete"
              onClick={(evt) => {
                evt.preventDefault();
                onClickDelete(tab);
              }}
            >
              <i className="fa fa-trash" />
            </button>
          </li>
        ))}
        <li
          className="plus"
          onClick={(evt) => {
            evt.preventDefault();
            onClickAdd();
          }}
        >
          +
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            border-bottom: 2px #4c4900 solid;
            width: 100%;
            margin-top: 8em;
            position: relative;
            padding: 0;
          }
          li:nth-child(2) {
            margin-left: ${leftSpace}px;
            text-align: center;
          }
          li {
            padding: ${padding}px;
            margin-right: ${marginRight}px;
            cursor: pointer;
            color: #4c4900;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          span {
            max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
          }
          i {
            margin-left: 15px;
          }
          button {
            border: none;
            outline: none;
            background: none;
            padding: 0;
            color: transparent;
            transition-property: all;
            transition-duration: 0.2s;
          }
          li.isActive {
            z-index: 2;
          }
          li.isActive > button {
            color: none;
            color: #4c4900;
          }
          .plus {
            font-weight: bold;
            font-size: 1.25em;
          }
          .surround {
            border-left: 2px #4c4900 solid;
            border-right: 2px #4c4900 solid;
            border-top: 2px #4c4900 solid;
            border-bottom: 2px #fffffcbd solid;
            position: absolute;
            bottom: -2px;
            left: 0;
            height: 1.25em;
            transition-property: all;
            transition-duration: 0.2s;
            z-index: 1;
          }
        `}
      </style>
    </>
  );
};

export default Tabs;
