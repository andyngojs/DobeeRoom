import React from "react";
import clsx from "clsx";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";
import styles from "./AboutBox.module.scss";
import { Link } from "react-router-dom";
// Entities
import { URL } from "../../../constants/env";

export default function AboutBox({ userCurr, title, description, isPost = false, myPostPublic }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <h4 className={clsx(styles.title)}> {title} </h4>
      {isPost ? (
        myPostPublic.map((post, index) => (
          <div className={clsx(styles.inner)} key={index} >
          <Link to={`/detail/${post._id}`} className={clsx(styles.thumb)} >
            <img src={`${URL}:5000/${post.thumbnail_img}`} alt={post.title} className={clsx(styles.thumbImg)} />
          </Link>
          <div className={clsx(styles.info)} >
            <h3 className={clsx(styles.infoTitle)} >
              <Link to={`/detail/${post._id}`} > { post.title } </Link>
            </h3>
            <p className={clsx(styles.decs)} >
              { 
                `${post.description}, 
                  Giá điện: ${post.price_electron}đ/số, 
                  Giá Nước: ${post.price_water}đ/m3,
                  Địa chỉ: ${post.detail_address} ${post.address},
                  Giá Phòng: ${post.price_room}
                  `
              }
            </p>
          </div>
        </div>
        ))
      ) : (
        <div>
          <div className={clsx(styles.participation)}>
            {description ? (
              <span className={clsx(styles.noResult)}> {description} </span>
            ) : (
              <>
                <UserOutlined />
                <span>
                  {" "}
                  Thành viên của
                  <span style={{ fontWeight: 600 }}> DobeeRoom </span>
                  từ {moment(userCurr.createdAt).startOf("day").fromNow()}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
