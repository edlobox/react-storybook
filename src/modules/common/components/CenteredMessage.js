import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import '../styles/CenteredMessage.css';

// In case the message needs render the Close button or not
const renderCloseButton = (showClose, isOpen, open) => (showClose ? (
  <button className="closeButton" type="button" onClick={() => isOpen(!open)}>
    <Close />
  </button>
) : null
);

// This method handles the breaks lines in the message string provided.
const renderMessage = (message) => {
  const parsedMessage = message.toString().split('\n').map((item, key) => (
    <span key={`message-${key + 1}`}>
      {item}
      <br />
    </span>
  ));

  return parsedMessage;
};

export default function CenteredMessage({
  showClose,
  title,
  buttonText,
  message,
  onContinue,
}) {
  const [open, isOpen] = useState(true);

  return open ? (
    <div className="container">
      <div className="divStyle">
        { renderCloseButton(showClose, isOpen, open) }
        <h1 className="titleStyle">{ title }</h1>
        <p className="messageStyle">{ renderMessage(message) }</p>
        <button className="buttonStyle" type="button" onClick={onContinue}>
          { buttonText }
        </button>
      </div>
    </div>
  ) : null;
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
