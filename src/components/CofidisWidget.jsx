import React from "react";
import ReactDOM from "react-dom";

let CofidisWidget = null;

if (typeof window !== "undefined") {
  const { CofidisWidget: MoneiCofidisWidget } = require("@monei-js/components");
  const CofidisWidgetComponent = MoneiCofidisWidget.driver("react", {
    React: React,
    ReactDOM: ReactDOM,
  });

  CofidisWidget = () => {
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
}

export { CofidisWidget };
