import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

// Your messages and locale can be set here
const messages = {
  // Add your message translations here
  'app.greeting': 'Hello',
};
const language = navigator.language.split(/[-_]/)[0]; // e.g., 'en'

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </IntlProvider>,
  document.getElementById('root')
);
