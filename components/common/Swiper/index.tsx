"use client";
import React, { useRef, useEffect, ReactNode } from 'react';
import styles from './index.module.scss';
import { register } from 'swiper/element/bundle';

register();

interface Props {
    children: ReactNode;
    slidesPerView: number;
    navigation: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    speed?: number;
}

const Swiper = ({ children, slidesPerView, navigation, autoPlay, loop, speed }: Props) => {
    const swiperElRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
    swiperElRef.current?.addEventListener('progress', (e: any) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current?.addEventListener('slidechange', (e: any) => {
        console.log('slide changed');
      });
    }, [])

    return (
        <swiper-container
            slides-per-view="1"
            autoplay-delay="3000"
            navigation={false}  
            loop={true}
            // slidesPerView={1}
            // autoplay={{
            //     delay: 1000
            // }}
            // navigation={false}
            // loop={true}
        >
            {children}
        </swiper-container>
        // <div>yow</div>
    )
}

export default Swiper;