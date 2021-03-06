import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const App = ({ Component }) => (
  <>
    <Head>
      <title>블로그</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
