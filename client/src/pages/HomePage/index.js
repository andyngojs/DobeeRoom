import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../../redux/selectors';
import { getUser } from '../../api';
import { get } from '../../utils/LocalStorage';

export default function HomePage() {
    const [users, setUsers ] = useState([])
    const nameUser = useSelector(userNameSelector);
    const userLocal = get('INFOR');

    useEffect(() => {
        getUser().then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.log('Message Error: ', err);
        });
    }, []);

    useEffect(() => {
        document.title = 'Trang Chủ | DobeeRoom - Hỗ trợ sinh viên tìm nhà trọ';
    }, []);

    return (
        <div>{
            users.map((user) => {
                if (user.id === userLocal.id) {
                    return `Hello ${user.name}`
                } else {
                    return `Hello ${nameUser}`
                }
            })
        }</div>
    );
};