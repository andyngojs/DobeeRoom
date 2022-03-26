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
    autoplaySpeed: 4000,
    prevArrow: <ButtonPrevArrow />,
    nextArrow: <ButtonNextArrow />,
  };
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Slider {...settings}>
          <SlideItem
            image={imgBanner}
            title={"DobeeRoom"}
            description="Nền tảng hỗ trợ sinh viên tìm kiếm phòng trọ"
          />
          <SlideItem
            image={imgBanner}
            title="Tìm phòng trọ nhanh chóng & tiện lợi"
            description="Bạn là sinh viên? Bạn lo lắng vì không tìm được phòng phù hợp? Đừng lo, vì đã có DobeeRoom giúp bạn!"
          />
          <SlideItem
            image={imgBanner}
            title="Giao diện thân thiện và bắt mắt"
            description="Các thông tin phòng trọ được thiết kế rõ ràng, minh bạch giúp bạn có thể tìm kiếm phòng dễ dàng hơn."
          />
        </Slider>
      </div>
    </>
  );
}
