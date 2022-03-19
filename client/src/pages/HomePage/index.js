import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../../redux/selectors';

export default function HomePage() {
    const nameUser = useSelector(userNameSelector);

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>hello { nameUser }</div>
    );
};