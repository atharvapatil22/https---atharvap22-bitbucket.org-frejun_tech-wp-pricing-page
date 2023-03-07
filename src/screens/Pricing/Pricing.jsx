import React, { useState } from "react";
import PriceCard from "../../components/PriceCard/PriceCard";
import RadioSlider from "../../components/RadioSlider/RadioSlider";
import styles from "./Pricing.module.css";

function Pricing() {
  // const pricingData = [
  //   {
  //     name: "India",
  //     monthly: {
  //       basic: "1200 ₹",
  //       pro: "1600 ₹",
  //     },
  //     annually: {
  //       basic: "1000 ₹",
  //       pro: "1400 ₹",
  //     },
  //   },
  //   {
  //     name: "USA",
  //     monthly: {
  //       basic: "80 $",
  //       pro: "60 $",
  //     },
  //     annually: {
  //       basic: "65 $",
  //       pro: "45 $",
  //     },
  //   },
  //   {
  //     name: "UK",
  //     monthly: {
  //       basic: "50 £",
  //       pro: "60 £",
  //     },
  //     annually: {
  //       basic: "40 £",
  //       pro: "50 £",
  //     },
  //   },
  // ];

  const [virtualNumber, setVirtualNumber] = useState("USA");
  const [usersQuantity, setUsersQuantity] = useState("bracket_2");
  const [currency, setCurrency] = useState("INR");
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div>
      <div className={styles.pricing_banner}>
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

      <div className={styles.pricing_body}>
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

        <div style={{ border: "1px solid #E1E5E2", margin: "64px 0 80px 0" }} />

        <div className={styles.add_ons}>
          <h3>Add-ons</h3>
        </div>

        <div className={styles.add_ons}>
          <h3>Call & SMS charges</h3>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
