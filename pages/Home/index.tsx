"use client";
import React from 'react';
import styles from './index.module.scss';
import PromoCarousel from './components/Carousels/Promo';
import MainCarousel from './components/Carousels/Main';
import DisplayGrid from './components/Grid';

const Home = () => {
  return (
    <div className={styles.wrapper}>
        <section id='promo'>
          <PromoCarousel />
        </section>
        <section id='mainCarousel'>
          <MainCarousel />
        </section>
        <section id='displayGrid'>
          <DisplayGrid />
        </section>
    </div>
  )
}

export default Home;