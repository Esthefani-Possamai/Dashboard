import React from 'react';
import GlobalStyles from './style/GlobalStyle';
import { AppRoutes } from './routes/app.routes';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './Hooks/theme';

function App() {

  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes/>
    </ThemeProvider>
  );
}

export default App;
