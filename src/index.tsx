import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import customizedTheme from 'styles/customizedTheme';
import { AuthProvider } from 'react-auth-kit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <ThemeProvider theme={customizedTheme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
);