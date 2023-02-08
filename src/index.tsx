import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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
        <App />
      </ThemeProvider>
  </React.StrictMode>
);
