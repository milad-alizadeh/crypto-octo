import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import configureStore from 'store/configure';
import api from 'services/api';
import theme from 'components/themes/default';
import cssReset from 'components/vendor-css-reset';

const store = configureStore({}, { api: api.create() });
const req = require.context('components', true, /.stories.js$/);

// CSS Reset
cssReset();

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Oswald:200,500');
  body {
    background: ${theme.colors.greyDarkest};
    padding: 20px;
  }
`;

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
));

configure(loadStories, module);
