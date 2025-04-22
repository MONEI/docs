import {Bizum as MoneiBizum} from '@monei-js/components';
import React from 'react';
import ReactDOM from 'react-dom';

// Import findDOMNode from external library
import {findDOMNode} from 'find-dom-node-polyfill';

// Set Find DOM Node before driver
ReactDOM.findDOMNode = findDOMNode;

const BizumComponent = MoneiBizum.driver('react', {
  React: React,
  ReactDOM: ReactDOM
});

export default function Bizum() {
  return (
    <BizumComponent
      accountId="4cdccd66-938e-44d9-b0c9-9b79397f986d"
      amount={100}
      currency="EUR"
      onSubmit={(result) => {
        console.log(result);
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
  );
}
