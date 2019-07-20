import React from 'react';

import theme from '../theme';
import Chips from './koiki-ui/Chips';

const Members = props => (
  <>
    <style jsx>
      {`
        .title {
          font-size: 1.25em;
          color: ${theme.color.lightPrimary};
        }
        .title i {
          margin-right: 10px;
        }
        .members {
          width: 80%;
          margin-bottom: 3em;
          margin-top: 8em;
        }

        @media (max-width: 768px) {
          .title {
            width: 90%;
          }
          .members {
            width: 90%;
          }
        }
      `}
    </style>
    <div className="members">
      <p className="title">
        <i className="fa fa-users" />
        Attendees
      </p>
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
    </div>
  </>
);

export default Members;
