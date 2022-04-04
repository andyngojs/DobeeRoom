import { useState, useCallback, memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { Avatar, Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import clsx from "clsx";
import styles from "./Header.module.scss";
import logoFull from "../../assets/images/dobeeroom.svg";
import { accessTokenSelector, userInforSelector } from "../../redux/selectors";
import Modal from "./Modal";
import { AuthContext } from "../../Contexts/AuthProvider";

const { Text } = Typography;

const Header = ({ handleModalMobile }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const accessToken = useSelector(accessTokenSelector);
  const userInfo = useSelector(userInforSelector);
  const userCurrentInfo = useContext(AuthContext);

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
      {!!userCurrentInfo.accessToken ? (
        <div className={clsx(styles.action)} onClick={toggleModal}>
          <Avatar
            className={clsx(styles.imgAvatar)}
            shape={"circle"}
            gap={2}
            size={"medium"}
          >
            {userCurrentInfo.name.charAt(0)}
          </Avatar>
          <Text className={clsx(styles.nameUser)}>{userCurrentInfo.name}</Text>
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
