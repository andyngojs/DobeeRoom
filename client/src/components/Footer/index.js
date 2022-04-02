import React, { memo } from "react";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import "../../sass/index.scss";
import logo from "../../assets/images/iconRound.png";

function Footer() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <img
              src={logo}
              className={clsx(styles.logoFooter)}
              alt="Dobeeroom"
            />
            <p className={clsx(styles.description)}>
              DobeeRoom - Nền tảng trực tuyến hỗ trợ sinh viên tìm kiếm phòng
              trọ.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <p className={clsx(styles.textFooter)}>
              © 2022 DobeeRoom - Copyright by AndyngoJs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
