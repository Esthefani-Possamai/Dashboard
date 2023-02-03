import React from 'react';
import { Layout } from './components/Layout/Layout';
import GlobalStyles from './style/GlobalStyle';
import {ThemeProvider} from 'styled-components'
import dark from './style/themes/dark'
import light from './style/themes/light'

function App() {
  return (
    <ThemeProvider theme={dark}>
    <GlobalStyles />
    <Layout />
    </ThemeProvider>
  );
}

export default App;
