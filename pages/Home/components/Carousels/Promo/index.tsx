"use client";
import React, { useRef } from 'react';
import styles from './index.module.scss';
import Carousel, { CarouselRef } from '@/components/common/Carousel';
import Slide from '@/components/common/Carousel/components/Slide';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

const Promo = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  return (
    <div className={styles.wrapper}>
      <Carousel
        ref={carouselRef}
        className={styles.carousel}
        dots={false}
        accessibility={true}
        arrows={false}
        rows={1}
        slidesToShow={1}
        slidesPerRow={1}
        autoplaySpeed={5000}
        pauseOnHover={true}
        centerPadding={'0'}
      >
        <Slide className={styles.slide}>
          <div className={styles.slideWrapper}>
            <span className={styles.promo}>Insert Text HERE!</span>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.slideWrapper}>
            <span className={styles.promo}>Insert Text HERE!</span>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.slideWrapper}>
            <span className={styles.promo}>Insert Text HERE!</span>
          </div>
        </Slide>
      </Carousel>
      <div className={styles.nextBtn} onClick={() => carouselRef.current?.slickNext()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={styles.prevBtn} onClick={() => carouselRef.current?.slickPrev()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  )
}

export default Promo;