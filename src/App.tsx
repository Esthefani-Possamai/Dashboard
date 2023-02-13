import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import { AppRoutes } from './routes/app.routes';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './Hooks/theme';
import { useAuth } from './Hooks/auth';
import { AuthRoutes } from './routes/auth.routes';

function App() {
  const { logged } = useAuth();
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      { logged ? <AppRoutes/> : <AuthRoutes /> }
    </ThemeProvider>
  );
}

export default App;
