"use client";
import Dropdown from "@/components/common/DropDown";
import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    show: boolean;
}

const Cart = ({ show }: Props) => {
  return (
    <Dropdown show={show}>
        <span className={styles.cartNotif}>You have <span className={styles.cartNum}>20</span> items in your cart</span>
    </Dropdown>
  )
}

export default Cart;