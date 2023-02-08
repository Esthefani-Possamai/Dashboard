import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import { AppRoutes } from './routes/app.routes';
import { useTheme } from './Hooks/theme';

function App() {

  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;


