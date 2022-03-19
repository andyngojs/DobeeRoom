import { memo } from 'react';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import styles from './SigninButton.module.scss';
import { setUser } from '../../../redux/actions';
import { auth } from '../../../firebase/config';
import { getUser, createUser } from '../../../api';
import { get, set } from '../../../utils/LocalStorage';

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const SigninButton = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (auth, provider) => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = provider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const accessLocal = get();
                dispatch(setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    accessToken: accessToken,
                }));
                    createUser({
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        phone: user.phoneNumber,
                        accessToken: accessToken,
                    });
                    navigate('/');
                    set(accessToken);
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
            <div
                className={clsx(styles.container, { [styles.ggBtn]: name === 'google' } )}
                onClick={() => handleLogin(auth, ggProvider)}
            >
                <GoogleCircleFilled className={clsx(styles.icon)} />
                <span className={clsx(styles.title)}>Tiếp tục với Google</span>
            </div>
        </div>

    )
}

export default memo(SigninButton);