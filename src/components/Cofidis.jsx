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
        paymentId="e87be88ac289e26bdace8c39fff39b2a370a9446"
        onSubmit={(result) => {
          console.log(result);
          alert(
            'In the real integration at this point you will be refirected to Cofidis payment page.'
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
