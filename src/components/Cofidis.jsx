import React from "react";
import ReactDOM from "react-dom";
import { Cofidis as MoneiCofidis } from "@monei-js/components";

const CofidisComponent = MoneiCofidis.driver("react", {
  React: React,
  ReactDOM: ReactDOM,
});

export default function Cofidis() {
  return (
    <CofidisComponent
      paymentId="254299d118a4d7f0eedef2fc9092ba777e9825c4"
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
}
