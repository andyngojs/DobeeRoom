import React from "react";
import clsx from "clsx";
import { Spin } from "antd";
import styles from "./Loading.module.scss";
import logoImg from "../../assets/images/iconRound.png";

export default function Loading() {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.spin)}>
        <img src={logoImg} className={clsx(styles.logoSplash)} />
        <h2 className={clsx(styles.title)}>
          DobeeRoom - Hỗ trợ sinh viên tìm kiếm nhà trọ
        </h2>
        <div className={clsx(styles.spinWrapper)}>
          <Spin size="large" />
        </div>
      </div>
    </div>
  );
}
