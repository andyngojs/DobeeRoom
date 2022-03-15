import { memo, useEffect, useCallback } from 'react';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import styles from './SigninButton.module.scss';
import { setUserFB } from '../../../redux/actions';
import { auth } from '../../../firebase/config';

const fbProvider = new FacebookAuthProvider();

const SigninButton = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (auth, provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                dispatch(setUserFB({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    accessToken: accessToken
                }));
                navigate('/');
            }).catch(err => {
            console.log(err.code, err.message);
        });
    };

    return (
        <div>
            <div
                className={clsx(styles.container, { [styles.fbBtn]: name === 'facebook' })}
                onClick={() => handleLogin(auth, fbProvider)}
            >
                <FacebookFilled className={clsx(styles.icon)} />
                <span className={clsx(styles.title)}>Tiếp tục với Facebook</span>
            </div>
            <div className={clsx(styles.container, { [styles.ggBtn]: name === 'google' } )}>
                <GoogleCircleFilled className={clsx(styles.icon)} />
                <span className={clsx(styles.title)}>Tiếp tục với Google</span>
            </div>
        </div>

    )
}

export default memo(SigninButton);