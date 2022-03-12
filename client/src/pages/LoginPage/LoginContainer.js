import clsx from "clsx";
import styles from "./Login.module.scss";
import SigninButton from "../../commons/components/SigninButton";
import DobeeRoomLogo from "../../assets/images/dobeeroom.svg";

function LoginContainer({ handleSwitch, type }) {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.header)}>
                    <img src={DobeeRoomLogo} alt={'Logo DobeeRoom'} className={clsx(styles.logo)} />
                    <h2 className={clsx(styles.title)} >
                        { type ? 'Đăng nhập' : 'Đăng ký tài khoản' }
                    </h2>
                </div>
                <div className={clsx(styles.body)}>
                    <SigninButton path={'/'} type={'facebook'} name={'Tiếp tục với Facebook'} />
                    <SigninButton path={'/'} type={'google'} name={'Tiếp tục với Google'} />
                </div>
                <div className={clsx(styles.footer)} >
                    <span>Bạn { type ? 'chưa' : 'đã' } có tài khoản ? </span>
                    <span
                        className={clsx(styles.switchMethod)}
                        onClick={handleSwitch}
                    >{ type ? 'Đăng Ký Ngay' : 'Đăng Nhập' }</span>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer