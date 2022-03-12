import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from './Login.module.scss'
import LoginContainer from "./LoginContainer";

export default function LoginPage() {
    const [type, setType] = useState(true);

    useEffect(() => {
        if (type) {
            document.title = 'Đăng Nhập Vào DobeeRoom | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
        } else {
            document.title = 'Đăng Ký Tài Khoản | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
        }
    }, [type]);

    const handleSwitch = () => {
        setType(!type);
    }

    return (
        <div className={clsx(styles.wrapper)}>
            <LoginContainer handleSwitch={handleSwitch} type={type} />
            <div className={clsx(styles.lisence)}>
                <span>© 2022, Copyright by DOBEETEAM</span>
            </div>
        </div>
    )
}