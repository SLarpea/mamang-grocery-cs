"use client";
import React from 'react';
import styles from './index.module.scss';
import SiteContact from './components/SiteContact';
import Details from './components/Details';
import CopyRight from './components/CopyRight';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <SiteContact />
        <Details />
        <CopyRight />
    </div>
  )
}

export default Footer;