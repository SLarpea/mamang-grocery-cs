"use client";
import React, { useMemo, useRef } from 'react';
import styles from './index.module.scss';
import Carousel, { CarouselRef } from '@/components/common/Carousel';
import Slide from '@/components/common/Carousel/components/Slide';
import Image from 'next/image';

const Main = () => {
    const carouselRef = useRef<CarouselRef | null>(null);
    const imgs = useMemo(() => {
        return [
            'grocery1.jpg',
            'grocery2.jpg',
            'grocery3.jpg',
        ];
    }, []);
    return (
        <div className={styles.wrapper}>
            <Carousel
                ref={carouselRef}
                className={styles.carousel}
                dots={false}
                arrows={false}
                rows={1}
                slidesToShow={1}
                slidesPerRow={1}
                autoplaySpeed={3000}
                centerPadding={'0'}
            >
                {imgs.map((src, index) => (
                    <Slide className={styles.slide}>
                        <div className={styles.imgWrapper}>
                            <Image
                                src={`/assets/images/${src}`}
                                fill
                                alt="Picture of the author"
                            />
                        </div>
                    </Slide>
                ))}
            </Carousel>
        </div>
    )
}

export default Main;