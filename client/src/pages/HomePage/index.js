import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { userInforSelector } from '../../redux/selectors';
import { getUser } from '../../api';
import { get, remove } from '../../utils/LocalStorage';
import { auth } from '../../firebase/config';

export default function HomePage() {
    const navigate = useNavigate();
    const userInfo = useSelector(userInforSelector);
    const userInfoLocal = get('INFOR');

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            remove('INFOR');
            navigate('/login')
        })
    }

    return (
        <div>
            <h1>Hello { userInfo.name || userInfoLocal.name }</h1>
            <button onClick={() => handleLogOut() } >Sign Out</button>
        </div>
    );
};