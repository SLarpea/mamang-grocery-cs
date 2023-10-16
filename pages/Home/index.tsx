"use client";
import React from 'react';
import styles from './index.module.scss';
import PromoCarousel from './components/Carousels/Promo';

const Home = () => {
  return (
    <div className={styles.wrapper}>
        <PromoCarousel />
    </div>
  )
}

export default Home;