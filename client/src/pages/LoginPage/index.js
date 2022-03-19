import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import clsx from "clsx";
import styles from './Login.module.scss'
import LoginContainer from "./LoginContainer";
// import { get } from '../../utils/LocalStorage';

export default function LoginPage() {

    useEffect(() => {
            document.title = 'Đăng Nhập | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
            return () => {
                document.title = 'DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
            }
    }, []);

    return (
            <div className={clsx(styles.wrapper)}>
                <LoginContainer />
                <div className={clsx(styles.lisence)}>
                    <span>© 2022, Copyright by AndyngoJs</span>
                </div>
            </div>
    )
}