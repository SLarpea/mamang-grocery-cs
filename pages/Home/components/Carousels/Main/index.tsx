"use client";
import React, { useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import Carousel, { CarouselRef } from "@/components/common/Carousel";
import Slide from "@/components/common/Carousel/components/Slide";
import Image from "next/image";
import classnames from "classnames";

const Main = () => {
  const [selectedDot, setSelectedDot] = useState<number>(0);
  const carouselRef = useRef<CarouselRef | null>(null);
  const imgs = useMemo(() => {
    return ["grocery1.jpg", "grocery2.jpg", "grocery3.jpg", "grocery4.jpg"];
  }, []);
  const dots = useMemo(() => {
    return [1, 2, 3, 4];
  }, []);
  const beforeSlideChange = (oldIndex: number, newIndex: number) => {
    setSelectedDot(newIndex);
  };
  const goToSlide = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number
  ) => {
    setSelectedDot(idx);
    carouselRef.current?.slickGoTo(idx);
  };
  return (
    <div className={styles.wrapper}>
      <Carousel
        ref={carouselRef}
        className={styles.carousel}
        dots={false}
        arrows={false}
        accessibility={true}
        rows={1}
        slidesToShow={1}
        slidesPerRow={1}
        autoplaySpeed={3000}
        centerPadding={"0"}
        beforeChange={beforeSlideChange}
      >
        {imgs.map((src, index) => (
          <Slide key={index} className={styles.slide}>
            <div className={styles.imgWrapper}>
              <Image
                alt={`${src}`}
                src={`/assets/images/${src}`}
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 160rem) 100vw"
              />
            </div>
          </Slide>
        ))}
      </Carousel>
      <div className={styles.dots}>
        {dots.map((item, index) => (
          <div
            key={index}
            className={styles.dot}
            onClick={(e) => goToSlide(e, index)}
            onMouseEnter={() => carouselRef.current?.slickPause()}
            onMouseLeave={() => carouselRef.current?.slickPlay()}
          >
            <div
              className={classnames(styles.selectedDot, {
                [styles.selected]: index === selectedDot,
              })}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
