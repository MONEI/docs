import React from "react";
import ReactDOM from "react-dom";

let Bizum = null;

if (typeof window !== "undefined") {
  const { Bizum: MoneiBizum } = require("@monei-js/components");

  const BizumComponent = MoneiBizum.driver("react", {
    React: React,
    ReactDOM: ReactDOM,
  });

  Bizum = () => {
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
}

export { Bizum };
