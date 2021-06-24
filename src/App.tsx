import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from './components/Wrapper';
import Dashboard from './components/Dashboard';

const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={Wrapper}/>
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
