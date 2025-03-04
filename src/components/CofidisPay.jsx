import React from "react";
import ReactDOM from "react-dom";

let CofidisPay = null;

if (typeof window !== "undefined") {
  const { CofidisPay: MoneiCofidisPay } = require("@monei-js/components");
  const CofidisPayComponent = MoneiCofidisPay.driver("react", {
    React: React,
    ReactDOM: ReactDOM,
  });

  CofidisPay = () => {
    return (
      <CofidisPayComponent
        paymentId="0d148f882a96f578c7ce0105eceb079586a0670a"
        language="en"
        onSubmit={(result) => {
          console.log(result);
          alert(
            "In the real integration at this point you will be redirected to Cofidis payment page."
          );
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    );
  };
}

export { CofidisPay };
