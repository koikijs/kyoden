import React from 'react';

import theme from '../theme';

const Title = props => (
  <div className={`title ${props.theme} ${props.align} ${props.title ? 'animate' : ''}`}>
    {props.title}
    <style jsx>{`
      .title {
        font-size: 3em;
        margin: 1em 0;
        position: absolute;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        width: 150%;
        text-align: center;
      }

      .white {
        color: ${theme.color.darkPrimary};
      }

      .black {
        color: ${theme.color.lightPrimary};
      }

      .animate.left {
        transform: translateX(100%);
        right: 0;
        animation-name: fromRight;
      }

      .animate.right {
        transform: translateX(-100%);
        left: 0;
        animation-name: fromLeft;
      }

      @keyframes fromRight {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(50%);
        }
      }
      @keyframes fromLeft {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes fromRightToEdge {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      @media (max-width: ${theme.media.screenSpMin}) {
        .title {
          font-size: 2em;
          max-width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: right;
        }
        .animate.left {
          transform: translateX(100%);
          animation-name: fromRightToEdge;
          margin-right: 5%;
        }
        .right {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Title;
