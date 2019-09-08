import React, { useState, useContext } from 'react';

import Button from './koiki-ui/Button';
import InputtableButton from './koiki-ui/InputtableButton';
import Particle from '../components/Particle';
import theme from '../theme';
import { Context } from '../helpers/context';

const Signature = (props) => {
  const [clicked, setClicked] = useState(false);
  const { i18n, ext } = useContext(Context);

  return (
    <header className="signature">
      <style jsx>
        {`
          .signature {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${theme.color.darkPrimary};
            background-color: ${theme.color.darkWithOpacity};
            position: relative;
          }

          .logo {
            width: 80px;
            height: 80px;
            box-shadow: 0px 0px 5px 0px ${theme.color.darkPrimary};
            border-radius: 50%;
            animation-duration: 3s;
            animation-name: blured;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }

          .lead {
            font-family: Roboto;
            font-weight: 300;
            margin: 0;
            z-index: 1;
          }

          .sublead {
            font-family: Roboto;
            font-weight: 100;
            margin: 1em;
            margin-bottom: 2em;
          }

          .button.large {
            width: 300px;
            height: 3.5em;
            margin-bottom: 15px;
          }
          .button.small {
            width: 200px;
            height: 3em;
          }

          @keyframes blured {
            0% {
              filter: hue-rotate(0deg);
              box-shadow: 1px 1px 5px 0px ${theme.color.darkPrimary};
            }
            25% {
              filter: hue-rotate(-10deg);
              box-shadow: -1px 1px 10px 0px ${theme.color.darkPrimary};
            }
            50% {
              filter: hue-rotate(-20deg);
              box-shadow: -1px -1px 15px 0px ${theme.color.darkPrimary};
            }
            75% {
              filter: hue-rotate(-10deg);
              box-shadow: 1px -1px 10px 0px ${theme.color.darkPrimary};
            }
            100% {
              filter: hue-rotate(0deg);
              box-shadow: 1px 1px 5px 0px ${theme.color.darkPrimary};
            }
          }

          @media (max-width: ${theme.media.screenSpMin}) {
            .logo {
              animation-name: none;
              box-shadow: 0px 0px 10px 0px ${theme.color.darkPrimary};
            }
          }
        `}
      </style>
      <h1 className="lead">
        <img className="logo" src={`/static/images/logo.${ext}`} alt={props.lead} />
      </h1>
      <h2 className="sublead">{props.sublead}</h2>
      <div className="button large">
        <InputtableButton
          text={i18n.t('getting-started')}
          icon="fa-pencil"
          placeholder={i18n.t('tell-me-event-name')}
          onSubmit={(evt) => {
            props.onEventSubmit({
              name: evt.target.value,
              transferCurrency: 'JPY',
            });
          }}
          onChange={(evt) => {
            props.onEventChange({
              name: evt.target.value,
            });
          }}
          onClick={evt => setClicked(true)}
        />
      </div>
      {clicked && props.eventName ? (
        <div className="button small">
          <Button
            text={i18n.t('create-event')}
            icon=""
            onClick={(evt) => {
              props.onEventSubmit({
                name: props.eventName,
              });
            }}
          />
        </div>
      ) : null}
      <Particle value={props.eventName} />
    </header>
  );
};

export default Signature;
