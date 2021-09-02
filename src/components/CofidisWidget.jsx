if (typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const monei = require('@monei-js/components');

  const CofidisWidgetComponent = monei.CofidisWidget.driver('react', {
    React: React,
    ReactDOM: ReactDOM
  });

  module.exports.CofidisWidget = () => {
    return (
      <CofidisWidgetComponent
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
  };
} else {
  module.exports.CofidisWidget = () => null;
}
