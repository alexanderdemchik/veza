import React from 'react';
import Services from './components/Services';
import injectSheet, { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import defaultTheme from './theme';
import store from './redux/store';
import Routes from './pages/routes';

const styles = (theme: Theme) => ({
  '@global': {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
      margin: 0,
    },
    '#root': {
      height: '100%',
      fontFamily: theme.typography.fontFamily
    }
  }
});

const App = injectSheet(styles)(() => (
  <Routes />
));

const WrappedApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default WrappedApp;