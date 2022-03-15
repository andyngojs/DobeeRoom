import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userNameFBSelector } from '../../redux/selectors';

export default function HomePage() {
    const nameUserFB = useSelector(userNameFBSelector);

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>hello { nameUserFB }</div>
    );
};