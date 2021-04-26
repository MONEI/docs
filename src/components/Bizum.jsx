if (typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const monei = require('@monei-js/components');

  const BizumComponent = monei.Bizum.driver('react', {
    React: React,
    ReactDOM: ReactDOM
  });

  module.exports.Bizum = () => {
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
  };
} else {
  module.exports.Bizum = () => null;
}
