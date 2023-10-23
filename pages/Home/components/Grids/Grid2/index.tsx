"use client";
import React from "react";
import styles from "./index.module.scss";

const Grid2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div>
            <span>Insert</span>
            <span>Text</span>
            <span>Here</span>
        </div>
        <div>
            <span>Insert</span>
            <span>Text</span>
            <span>Here</span>
        </div>
        <div>
            <span>Insert</span>
            <span>Text</span>
            <span>Here</span>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
