import { useEffect } from 'react';

export default function HomePage() {

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>hello HomePage!</div>
    );
};