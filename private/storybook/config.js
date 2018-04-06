import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import configureStore from 'store/configure';
import theme from 'components/themes/default';
import GlobalCss from 'components/_global-css';

const store = configureStore({});
const req = require.context('components', true, /.stories.js$/);

// CSS Reset
GlobalCss();

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Oswald:200,500');
  body {
    padding: 2rem;
  }
`;

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


addDecorator((story) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{story()}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
});

configure(loadStories, module);
