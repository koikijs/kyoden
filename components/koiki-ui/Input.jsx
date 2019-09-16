import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      escaped: false,
      value: props.value,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.value !== undefined ? props.value : this.state.value,
    });
  }

  render() {
    const progress = `progress-${this.props.progress}-with-middle`;
    return (
      <div className={this.props.styles.input.container}>
        <form
          className={`
                    ${
                      this.state.clicked
                        ? this.props.styles.input.clicked
                        : this.state.escaped
                          ? this.props.styles.input.escaped
                          : ''
                    }
                    ${this.props.className}
                    ${this.props.styles.input[progress]}
        `}
          onSubmit={(evt) => {
            evt.preventDefault();
            this.props.onSubmit({
              target: {
                value: this.inputDOM.value,
              },
            });
          }}
        >
          <input
            ref={(elem) => {
              this.inputDOM = elem;
            }}
            className={`${this.props.styles.input.input} ${
              this.props.styles.input[this.props.align]
            }`}
            placeholder={this.props.placeholder}
            aria-label={this.props.placeholder}
            value={this.state.value}
            type={this.props.type}
            pattern={this.props.type === 'number' ? '\\d*' : undefined}
            autoFocus={this.props.focused}
            onChange={(evt) => {
              this.setState({
                value: evt.target.value,
              });
              this.props.onChange(evt);
            }}
            onKeyDown={(evt) => {
              switch (evt.key) {
                case 'Escape':
                  blur(evt);
                  break;

                default:
              }
              this.props.onKeyDown(evt);
            }}
            onBlur={evt => this.props.onBlur(evt)}
            onFocus={evt => this.props.onFocus(evt)}
          />
          <i
            className={`fa
            ${this.props.icon}
            ${this.props.styles.input.prefix}
          `}
            onClick={() => {
              this.inputDOM.focus();
            }}
            aria-hidden="true"
          />
        </form>
        {this.props.hasAddButton && this.inputDOM && this.inputDOM.value ? (
          <button
            className={this.props.styles.input.addButton}
            onClick={(evt) => {
              evt.preventDefault();
              this.props.onSubmit({
                target: {
                  value: this.inputDOM.value,
                },
              });
            }}
          >
            <i className="fa fa-plus-circle" />
          </button>
        ) : null}
      </div>
    );
  }
}

Input.defaultProps = {
  className: '',
  styles: {
    input: require('./less/input.less'),
  },
  placeholder: '',
  value: '',
  focused: false,
  icon: 'fa-search',
  progress: 'none',
  type: 'text',
  align: 'left',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onSubmit: () => {},
};

export default Input;
