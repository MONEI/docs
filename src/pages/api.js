import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '../components/Redoc';
import openapi from '../../openapi.json';

function APIDocs() {
  return (
    <Layout
      title="API Reference"
      description="Complete reference documentation for the MONEI API. Includes representative code snippets and examples for our PHP and Node.js client libraries.">
      <Redoc spec={openapi} />
    </Layout>
  );
}

export default APIDocs;
