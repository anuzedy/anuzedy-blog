import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>블로그</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default App;