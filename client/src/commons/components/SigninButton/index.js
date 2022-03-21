import { memo, useEffect, useState } from 'react';
import clsx from "clsx";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import styles from './SigninButton.module.scss';
import { setUser, getUserCurrent } from '../../../redux/actions';
import { auth } from '../../../firebase/config';
import { get } from '../../../utils/LocalStorage';

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const SigninButton = ({ name }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(getUserCurrent({
                    name: user.displayName,
                    email: user.email,
                    accessToken: user.accessToken
                }));
                navigate('/');
            }
        })
    }, [navigate]);

    const handleLoginFacebook = async (auth, provider) => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                dispatch(setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    accessToken: credential.accessToken,
                    providerId: credential.providerId,
                }));
            }).catch(err => {
                console.log(`Code: ${err.code}, Message: ${err.message}`);
            });
    };

    const handleLoginGoogle = async (auth, provider) => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = GoogleAuthProvider.credentialFromResult(result);
                dispatch(setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    accessToken: credential.accessToken,
                    providerId: credential.providerId,
                }));
            }).catch(err => {
                console.log(`Code: ${err.code}, Message: ${err.message}`);
            });
    };

    return (
        <div>
            <div
                className={clsx(styles.container, { [styles.fbBtn]: name === 'facebook' })}
                onClick={() => handleLoginFacebook(auth, fbProvider)}
            >
                <FacebookFilled className={clsx(styles.icon)} />
                <span className={clsx(styles.title)}>Tiếp tục với Facebook</span>
            </div>
            <div
                className={clsx(styles.container, { [styles.ggBtn]: name === 'google' } )}
                onClick={() => handleLoginGoogle(auth, ggProvider)}
            >
                <GoogleCircleFilled className={clsx(styles.icon)} />
                <span className={clsx(styles.title)}>Tiếp tục với Google</span>
            </div>
        </div>

    )
}

export default memo(SigninButton);