import React from 'react';
import { storiesOf } from '@storybook/react';
import CenteredMessage from '../../CenteredMessage';

const title = '🤩 Thanks! You are now Premium.';
const message = ['In addition to your new access to special features, upgrading to Premium is like giving us a warm-and-cuddly, coffee-fueled hug. \n \n It let’s us know that you are finding value in our work, and it gives us the energy we need to continue creating tools to support your reflection practice. Thank you for your encouragement and support! ☕️ 🤗'];
const buttonText = 'Return to my Journal →';

storiesOf('CenteredMessage', module)
  .add('Show CenteredMessage component', () => (
    <CenteredMessage
      title={title}
      message={message}
      buttonText={buttonText}
      showClose
    />
  ));

storiesOf('CenteredMessage', module)
  .add('show CenteredMessage component with differents props', () => (
    <CenteredMessage
      title="You are Logged"
      message="Welcome back Mr. Robot"
      buttonText="Continue"
      showClose={false}
    />
  ));
