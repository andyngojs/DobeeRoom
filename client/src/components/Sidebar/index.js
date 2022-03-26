import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import {
  PlusOutlined,
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

const Siderbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isActiveHome = useSelector(isActiveHomeSelector);
  const isActiveSearch = useSelector(isActiveSearchSelector);
  const isActiveUser = useSelector(isActiveUserSelector);
  const isActiveAbout = useSelector(isActiveAboutSelector);

  const handleSelectedTab = useEffect(() => {
    switch (location.pathname) {
      case "/":
        dispatch(activeHomeTab);
        document.title = "Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ";
        break;
      case "/search":
        dispatch(activeSearchTab);
        document.title =
          "Tìm Kiếm Phòng Trọ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ";
        break;
      case "/user":
        dispatch(activeUserTab);
        document.title =
          "Trang Cá Nhân | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ";
        break;
      case "/about":
        dispatch(activeAboutTab);
        document.title =
          "Giới Thiệu về DobeeRoom | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ";
        break;
      default: {
        dispatch(activeHomeTab);
      }
    }
  }, [location.pathname]);

  return (
    <div className={clsx(styles.wrapper)}>
      <Button
        type="primary"
        shape={"circle"}
        icon={<PlusOutlined />}
        size={"large"}
        className={clsx(styles.button)}
      />
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

export default Siderbar;
