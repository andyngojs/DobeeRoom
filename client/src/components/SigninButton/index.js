import { memo } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import styles from "./SigninButton.module.scss";
import { auth } from "../../firebase/config";
import { createUser } from "../../api";

const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

const SigninButton = ({ name }) => {
  const navigate = useNavigate();

  const handleLoginFacebook = async (auth, provider) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        createUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          accessToken: credential.accessToken,
          providerId: credential.providerId,
        }).then((res) => {
          if (res.status === 200) {
            console.log("Login Success!");
            navigate("/");
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
        createUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          accessToken: credential.accessToken,
          providerId: credential.providerId,
        }).then((res) => {
          if (res.status === 200) {
            console.log("Login Success!");
            navigate("/");
          }
        });
      })
      .catch((err) => {
        console.log(`Code: ${err.code}, Message: ${err.message}`);
      });
  };

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
