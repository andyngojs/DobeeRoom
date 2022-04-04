import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Typography, Divider } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { clearLocal } from "../../utils/LocalStorage";
import styles from "./Header.module.scss";

const { Text } = Typography;

const Modal = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      clearLocal();
      navigate("/login");
    });
  };

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
          <Link to={"/me/bookmarks/post"}>Bài viết đã lưu của tôi</Link>
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
