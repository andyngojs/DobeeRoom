import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import moment from "moment";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styles from "./RoomItem.module.scss";
import { savePostAction } from "../../../redux/actions";
import useAuthen from "../../../hooks/useAuthen";

export default function RoomItem({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useAuthen();
  const [isSaved, setIsSaved] = useState(false)

  const handleSavePost = () => {
    dispatch(
      savePostAction.savePostRequest({ id_user: data._id, id_post: post._id }),
    );
    setIsSaved(true)
  };

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
            {post.isSaved || isSaved ? (
              <div className={clsx(styles.action, styles.isSaved)}>
                <HeartFilled />
              </div>
            ) : (
              <div
                className={clsx(styles.action)}
                onClick={handleSavePost}
                alt="Lưu bài viết"
              >
                <HeartOutlined />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const formatVND = (amount) => {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
