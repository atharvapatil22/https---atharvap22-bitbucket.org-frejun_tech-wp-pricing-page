import React, { useState } from "react";
import styles from "./Pricing.module.css";
import ReactSelectMaterialUi from "react-select-material-ui";

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

      {/* Country */}
      {/* <h3>Select country:</h3>
      <select
        name="country"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCountryData(
            priceTable.filter((country) => country.name === e.target.value)[0]
          );
        }}
      >
        {priceTable.map((country, index) => (
          <option value={country.name} key={index}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Billing cycle 
      <h3>Select billing cycle:</h3>
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="M"
              onChange={(e) => setSelectedCycle("M")}
              checked={selectedCycle === "M"}
            />
            Monthly
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="A"
              onChange={(e) => setSelectedCycle("A")}
              checked={selectedCycle === "A"}
            />
            Annually
          </label>
        </div>
      </form>

      <div className="card-wrapper">
        {/* Card 1 
        <div className="price-card">
          <h4>Standard</h4>
          <h3 style={{ color: "grey" }}>
            {selectedCycle === "M"
              ? selectedCountryData.monthly.basic
              : selectedCountryData.annually.basic}
          </h3>
          <h5>per user per month</h5>
          <div className="draw-line" />
          <p>~features list</p>
        </div>

        {/* Card 2 
        <div className="price-card">
          <h4>Professional</h4>
          <h3 style={{ color: "grey" }}>
            {selectedCycle === "M"
              ? selectedCountryData.monthly.pro
              : selectedCountryData.annually.pro}
          </h3>
          <h5>per user per month</h5>

          <div className="draw-line" />
          <p>~features list</p>
        </div>
      </div> */}
    </div>
  );
}

export default PricingSection1;
