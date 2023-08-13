import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0Config from './auth0-config'; 

import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain={Auth0Config.domain}
    clientId={Auth0Config.clientId}
    redirectUri='http://localhost:3000/'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);