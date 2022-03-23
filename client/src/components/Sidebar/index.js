import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
    PlusOutlined,
    HomeOutlined,
    SearchOutlined,
    UserOutlined,
    ContainerOutlined
} from '@ant-design/icons'
import clsx from 'clsx';
import styles from './Sidebar.module.scss';

const Siderbar = () => {
    const [isActive, setIsActive] = useState(true);
    return (
        <div className={clsx(styles.wrapper)} >
            <Button
                type="primary"
                shape={'circle'}
                icon={<PlusOutlined />}
                size={'large'}
                className={clsx(styles.button)}
            />
            <ul className={clsx(styles.navbarList)}>
                <li className={clsx(styles.active)}>
                    <Link to={'/'}>
                        <HomeOutlined />
                        <span> Trang Chủ </span>
                    </Link>
                </li>
                <li className={clsx({ [styles.active]: isActive })} onClick={() => setIsActive(!isActive)} >
                    <Link to={'/search'}>
                        <SearchOutlined />
                        <span> Tìm Kiếm</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/user'}>
                        <UserOutlined />
                        <span> Cá Nhân </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        <ContainerOutlined />
                        <span> Giới Thiệu </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Siderbar;
