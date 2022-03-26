import React from "react";
import clsx from "clsx";
import styles from "./Slideshow.module.scss";

export default function Slideshow({ image }) {
  return (
    <div className={clsx(styles.item)}>
      <div className={clsx(styles.left)}>
        <h2 className={clsx(styles.heading)}>DobeeRoom</h2>
        <p>Nền tảng hỗ trợ sinh viên tìm kiếm nhà trọ</p>
      </div>
      <div className={clsx(styles.right)}>
        <img
          src={image}
          className={clsx(styles.imgBanner)}
          alt="img banner 1"
        />
      </div>
    </div>
  );
}
