import React from 'react';
import { useIntl } from 'react-intl';

const MyComponent = () => {
  const intl = useIntl();

  return <h1>{intl.formatMessage({ id: 'app.greeting' })}</h1>;
};

export default MyComponent;
