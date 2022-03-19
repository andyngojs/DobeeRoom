import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import clsx from "clsx";
import styles from './Register.module.scss'
import RegisterContainer from "./RegisterContainer";
import { get } from '../../utils/LocalStorage';

export default function RegisterPage() {
    const navigate = useNavigate();

    useEffect(() => {
            document.title = 'Đăng Ký Tài Khoản | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
            if (get()) {
                navigate('/');
            }
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