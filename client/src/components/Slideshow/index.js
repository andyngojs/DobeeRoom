import React from "react";
import Slider from "react-slick";
import clsx from "clsx";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import styles from "./Slideshow.module.scss";
import SlideItem from "./SlideItem";
import imgBanner from "../../assets/images/find-room.svg";

function ButtonPrevArrow({ className, style, onClick }) {
  return (
    <div
      className={clsx(className, styles.btnPrev)}
      onClick={onClick}
      style={{ ...style }}
    >
      <CaretLeftOutlined className={clsx(styles.iconPrev)} />
    </div>
  );
}

function ButtonNextArrow({ className, style, onClick }) {
  return (
    <div
      className={clsx(className, styles.btnNext)}
      onClick={onClick}
      style={{ ...style }}
    >
      <CaretRightOutlined className={clsx(styles.iconNext)} />
    </div>
  );
}

export default function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    prevArrow: <ButtonPrevArrow />,
    nextArrow: <ButtonNextArrow />,
  };
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Slider {...settings}>
          <SlideItem image={imgBanner} />
          <SlideItem image={imgBanner} />
          <SlideItem image={imgBanner} />
        </Slider>
      </div>
    </>
  );
}
