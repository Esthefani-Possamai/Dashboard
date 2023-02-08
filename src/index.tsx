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
        <AuthProvider signIn={function (email?: string | undefined, password?: string | undefined): void {
        throw new Error('Function not implemented.');
      } } signOut={function (): void {
        throw new Error('Function not implemented.');
      } }/>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
