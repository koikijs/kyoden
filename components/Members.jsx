import React from 'react';

import Chips from './koiki-ui/Chips';

const Members = props => (
  <div className="members">
    <Chips
      focused
      icon="fa-user"
      placeholder="Tell me attendee name"
      onChange={event => props.onChangeInputName(event.target.value)}
      onSelect={props.onSelectMember}
      onDelete={props.onDeleteMember}
      suggests={props.suggests}
      chips={props.members}
    />
    <style jsx>{`
      .members {
        width: 80%;
        margin-bottom: 3em;
        margin-top: 8em;
      }

      @media (max-width: 768px) {
        .members {
          width: 90%;
        }
      }
    `}</style>
  </div>
);

export default Members;
