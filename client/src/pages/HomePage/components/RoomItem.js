import React from "react";
import clsx from "clsx";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styles from "./RoomItem.module.scss";

export default function RoomItem() {
  return (
    <div className={clsx("col c-12 m-4 l-3")}>
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.imgRoom)}>
          <img
            src="http://nganhangnhatro.hou.edu.vn/public/images/anhphongtro/AnhPhongTro-NguynThyLinh9751643180681/avata-NguynThyLinh97516431806811643602830.jpg"
            alt="room 1"
            className={clsx(styles.img)}
          />
          <div className={clsx(styles.btnDetail)}>
            <span>Xem chi tiết</span>
          </div>
        </div>
        <div className={clsx(styles.previewDetail)}>
          <span style={{ fontSize: "11px" }}>Nhà trọ & phòng trọ</span>
          <h2 className={clsx(styles.heading)}>
            Cho thuê phòng trọ giá rẻ sinh viên.
          </h2>
          <p className={clsx(styles.area)}>Diện tích: 19m2</p>
          <p className={clsx(styles.address)}>
            Phường Lĩnh Nam - quận Hoàng Mai
          </p>
          <h4 className={clsx(styles.cost)}>Giá Phòng: 2.000.000 VNĐ</h4>
          <div className={clsx(styles.cardFooter)}>
            <div className={clsx(styles.timeline)}>
              <p>Ngày Đăng: 22/03/2022 12:09</p>
              <p> Dong Ngo </p>
            </div>
            <div className={clsx(styles.action)}>
              <HeartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
