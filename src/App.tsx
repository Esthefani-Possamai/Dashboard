import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import { useTheme } from './Hooks/theme';
import { AuthRoutes } from './routes/auth.routes';
import { AppRoutes } from './routes/app.routes';

function App() {

  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <AppRoutes/> */}
      <AuthRoutes/>
    </ThemeProvider>
  );
}

export default App;


