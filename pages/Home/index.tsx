"use client";
import React from 'react';
import styles from './index.module.scss';
import PromoCarousel from './components/Carousels/Promo';
import MainCarousel from './components/Carousels/Main';
import DisplayGrid from './components/Grids/Grid1';
import DisplayGrid2 from './components/Grids/Grid2';
import SaleProducts from './components/Carousels/SaleProducts';
import TopSales from './components/Carousels/TopSales';
import NewArrivals from './components/Carousels/NewArrivals';
import StoreBrands from './components/Grids/StoreBrands';
import Categories from './components/Grids/Categories';
import TopViewed from './components/Carousels/TopViewed';
import Footer from './components/Footer';

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
        <section id='saleProducts'>
          <SaleProducts />
        </section>
        <section id='topSales'>
          <TopSales />
        </section>
        <section id='newArrivals'>
          <NewArrivals />
        </section>
        <section id='storeBrands'>
          <StoreBrands />
        </section>
        <section id='displayGrid2'>
          <DisplayGrid2 />
        </section>
        <section id='categories'>
          <Categories />
        </section>
        <section id='topViewed'>
          <TopViewed />
        </section>
        <section id='footer'>
          <Footer />
        </section>
    </div>
  )
}

export default Home;