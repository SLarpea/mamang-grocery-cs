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
          {/* <span className={styles.title}>On Sale</span> */}
        </div>
      </div>
    </div>
  )
}

export default Products;
