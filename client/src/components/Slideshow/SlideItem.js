import React from "react";
import clsx from "clsx";
import styles from "./Slideshow.module.scss";

export default function Slideshow({ title, description, image }) {
  return (
    <div className={clsx(styles.item)}>
      <div className={clsx(styles.left)}>
        <h2 className={clsx(styles.heading)}>{title}</h2>
        <p> {description} </p>
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
