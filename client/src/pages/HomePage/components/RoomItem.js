import React from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";
import styles from "./RoomItem.module.scss";
import LikedBtn from "../../../components/Button/LikedBtn";

export default function RoomItem({ post }) {
  const navigate = useNavigate();

  return (
    <div className={clsx("col", "c-12", "m-4", "l-3", styles.col)}>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.imgRoom)}>
          <img
            src={`http://localhost:5000/${post.thumbnail_img}`}
            alt=""
            className={clsx(styles.img)}
          />
          <div
            className={clsx(styles.btnDetail)}
            onClick={() => navigate(`/detail/${post._id}`)}
          >
            <span>Xem chi tiết</span>
          </div>
        </div>
        <div className={clsx(styles.previewDetail)}>
          <span className={clsx(styles.label)}> {post.type_room} </span>
          <h2 className={clsx(styles.heading)}>{post.title}</h2>
          <p className={clsx(styles.area)}>Diện tích: {post.area_room} m2 </p>
          <p className={clsx(styles.address)}>{post.address}</p>
          <h4 className={clsx(styles.cost)}>
            Giá Phòng: {post.price_room && formatVND(post.price_room)} VNĐ
          </h4>
          <div className={clsx(styles.cardFooter)}>
            <div className={clsx(styles.timeline)}>
              <p>
                Ngày Đăng: {moment(post.createdAt).format("HH:MM DD MMM,YYYY")}{" "}
              </p>
              <p style={{ fontSize: 14, fontWeight: 600 }}>
                {" "}
                Người đăng:
                {post.created_by}
              </p>
            </div>
            <LikedBtn post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}

const formatVND = (amount) => {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
