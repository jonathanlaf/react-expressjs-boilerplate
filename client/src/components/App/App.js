import React, { Fragment } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Router from '../Router/Router';
import { hot } from 'react-hot-loader';
import './reset.css';

const App = () => (<Fragment>
  <Header />
  <Router />
  <Footer />
                   </Fragment>);

export default hot(module)(App);
