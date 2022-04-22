import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import moment from "moment";
import { Avatar } from "antd";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import styles from "./DetailPage.module.scss";
import { postPublicSelector } from "../../redux/selectors";
import { API_KEY_MAP } from "../../constants/env";

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

export default function DetailPage() {
  const postPublic = useSelector(postPublicSelector);
  const { id } = useParams();
  const [postItem, setPostItem] = useState({});

  useEffect(() => {
    document.title = postItem.title;
  }, [postItem]);

  useEffect(() => {
    if (postPublic.length > 0) {
      const post = postPublic.find((item) => item._id === id);
      setPostItem(post);
    }
  }, [postPublic, id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ButtonPrevArrow />,
    nextArrow: <ButtonNextArrow />,
  };

  const formatVND = useCallback((amount) => {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }, []);

  return (
    <div className={clsx(styles.container)}>
      <h3 className={clsx(styles.title)}> {postItem.title} </h3>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.imgSlider)}>
          <Slider {...settings}>
            {postItem.detail_img &&
              postItem.detail_img.map((item, index) => (
                <div key={index}>
                  <img
                    alt=""
                    src={`http://localhost:5000/${item}`}
                    className={clsx(styles.imgs)}
                  />
                </div>
              ))}
          </Slider>
        </div>
        <div className={clsx(styles.infoContainer)}>
          <div className={clsx(styles.authorWrapper)}>
            <Avatar size={46} icon={<UserOutlined />} />
            <div>
              <h2 className={clsx(styles.nameAuthor)}>
                {" "}
                {postItem.created_by}{" "}
              </h2>
              <p className={clsx(styles.postedDay)}>
                Ngày đăng:{"  "}
                {moment(postItem.createdAt)
                  .locale("vi")
                  .format("HH:MM DD MMM,YYYY")}{" "}
              </p>
            </div>
          </div>
          <p> {postItem.description} </p>
          <p className={clsx(styles.infoOther)}>
            Địa chỉ chi tiết: {postItem.detail_address}
          </p>
          <p className={clsx(styles.infoOther)}>Địa chỉ: {postItem.address} </p>
          <p className={clsx(styles.infoOther)}>
            Số điện thoại: {postItem.phone}{" "}
          </p>
          <p className={clsx(styles.infoOther)}>
            Diện tích: {postItem.area_room} m2{" "}
          </p>
          <p className={clsx(styles.infoOther)}>
            Giá điện - nước:{" "}
            {postItem.price_electron && formatVND(postItem.price_electron)}đ/số -
            {postItem.price_water && formatVND(postItem.price_water)}đ/m3
          </p>
          <h3 className={clsx(styles.priceRoom)}>
            Giá phòng: {postItem.price_room && formatVND(postItem.price_room)}{" "}
            VND
          </h3>
        </div>
      </div>
      <div className={clsx(styles.wrapper2)}>
        <h3 className={clsx(styles.heading)}>Các Tiện ích khác</h3>
        {postItem.utils?.map((item, index) => (
          <span key={index} className={clsx(styles.itemUtil)}>
            {item}
          </span>
        ))}
        <div className={clsx(styles.mapWrapper)}>
          <h3 className={clsx(styles.heading)}>Bản Đồ</h3>
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?q=${postItem.address}&key=${API_KEY_MAP}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
