import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import styles from "./MobileMenu.module.scss";
import {
  isActiveHomeSelector,
  isActiveSearchSelector,
  isActiveUserSelector,
  isActiveAboutSelector,
} from "../../redux/selectors";

function MobileMenu({ handleSelectedTab }) {
  const isActiveHome = useSelector(isActiveHomeSelector);
  const isActiveSearch = useSelector(isActiveSearchSelector);
  const isActiveUser = useSelector(isActiveUserSelector);
  const isActiveAbout = useSelector(isActiveAboutSelector);

  return (
    <div className={clsx(styles.modal)}>
      <div className={clsx(styles.body)}>
        <div className={clsx(styles.scrollable)}>
          <ul className={clsx(styles.navbarList)}>
            <li
              className={clsx({ [styles.active]: isActiveHome })}
              onClick={handleSelectedTab}
            >
              <Link to={"/"}>
                <HomeOutlined />
                <span> Trang Chủ </span>
              </Link>
            </li>
            <li
              className={clsx({ [styles.active]: isActiveSearch })}
              onClick={handleSelectedTab}
            >
              <Link to={"/search"}>
                <SearchOutlined />
                <span> Tìm Kiếm</span>
              </Link>
            </li>
            <li
              className={clsx({ [styles.active]: isActiveUser })}
              onClick={handleSelectedTab}
            >
              <Link to={"/user"}>
                <UserOutlined />
                <span> Cá Nhân </span>
              </Link>
            </li>
            <li
              className={clsx({ [styles.active]: isActiveAbout })}
              onClick={handleSelectedTab}
            >
              <Link to={"/about"}>
                <ContainerOutlined />
                <span> Giới Thiệu </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
