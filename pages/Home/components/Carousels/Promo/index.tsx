"use client";
import React from 'react';
import styles from './index.module.scss';
import Swiper from '@/components/common/Swiper';

const Promo = () => {
  return (
    <Swiper slidesPerView={1} navigation={true} autoPlay={true} loop={true} speed={1000}>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
    </Swiper>
  )
}

export default Promo;