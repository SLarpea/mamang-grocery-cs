"use client";
import Dropdown from "@/components/common/DropDown";
import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

interface Props {
    show: boolean
}

const SignInDropDown = ({ show }: Props) => {
  return (
    <Dropdown show={show}>
      <div className={styles.input}>
        <FontAwesomeIcon icon={faUser} />
        <input type="text" placeholder="username" />
      </div>
      <div className={styles.input}>
        <FontAwesomeIcon icon={faLock} />
        <input type="text" placeholder="password" />
      </div>
      <button className={styles.submit}>Sign in</button>
      <span className={styles.signup}>&gt;&gt; sign up</span>
      <span className={styles.fyp}>&gt;&gt; forgot your password?</span>
    </Dropdown>
  );
};

export default SignInDropDown;
