import React from 'react';

import theme from '../theme';

const Panel = props => (
  <div className={`panel ${props.side}`}>
    {props.children}
    <style jsx>{`
      .panel {
        width: 50%;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        animation-duration: 0.5s;
      }

      .panel::-webkit-scrollbar {
        width: 0em;
      }

      .left.panel {
        background-color: ${theme.color.lightWithOpacity};
        animation-name: fadeInFromTop;
      }
      .right.panel {
        background-color: ${theme.color.darkWithOpacity};
        animation-name: fadeInFromBottom;
      }

      @keyframes fadeInFromTop {
        0% {
          transform: translateY(-25%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes fadeInFromBottom {
        0% {
          transform: translateY(25%);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media (max-width: ${theme.media.screenSpMin}) {
        .panel {
          width: 100%;
          height: inherit;
          min-height: 50vh;
          overflow-y: auto;
          overflow-x: auto;
        }
      }
    `}</style>
  </div>
);

export default Panel;
