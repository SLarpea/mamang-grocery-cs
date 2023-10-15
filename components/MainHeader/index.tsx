"use client";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import SignInDropDown from "./components/Dropdowns/SignIn";
import CartDropDown from "./components/Dropdowns/Cart";

const MainHeader = () => {
  const [showSignInDropdown, setShowSignInDropdown] = useState<boolean>(false);
  const [showCartDropdown, setShowCartDropdown] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoName}>
          <span>mamang grocery</span>
        </div>
        <div className={styles.lists}>
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="what to buy..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <ul>
            <li
              onMouseEnter={() => setShowCartDropdown(true)}
              onMouseLeave={() => setShowCartDropdown(false)}
            >
              <span className={styles.cart}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className={styles.cartNum}>
                  <span>20</span>
                </div>
              </span>
              <span>Cart</span>
              <FontAwesomeIcon icon={faCaretDown} />
              <CartDropDown show={showCartDropdown} />
            </li>
            <li
              onMouseEnter={() => setShowSignInDropdown(true)}
              onMouseLeave={() => setShowSignInDropdown(false)}
            >
              <span>Your Account</span>
              <FontAwesomeIcon icon={faCaretDown} />
              <SignInDropDown show={showSignInDropdown} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
