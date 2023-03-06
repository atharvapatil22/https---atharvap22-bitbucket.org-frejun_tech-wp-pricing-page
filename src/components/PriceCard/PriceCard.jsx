import React from "react";
import styles from "./PriceCard.module.css";
import greenTickIcon from "../../assets/green_tick.svg";
import greyTickIcon from "../../assets/grey_tick.svg";

function PriceCard({ type }) {
  const featuresList = [
    {
      name: "Unlimited calling within India",
      isPro: false,
    },
    {
      name: "1 Virtual number",
      isPro: false,
    },
    {
      name: "Call reports & analytics",
      isPro: false,
    },
    {
      name: "Dashboard",
      isPro: true,
    },
    {
      name: "Click to call extension",
      isPro: true,
    },
    {
      name: "Incoming call routing",
      isPro: true,
    },
  ];

  return (
    <div className={styles.price_card}>
      <h2>STANDARD</h2>
      <h1>₹ 1,299</h1>
      <p style={{ marginTop: "8px" }}>per user per month.</p>
      <button>Try for free</button>
      <div className={styles.seperator} />

      {featuresList.map((feature, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            <img
              src={
                feature.isPro && type === "STANDARD"
                  ? greyTickIcon
                  : greenTickIcon
              }
              alt="green tick"
            />
            <p
              style={{
                marginLeft: "12px",
                color:
                  feature.isPro && type === "STANDARD" ? "#C4D0DF" : "#4A4A4A",
              }}
            >
              {feature.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PriceCard;
