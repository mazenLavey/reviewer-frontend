import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from 'react-auth-kit';
import { ModeProvider } from 'context/ModeContext';

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
    <ModeProvider>
      <App />
    </ModeProvider>
  </AuthProvider>
);