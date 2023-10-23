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
  slickGoTo: (index: number) => void;
  slickPause: () => void;
  slickPlay: () => void;
}

const Carousel = forwardRef<CarouselRef, Props>(({ children, ...rest }, ref) => {
  const carouselRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
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
    slickGoTo: (index: number) => {
      carouselRef.current?.slickGoTo(index, false); // if true, it will go to the slide without animation.
    },
    slickPause: () => {
      carouselRef.current?.slickPause();
    },
    slickPlay: () => {
      carouselRef.current?.slickPlay();
    }
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