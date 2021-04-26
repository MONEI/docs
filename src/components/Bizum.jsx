import React from 'react';
import ReactDOM from 'react-dom';
import * as monei from '@monei-js/components';

const BizumComponent = monei.Bizum.driver('react', {
  React: React,
  ReactDOM: ReactDOM
});

export const Bizum = React.memo(() => {
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
});
