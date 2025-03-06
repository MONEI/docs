import React from 'react';
import ReactDOM from 'react-dom';
import {CofidisPayWidget as MoneiCofidisPayWidget} from '@monei-js/components';

const CofidisPayWidgetComponent = MoneiCofidisPayWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM
});

export default function CofidisPayWidget() {
  return (
    <CofidisPayWidgetComponent
      accountId="2975bcfa-7bbc-422d-af48-c66759d87b69"
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
