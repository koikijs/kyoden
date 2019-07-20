import React from 'react';

const List = props => (
  <>
    <ul className="spots">
      {props.items.map(item => (
        <li key={item.name}>
          {item.name}: {item.age}
        </li>
      ))}
    </ul>
    <style jsx>{`
      .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .item {
      }
    `}</style>
  </>
);

export default List;
