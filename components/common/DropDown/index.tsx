"use client";
import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

interface Props {
    show: boolean;
  children: ReactNode;
}

const Dropdown = ({ show, children }: Props) => {
  return <div className={classnames(styles.dropDown, {
    [styles.isShow]: show
  })}>{children}</div>;
};

export default Dropdown;
