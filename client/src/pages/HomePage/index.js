import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../../redux/selectors';
import { get } from '../../utils/LocalStorage';

export default function HomePage() {
    const nameUser = useSelector(userNameSelector);

    console.log(get())

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>hello { nameUser }</div>
    );
};