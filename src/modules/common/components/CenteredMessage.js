import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import '../styles/CenteredMessage.css';

export default class CenteredMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  // The method handles the close button
  hideMessage() {
    this.setState({ isOpen: false });
  }

  // In case the message needs render the Close button or not
  renderCloseButton() {
    const { showClose } = this.props;

    return (showClose ? (
      <button className="closeButton" type="button" onClick={() => this.hideMessage()}>
        <Close />
      </button>
    ) : null
    );
  }

  // This method handles the breaks lines in the message string provided.
  renderMessage() {
    const { message } = this.props;

    const parsedMessage = message.toString().split('\n').map((item, key) => (
      <span key={`message-${key + 1}`}>
        {item}
        <br />
      </span>
    ));

    return parsedMessage;
  }

  // The method handles the main render of the message Component
  renderComponent() {
    const {
      title,
      buttonText,
      onContinue,
    } = this.props;

    return (
      <div className="container">
        <div className="divStyle">
          { this.renderCloseButton() }
          <h1 className="titleStyle">{ title }</h1>
          <p className="messageStyle">{ this.renderMessage() }</p>
          <button className="buttonStyle" type="button" onClick={onContinue}>
            { buttonText }
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { isOpen } = this.state;
    return isOpen ? this.renderComponent() : null;
  }
}

// The PropTypes for the props received
CenteredMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.any).isRequired,
  buttonText: PropTypes.string.isRequired,
  onContinue: PropTypes.func,
  showClose: PropTypes.bool.isRequired,
};

CenteredMessage.defaultProps = {
  onContinue: () => {},
};
