import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import dark from './style/themes/dark'
import light from './style/themes/light'
import { AppRoutes } from './routes/app.routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
