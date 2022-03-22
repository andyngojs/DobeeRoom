import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined, HomeFilled } from '@ant-design/icons'
import clsx from 'clsx';
import styles from './Sidebar.module.scss';

const Siderbar = () => {
    return (
        <div className={clsx(styles.wrapper)} >
            <Button type="primary" shape={'circle'} icon={<PlusOutlined />} size={'large'} />
            <ul>
                <li>
                    <Link to={'/'}>
                        <HomeFilled />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Siderbar;
