if (typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const monei = require('@monei-js/components');

  const CofidisComponent = monei.CofidisPay.driver('react', {
    React: React,
    ReactDOM: ReactDOM
  });

  module.exports.CofidisPay = () => {
    return (
      <CofidisComponent
        paymentId="10cf4d03b8c054d9d6ea19eb8c84b6cfa774e34b"
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
  };
} else {
  module.exports.CofidisPay = () => null;
}
