import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HomePage } from 'components';

// Styling
import theme from './themes/default';
import GlobalCss from './_global-css';

GlobalCss();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
