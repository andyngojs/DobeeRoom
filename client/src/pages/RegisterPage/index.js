import { useEffect } from "react";
import clsx from "clsx";
import styles from './Register.module.scss'
import RegisterContainer from "./RegisterContainer";

export default function RegisterPage() {

    useEffect(() => {
            document.title = 'Đăng Ký Tài Khoản | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
            return () => {
                document.title = 'DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
            }
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <RegisterContainer />
            <div className={clsx(styles.lisence)}>
                <span>© 2022, Copyright by AndyngoJs</span>
            </div>
        </div>
    )
}