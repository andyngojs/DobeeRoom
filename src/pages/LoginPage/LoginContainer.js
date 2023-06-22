import clsx from "clsx";
import { Link } from 'react-router-dom';
import styles from "./Login.module.scss";
import SigninButton from "../../components/SigninButton";
import DobeeRoomLogo from "../../assets/images/dobeeroom.svg";

function LoginContainer() {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.header)}>
                    <img src={DobeeRoomLogo} alt={'Logo DobeeRoom'} className={clsx(styles.logo)} />
                    <h2 className={clsx(styles.title)} > Đăng nhập </h2>
                </div>
                <div className={clsx(styles.body)}>
                    <SigninButton name={'facebook'} />
                    <SigninButton name={'google'} />
                </div>
                <div className={clsx(styles.footer)} >
                    <span>Bạn chưa có tài khoản ? </span>
                    <Link to={'/register'} className={clsx(styles.switchMethod)}>Đăng Ký Ngay</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer