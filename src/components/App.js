import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { HomePage } from 'components';

// Styling
import theme from './themes/default';
import CssReset from './vendor-css-reset';

// CSS Reset
CssReset();

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
