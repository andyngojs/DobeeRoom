import { memo, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";
import {
  activeHomeTab,
  activeSearchTab,
  activeUserTab,
  activeAboutTab,
} from "../../redux/actions";
import {
  isActiveHomeSelector,
  isActiveSearchSelector,
  isActiveUserSelector,
  isActiveAboutSelector,
} from "../../redux/selectors";

const Siderbar = ({ handleSelectedTab }) => {
  const isActiveHome = useSelector(isActiveHomeSelector);
  const isActiveSearch = useSelector(isActiveSearchSelector);
  const isActiveUser = useSelector(isActiveUserSelector);
  const isActiveAbout = useSelector(isActiveAboutSelector);

  return (
    <div className={clsx(styles.wrapper)}>
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
  );
};

export default memo(Siderbar);
