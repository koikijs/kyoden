import React, { useContext, useState } from 'react';

import theme from '../theme';
import Chips from './koiki-ui/Chips';
import { Context } from '../helpers/i18n';

const Members = (props) => {
  const i18n = useContext(Context);
  const [suggests, setSuggests] = useState([]);

  return (
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
            margin-bottom: 2em;
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
          {i18n.t('attendees')}
        </p>
        <Chips
          icon="fa-user"
          placeholder={i18n.t('tell-me-attendee-name')}
          onChange={event => setSuggests(
            event.target.value ? [{ id: event.target.value, name: event.target.value }] : [],
          )
          }
          onSelect={props.onSelectMember}
          onDelete={props.onDeleteMember}
          suggests={suggests}
          chips={props.members}
        />
      </div>
    </>
  );
};

export default Members;
