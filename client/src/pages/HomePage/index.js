import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../commons/components/Header';

export default function HomePage() {

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>
            <Header />
        </div>
    );
};