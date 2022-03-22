import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout  } from 'antd';

import Header from '../../components/Header';

const { Sider, Content } = Layout;

export default function HomePage() {

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <>
            <p>Homepage!</p>
        </>
    );
};