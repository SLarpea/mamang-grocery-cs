"use client";
import { useRef, forwardRef, useImperativeHandle } from 'react';
import Slider from "react-slick";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export interface CarouselRef {
  slickNext: () => void;
  slickPrev: () => void;
}

const Carousel = forwardRef<CarouselRef, Props>(({ children, ...rest }, ref) => {
  const carouselRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    rows: 1,
    centerMode: true,
    ...rest
  };

  // Expose a function to pass the child's ref to the parent
  useImperativeHandle(ref, () => ({
    slickNext: () => {
      carouselRef.current?.slickNext();
    },
    slickPrev: () => {
      carouselRef.current?.slickPrev();
    },
  }));

  return (
    <>
      <Slider ref={carouselRef} {...settings}>
        {children}
      </Slider>
    </>
  );
});

export default Carousel;