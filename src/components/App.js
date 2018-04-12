import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Dashboard, Watchlist, LayoutTemplate, Navigation } from 'components';

// Styling
import GlobalCss from './_global-css';
import theme from './themes/default';

GlobalCss();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutTemplate nav={<Navigation />}>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/watchlist" component={Watchlist} exact />
        </Switch>
      </LayoutTemplate>
    </ThemeProvider>
  );
};

export default App;
