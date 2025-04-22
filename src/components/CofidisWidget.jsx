import {CofidisWidget as MoneiCofidisWidget} from '@monei-js/components';
import React from 'react';
import ReactDOM from 'react-dom';

// Import findDOMNode from external library
import {findDOMNode} from 'find-dom-node-polyfill';

// Set Find DOM Node before driver
ReactDOM.findDOMNode = findDOMNode;

const CofidisWidgetComponent = MoneiCofidisWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM
});

export default function CofidisWidget() {
  return (
    <CofidisWidgetComponent
      accountId="4cdccd66-938e-44d9-b0c9-9b79397f986d"
      language="en"
      amount={100}
      onSubmit={(result) => {
        console.log(result);
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
  );
}
