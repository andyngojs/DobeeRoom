import { useCallback } from 'react'
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Typography, Divider } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { clearLocal } from "../../utils/LocalStorage";
import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions";

const { Text } = Typography;

const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogOut = useCallback(() => {
    signOut(auth).then(() => {
      clearLocal();
      dispatch(logOutAction)
      navigate("/login");
    });
  }, [])

  return (
    <div className={clsx(styles.modalWrapper)}>
      <ul>
        <li>
          <Link to={"/new-post"}>Viết bài đăng</Link>
        </li>
        <li>
          <Link to={"/me/posts"}>Bài đăng của tôi</Link>
        </li>
        <li>
          <Link to={"/me/bookmark/posts"}>Bài viết đã lưu</Link>
        </li>
        <Divider type={"horizontal"} style={{ margin: 6 }} />
        <div className={clsx(styles.btnHanle)} onClick={() => handleLogOut()}>
          <Text>Đăng xuất</Text>
        </div>
      </ul>
    </div>
  );
};

export default Modal;
