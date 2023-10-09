"use client";
import React, { useState, useEffect, useMemo } from 'react'
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faCaretDown, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import SignInDropDown from './components/Dropdowns/SignIn';

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
                    <input type="text" placeholder='what to buy...' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <ul>
                    <li>
                        <span className={styles.cart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <div className={styles.cartNum}>
                                <span>20</span>
                            </div>
                        </span>
                        <span>Cart</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                        {/* <div className={styles.dropDownWrapper}>
                            <span>You have 20 items in you cart</span>
                            <button>Sign in</button>
                        </div> */}
                    </li>
                    <li onMouseEnter={() => setShowSignInDropdown(true)} onMouseLeave={() => setShowSignInDropdown(false)}>
                        <span>Your Account</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                        <SignInDropDown show={showSignInDropdown} />
                        {/* <div className={styles.dropDownWrapper}>
                            <div className={styles.input}>
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder='username' />
                            </div>
                            <div className={styles.input}>
                                <FontAwesomeIcon icon={faLock} />
                                <input type="text" placeholder='password' />
                            </div>
                            <div className={styles.options}>
                                <span>sign up</span>
                                <span>forgot your password?</span>
                            </div>
                            <button>Sign in</button>
                        </div> */}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MainHeader