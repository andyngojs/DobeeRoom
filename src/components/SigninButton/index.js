import { memo, useEffect } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import styles from "./SigninButton.module.scss";
import { auth } from "../../firebase/config";
import { createUser } from "../../api";
import { authAction, loggedIn } from "../../redux/actions";
import { checkIsLogged } from "../../redux/selectors";

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const SigninButton = ({ name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(checkIsLogged)

  const handleLoginFacebook = async (auth, provider) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        dispatch(authAction.authRequest(
          {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
            accessToken: credential.accessToken,
            providerId: credential.providerId,
          }
        ))
        createUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          accessToken: credential.accessToken,
          providerId: credential.providerId,
        }).then((res) => {
          if (res.status === 200) {
            dispatch(loggedIn(true))
          }
        });
      })
      .catch((err) => {
        console.log(`Code: ${err.code}, Message: ${err.message}`);
      });
  };

  const handleLoginGoogle = async (auth, provider) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        dispatch(authAction.authRequest(
          {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
            accessToken: credential.accessToken,
            providerId: credential.providerId,
          }
        ))
        createUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          accessToken: credential.accessToken,
          providerId: credential.providerId,
        }).then((res) => {
          if (res.status === 200) {
            dispatch(loggedIn(true))
          }
        });
      })
      .catch((err) => {
        console.log(`Code: ${err.code}, Message: ${err.message}`);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])

  return (
    <div>
      <div
        className={clsx(styles.container, {
          [styles.fbBtn]: name === "facebook",
        })}
        onClick={() => handleLoginFacebook(auth, fbProvider)}
      >
        <FacebookFilled className={clsx(styles.icon)} />
        <span className={clsx(styles.title)}>Tiếp tục với Facebook</span>
      </div>
      <div
        className={clsx(styles.container, {
          [styles.ggBtn]: name === "google",
        })}
        onClick={() => handleLoginGoogle(auth, ggProvider)}
      >
        <GoogleCircleFilled className={clsx(styles.icon)} />
        <span className={clsx(styles.title)}>Tiếp tục với Google</span>
      </div> 
    </div>
  );
};

export default memo(SigninButton);
