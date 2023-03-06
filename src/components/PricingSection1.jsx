import React, { useState } from "react";
import PriceCard from "./PriceCard/PriceCard.jsx";
import styles from "./Pricing.module.css";
import RadioSlider from "./RadioSlider/RadioSlider";

function PricingSection1({ priceTable }) {
  // const [selectedCountry, setSelectedCountry] = useState("India");
  // const [selectedCountryData, setSelectedCountryData] = useState({
  //   name: "India",
  //   monthly: {
  //     basic: "1200 ₹",
  //     pro: "1600 ₹",
  //   },
  //   annually: {
  //     basic: "1000 ₹",
  //     pro: "1400 ₹",
  //   },
  // });
  // const [selectedCycle, setSelectedCycle] = useState("M");

  //

  const [virtualNumber, setVirtualNumber] = useState("USA");
  const [usersQuantity, setUsersQuantity] = useState("bracket_2");
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div>
      <div className={styles.banner}>
        <h1>Simple and fair pricing</h1>
        <h3>No long term contracts. Pay as you go.</h3>
        <div className={styles.select_container}>
          <label>
            Virtual number
            <select
              value={virtualNumber}
              onChange={(e) => setVirtualNumber(e.target.value)}
              className={styles.temp_select}
            >
              <option value="IND">🇮🇳 India </option>
              <option value="USA">🇺🇸 USA </option>
              <option value="UK">🇬🇧 UK</option>
            </select>
          </label>

          <label>
            Number of users
            <select
              value={usersQuantity}
              onChange={(e) => setUsersQuantity(e.target.value)}
              className={styles.temp_select}
            >
              <option value="bracket_1">1-40</option>
              <option value="bracket_2">41-100</option>
              <option value="bracket_3">101+</option>
            </select>
          </label>
        </div>
      </div>

      <div className={styles.comparison_cards}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <RadioSlider
            options={["INR", "USD", "EUR", "GBP", "AUD"]}
            value={currency}
            onChange={(newVal) => setCurrency(newVal)}
            containerStyle={{ width: "345px" }}
          />

          <RadioSlider
            options={["Monthly", "Annual (Save 15%)"]}
            value={billingCycle}
            onChange={(newVal) => setBillingCycle(newVal)}
            containerStyle={{ width: "279px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          <PriceCard type="STANDARD" />
          <PriceCard type="PROFESSIONAL" />
        </div>

        <button>Compare plans</button>
      </div>
    </div>
  );
}

export default PricingSection1;
