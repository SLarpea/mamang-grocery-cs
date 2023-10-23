"use client";
import React from 'react';
import styles from './index.module.scss';

const Grid = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.one}>
            <span className={styles.text}>Insert Text Here</span>
          </div>
          <div className={styles.two}>
            <span className={styles.text}>Insert Text Here</span>
          </div>
          <div className={styles.three}>
            <span className={styles.text}>Insert Text Here</span>
          </div>
        </div>
    </div>
  )
}

export default Grid;