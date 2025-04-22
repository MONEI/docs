import {Cofidis as MoneiCofidis} from '@monei-js/components';
import React from 'react';
import ReactDOM from 'react-dom';

// Import findDOMNode from external library
import {findDOMNode} from 'find-dom-node-polyfill';

// Set Find DOM Node before driver
ReactDOM.findDOMNode = findDOMNode;

const CofidisComponent = MoneiCofidis.driver('react', {
  React: React,
  ReactDOM: ReactDOM
});

export default function Cofidis() {
  return (
    <CofidisComponent
      paymentId="470b43ad51a1821057e60c203f74bfc002eb9e42"
      language="en"
      onSubmit={(result) => {
        console.log(result);
        alert(
          'In the real integration at this point you will be redirected to Cofidis payment page.'
        );
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
  );
}
