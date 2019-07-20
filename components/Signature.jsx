import React from 'react';

import InputtableButton from './koiki-ui/InputtableButton';
import Particle from '../components/Particle';
import theme from '../theme';

const Signature = props => (
  <header className="signature">
    <style jsx>{`
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

      .button {
        width: 250px;
        height: 3.5em;
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
    `}</style>
    <h1 className="lead">
      <img className="logo" src="/static/images/logo.png" alt={props.lead} />
    </h1>
    <h2 className="sublead">{props.sublead}</h2>
    <div className="button">
      <InputtableButton
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
  </header>
);

export default Signature;
