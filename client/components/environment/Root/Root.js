import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { ThemeProvider } from '@mui/material/styles';

import Main from '_components/environment/Main';

import theme from '_client/styles/js/theme';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
