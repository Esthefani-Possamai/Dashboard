import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import { useTheme } from './Hooks/theme';
import { AuthRoutes } from './routes/auth.routes';
import { AppRoutes } from './routes/app.routes';
import { useAuth } from './Hooks/auth';

function App() {

  const { theme } = useTheme();
  const { logged } = useAuth();


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      { logged ? <AppRoutes/> : <AuthRoutes /> }
    </ThemeProvider>
  );
}

export default App;



