import clsx from "clsx";
import { Link } from 'react-router-dom';
import styles from "./Register.module.scss";
import SigninButton from "../../components/SigninButton";
import DobeeRoomLogo from "../../assets/images/dobeeroom.svg";

function RegisterContainer() {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.header)}>
                    <img src={DobeeRoomLogo} alt={'Logo DobeeRoom'} className={clsx(styles.logo)} />
                    <h2 className={clsx(styles.title)} > Đăng ký tài khoản </h2>
                </div>
                <div className={clsx(styles.body)}>
                    <SigninButton name={'facebook'} />
                    <SigninButton name={'google'} />
                </div>
                <div className={clsx(styles.footer)} >
                    <span>Bạn đã có tài khoản ? </span>
                    <Link to={'/login'} className={clsx(styles.switchMethod)}>Đăng Nhập</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer;