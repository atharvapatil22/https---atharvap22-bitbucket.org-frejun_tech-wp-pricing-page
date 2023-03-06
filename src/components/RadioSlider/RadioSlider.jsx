import React from "react";
import styles from "./RadioSlider.module.css";

function RadioSlider({ options, value, onChange, containerStyle }) {
  return (
    <div className={styles.slider_wrapper} style={containerStyle}>
      {options.map((option, index) => (
        <div
          onClick={() => onChange(option)}
          key={index}
          className={`${styles.option} ${
            option === value ? styles.selected : null
          }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default RadioSlider;
