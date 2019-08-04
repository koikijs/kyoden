import React, { useContext, useState } from 'react';

import theme from '../theme';
import Input from './koiki-ui/Input';
import { Context } from '../helpers/i18n';

const GroupName = ({ name, onSubmit = () => {} }) => {
  const i18n = useContext(Context);
  const [editing, setEditing] = useState(false);
  return (
    <>
      <style jsx>
        {`
          .title {
            font-size: 1.25em;
            color: ${theme.color.lightPrimary};
          }
          .input {
            margin-top: 0.725em;
            margin-bottom: 0.725em;
          }
          .title i {
            margin-right: 10px;
          }
          .groupName {
            width: 80%;
            margin-bottom: 1em;
            cursor: pointer;
          }
          .title i {
            display: none;
            margin-left: 10px;
          }
          .title:hover i {
            display: inline-block;
          }

          @media (max-width: 768px) {
            .title {
              width: 90%;
            }
            .groupName {
              width: 90%;
            }
          }
        `}
      </style>
      <div className="groupName">
        {editing ? (
          <div className="input">
            <Input
              focused
              icon="fa-pencil"
              placeholder={i18n.t('tell-me-group-name')}
              value={name}
              onBlur={() => setEditing(false)}
              onSubmit={(event) => {
                onSubmit(event.target.value);
                setEditing(false);
              }}
            />
          </div>
        ) : (
          <p className="title" onClick={() => setEditing(true)}>
            {name}
            <i className="fa fa-pencil" />
          </p>
        )}
      </div>
    </>
  );
};

export default GroupName;
