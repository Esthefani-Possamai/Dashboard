import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Hooks/auth';
import { ThemeProvider } from './Hooks/theme';
import light from './style/themes/light';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider toggleTheme={function () : void {
        throw new Error ('');
      }} theme={light}>

        {/* englobar o App com o AuthProvider é fundamental para que o contexto reconheça o filho */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
  </React.StrictMode>
);
