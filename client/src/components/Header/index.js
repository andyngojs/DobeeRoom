import { useState, useCallback, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Typography } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import clsx from "clsx";
import styles from "./Header.module.scss";
import logoFull from "../../assets/images/dobeeroom.svg";
import { get } from "../../utils/LocalStorage";
import { accessTokenSelector, userInforSelector } from "../../redux/selectors";
import Modal from "./Modal";

const { Text } = Typography;

const Header = ({ handleModalMobile }) => {
  const [show, setShow] = useState(false);
  const userInfoLocal = get("INFOR");
  const navigate = useNavigate();
  const accessToken = useSelector(accessTokenSelector);
  const userInfo = useSelector(userInforSelector);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.logo)}>
        <Link to={"/"}>
          <img src={logoFull} alt={"DobeeRoom"} />
        </Link>
        <h3 className={clsx(styles.logoHeading)}>
          DobeeRoom - Tìm kiếm nhà trọ cho sinh viên
        </h3>
      </div>
      <div
        className={clsx(styles.barsMobile)}
        onClick={() => handleModalMobile()}
      >
        <BarsOutlined />
      </div>
      {!!userInfoLocal.accessToken || !!accessToken ? (
        <div className={clsx(styles.action)} onClick={toggleModal}>
          <Avatar
            className={clsx(styles.imgAvatar)}
            shape={"circle"}
            gap={2}
            size={"medium"}
          >
            {" "}
            {userInfoLocal.name.charAt(0) || userInfo.name.charAt(0)}{" "}
          </Avatar>
          <Text className={clsx(styles.nameUser)}>
            {userInfoLocal.name || userInfo.name}
          </Text>
        </div>
      ) : (
        <Button
          type="primary"
          shape="round"
          size={"large"}
          onClick={() => handleLogin()}
        >
          Đăng Nhập
        </Button>
      )}
      {show ? <Modal /> : ""}
    </div>
  );
};

export default memo(Header);
