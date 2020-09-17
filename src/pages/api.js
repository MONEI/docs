import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '../components/Redoc';
import openapi from '../../openapi.json';

function APIDocs() {
  return (
    <Layout
      title="API Reference"
      description="The MONEI API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.">
      <Redoc spec={openapi} />
    </Layout>
  );
}

export default APIDocs;
