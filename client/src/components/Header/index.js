import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import clsx from "clsx";
import styles from "./Header.module.scss";
import logoFull from "../../assets/images/dobeeroom.svg";
import Modal from "./Modal";
import useAuthen from "../../hooks/useAuthen";

const { Text } = Typography;

const Header = ({ handleModalMobile }) => {
  const { data } = useAuthen();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector(state => state.user)

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
        <MenuOutlined />
      </div>
      {data && data?.accessToken ? (
        <div className={clsx(styles.action)} onClick={toggleModal}>
          <Avatar
            className={clsx(styles.imgAvatar)}
            shape={"circle"}
            gap={2}
            size={"medium"}
          >
            {  userData.name ? userData.name.charAt(0) : data.name.charAt(0)}
          </Avatar>
          <Text className={clsx(styles.nameUser)}>{ userData.name ? userData.name : data.name}</Text>
        </div>
      ) : (
        <Button
          type="primary"
          shape="round"
          size={"large"}
          onClick={handleLogin}
        >
          Đăng Nhập
        </Button>
      )}
      {show ? <Modal /> : ""}
    </div>
  );
};

export default Header;
