import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();
  const isActiveHome = useSelector(isActiveHomeSelector);
  const isActiveSearch = useSelector(isActiveSearchSelector);
  const isActiveUser = useSelector(isActiveUserSelector);
  const isActiveAbout = useSelector(isActiveAboutSelector);

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
          onClick={() => dispatch(activeHomeTab)}
        >
          <Link to={"/"}>
            <HomeOutlined />
            <span> Trang Chủ </span>
          </Link>
        </li>
        <li
          className={clsx({ [styles.active]: isActiveSearch })}
          onClick={() => dispatch(activeSearchTab)}
        >
          <Link to={"/search"}>
            <SearchOutlined />
            <span> Tìm Kiếm</span>
          </Link>
        </li>
        <li
          className={clsx({ [styles.active]: isActiveUser })}
          onClick={() => dispatch(activeUserTab)}
        >
          <Link to={"/user"}>
            <UserOutlined />
            <span> Cá Nhân </span>
          </Link>
        </li>
        <li
          className={clsx({ [styles.active]: isActiveAbout })}
          onClick={() => dispatch(activeAboutTab)}
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
