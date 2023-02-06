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
        paymentId="0d148f882a96f578c7ce0105eceb079586a0670a"
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
