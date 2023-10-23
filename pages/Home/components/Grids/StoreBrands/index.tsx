"use client";
import React from "react";
import styles from "./index.module.scss";

const StoreBrands = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.carouselTitle}>
          <span>Top Brands in Stock!</span>
          <span>View All</span>
        </div>
      </div>
      <div className={styles.grid}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
    </div>
  );
};

export default StoreBrands;
