if (typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const monei = require('@monei-js/components');

  const CofidisComponent = monei.Cofidis.driver('react', {
    React: React,
    ReactDOM: ReactDOM
  });

  module.exports.Cofidis = () => {
    return (
      <CofidisComponent
        paymentId="e33b99de3a068dd3d646f66cce5fcafe89287b82"
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
  module.exports.Cofidis = () => null;
}
