"use client";
import { useGetProductsQuery } from '@/redux/features/api/product';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import classnames from "classnames";
import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = () => {
    const searchParams = useSearchParams();
    const current = searchParams?.get('current') ?? "";
    const [isOpenCmb, setOpenCmb] = useState(false);
    const [isOpenAcc, setOpenAcc] = useState(false);
    const { data, error, isLoading, isError } = useGetProductsQuery(current);

    useEffect(() => {
        console.log(data);
    });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.breadcrumbs}>
            <span>Home</span>
            <span>/</span>
            <span>On Sale</span>
          </div>
          <div className={styles.filters}>
            <div className={styles.accordion} onClick={() => setOpenAcc(!isOpenAcc)}>
              <span className={styles.header}>yow</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={classnames(styles.options, {
              [styles.isOpen]: isOpenAcc
            })}>
              <ul>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
              </ul>
            </div>
            <div className={styles.accordion} onClick={() => setOpenAcc(!isOpenAcc)}>
              <span className={styles.header}>yow</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <div className={styles.infiniteWrapper}>
          <div className={styles.combobox} onClick={() => setOpenCmb(!isOpenCmb)}>
            <span>selected option</span>
            <FontAwesomeIcon icon={faChevronDown} />

            <div className={classnames(styles.options, {
              [styles.isOpen]: isOpenCmb
            })}>
              <ul>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
                <li>
                  yow
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.productsWrapper}>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <span>image here</span>
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className={styles.priceAndSold}>
                  <span className={styles.price}>&#8369;69</span>
                  <span className={styles.sold}>10k+ sold</span>
                </div>
              </div>
            </div>
          </div>
          {/* <span className={styles.title}>On Sale</span> */}
        </div>
      </div>
    </div>
  )
}

export default Products;
