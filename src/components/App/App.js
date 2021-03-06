import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

//CUSTOM FILE IMPORTS

import AboutPage from '../../Pages/AboutPage/AboutPage';
import DetailsPage from '../../Pages/DetailsPage/DetailsPage';
import EventsPage from '../../Pages/EventsPage/EventsPage';
import Footer from '../Footer/Footer';

import LandingPage from '../../Pages/LandingPage/LandingPage';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import RegisterPage from '../../Pages/RegisterPage/RegisterPage';
import RegisterPageTwo from '../../Pages/RegisterPage/RegisterPageTwo';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../../Pages/UserPage/UserPage';
import './App.css';
import AdminPage from '../../Pages/AdminPage/AdminPage';

//MATERIAL-UI imports
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  //theme settings
  palette: {
    primary: {
      main: '#29A7D9',
    },
    secondary: {
      main: '#8CBF3F',
    },
    // error: '',
    // warning: '',
    // info: '',
    // success: '',
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
                component={AboutPage}
              />

              <Route
                // shows EventsPage at all times (logged in or not)
                exact
                path="/events"
                component={EventsPage}
              />

              <Route
                // shows EventsPage at all times (logged in or not)
                exact
                path="/event/details/:id"
                component={DetailsPage}
              />

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
                component={UserPage}
              />
              <ProtectedRoute exact path="/admin" component={AdminPage} />

              {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LoginPage at /login
                exact
                path="/login-register"
                component={LoginPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration/page/1"
                component={RegisterPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration/page/2"
                component={RegisterPageTwo}
                authRedirect="/user"
              />

              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LandingPage}
                authRedirect="/user"
              />

              <Route exact path="/admin" component={AdminPage} />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
