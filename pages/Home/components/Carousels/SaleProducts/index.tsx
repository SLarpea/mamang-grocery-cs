"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
import Carousel, { CarouselRef } from "@/components/common/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slide from "@/components/common/Carousel/components/Slide";
import { useGetProductsQuery } from "@/redux/features/api/product";

const SaleProducts = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const {
    data,
    isLoading,
    isError,
    isSuccess
  } = useGetProductsQuery();

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.carouselTitle}>
          <span>On Sale</span>
          <span>View All</span>
        </div>
        <div className={styles.carouselNav}>
          <div
            className={styles.prevBtn}
            onClick={() => carouselRef.current?.slickPrev()}
            onMouseEnter={() => carouselRef.current?.slickPause()}
            onMouseLeave={() => carouselRef.current?.slickPlay()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className={styles.nextBtn}
            onClick={() => carouselRef.current?.slickNext()}
            onMouseEnter={() => carouselRef.current?.slickPause()}
            onMouseLeave={() => carouselRef.current?.slickPlay()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        className={styles.carousel}
        dots={false}
        arrows={false}
        accessibility={true}
        rows={1}
        slidesToShow={7}
        autoplaySpeed={3000}
        pauseOnHover={false}
        centerPadding={"0"}
      >
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide className={styles.slide}>
          <div className={styles.product}>
            <div className={styles.image}>
              <span>Image Here!</span>
              <div className={styles.discount}>
                <span className={styles.percent}>- 69% </span>
              </div>
            </div>
            <div className={styles.productInfo}>
              <span className={styles.name}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
              <div className={styles.priceCon}>
                <span className={styles.price}>
                  <span className={styles.curr}>&#8369;</span>
                  <span className={styles.amount}>69</span>
                </span>
                <span className={styles.soldNum}>10k+ sold</span>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  );
};

export default SaleProducts;
