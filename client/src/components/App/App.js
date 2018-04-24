import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Router from '../Router/Router';
import './reset.css';

const App = () => (
  <Fragment>
    <Header />
    <Router />
    <Footer />
  </Fragment>);

/* eslint-disable no-undef */
export default hot(module)(App);
/* eslint-enable no-undef */
