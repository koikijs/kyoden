import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      escaped: false,
    };
  }

  render() {
    const progress = `progress-${this.props.progress}`;
    return (
      <div
        className={`container
                    ${this.state.clicked ? 'clicked' : this.state.escaped ? 'escaped' : ''}
                    ${this.props.className}
        `}
      >
        <button
          className={`button
                      ${this.props.color}
                      ${this.props.disabled ? 'disabled' : ''}`}
          onClick={() => {
            if (!this.props.disabled) {
              this.setState({
                clicked: this.state.clicked !== true,
                escaped: this.state.clicked === true,
              });
              this.props.onClick();
            }
          }}
        >
          <i className={`fa ${this.props.icon}`} aria-hidden="true" />
          {this.props.text}
        </button>
        <style jsx>{`
          @keyframes push {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes push-revert {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(0.8);
            }
            75% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .container {
            position: relative;
            width: 100%;
            padding: 1.75em;
            height: auto;
          }

          .button {
            position: absolute;
            border: none;
            border-radius: 3px;
            background-color: #fffffc;
            color: #38a1db;
            font-size: 1.5em;
            height: 2.25em;
            padding: 0px 20px;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            line-height: 1em;
            transition-property: background-color;
            transition-duration: 1s;
            outline: none;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
            cursor: pointer;
          }

          .primary {
            background-color: #fffffc;
            color: #38a1db;
          }

          .secondary {
            background-color: #fffffc;
            color: #ec6d71;
          }

          .third {
            background-color: #fffffc;
            color: #aacf53;
          }

          .button i {
            margin-right: 10px;
            margin-left: -10px;
          }

          .clicked {
            animation: push 0.2s ease-out;
            animation-fill-mode: forwards;
          }

          .escaped {
            animation: push-revert 0.2s ease-out;
            animation-fill-mode: forwards;
          }

          .container .disabled {
            pointer-events: none;
            background-color: #dcdddd;
            color: #fffffc;
            transition-property: color, background-color;
            transition-duration: 1s;
          }
        `}</style>
      </div>
    );
  }
}

Button.defaultProps = {
  className: '',
  styles: {
    button: require('../less/button.less'),
  },
  color: 'primary',
  disabled: false,
  icon: 'fa-search',
  progress: 'none',
  onClick: () => {},
};

export default Button;
