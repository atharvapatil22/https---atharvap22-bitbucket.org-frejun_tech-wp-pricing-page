import React from "react";
import PricingSection1 from "./components/PricingSection1";

function Pricing() {
  const priceTable = [
    {
      name: "India",
      monthly: {
        basic: "1200 ₹",
        pro: "1600 ₹",
      },
      annually: {
        basic: "1000 ₹",
        pro: "1400 ₹",
      },
    },
    {
      name: "USA",
      monthly: {
        basic: "80 $",
        pro: "60 $",
      },
      annually: {
        basic: "65 $",
        pro: "45 $",
      },
    },
    {
      name: "UK",
      monthly: {
        basic: "50 £",
        pro: "60 £",
      },
      annually: {
        basic: "40 £",
        pro: "50 £",
      },
    },
  ];

  return (
    <div>
      <PricingSection1 priceTable={priceTable} />
    </div>
  );
}

export default Pricing;
