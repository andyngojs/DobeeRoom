import {Link} from "react-router-dom";
import clsx from "clsx";
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import styles from './SigninButton.module.scss';


const SigninButton = ({ name, type, path }) => {
    return (
        <Link to={path} className={clsx(styles.container, {
            [styles.fbBtn]: type === 'facebook',
            [styles.ggBtn]: type === 'google'
        })}>
            {
                type === 'facebook'
                ? <FacebookFilled className={clsx(styles.icon)} />
                : <GoogleCircleFilled className={clsx(styles.icon)} />
            }
            <span className={clsx(styles.title)}>{ name }</span>
        </Link>
    )
}

export default SigninButton