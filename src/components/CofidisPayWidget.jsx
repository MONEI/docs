import React from "react";
import ReactDOM from "react-dom";

let CofidisPayWidget = null;

if (typeof window !== "undefined") {
  const { CofidisPayWidget: MoneiCofidisPayWidget } = require("@monei-js/components");
  const CofidisPayWidgetComponent = MoneiCofidisPayWidget.driver("react", {
    React: React,
    ReactDOM: ReactDOM,
  });

  CofidisPayWidget = () => {
    return (
      <CofidisPayWidgetComponent
        accountId="2975bcfa-7bbc-422d-af48-c66759d87b69"
        language="en"
        amount={2000}
        onSubmit={(result) => {
          console.log(result);
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    );
  };
}

export { CofidisPayWidget };
