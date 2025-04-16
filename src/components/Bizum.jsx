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
      accountId="2975bcfa-7bbc-422d-af48-c66759d87b69"
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
