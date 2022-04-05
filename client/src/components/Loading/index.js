import React from "react";
import clsx from "clsx";
import { Spin } from "antd";
import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.spin)}>
        <Spin size="large" tip="Loading..." />
        <h2 className={clsx(styles.title)}>
          DobeeRoom - Hỗ trợ sinh viên tìm kiếm nhà trọ
        </h2>
      </div>
    </div>
  );
}
