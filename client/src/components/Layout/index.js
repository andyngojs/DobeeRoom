import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import useAuthen from "../../hooks/useAuthen";
import Loading from "../Loading";
import { checkIsLogged } from "../../redux/selectors";
import { loggedIn } from "../../redux/actions";

function Layout() {
  const [show, setShow] = useState(false);
  const { isLoading } = useAuthen();
  const isLoggedIn = useSelector(checkIsLogged);
  const dispatch = useDispatch();

  const handleModalMobile = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.reload();
    }
    dispatch(loggedIn(false));
  }, [isLoggedIn]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header handleModalMobile={handleModalMobile} />
          <div className={clsx([styles.withSidebar])}>
            <div
              className={clsx([
                styles.sideBarWrapper,
                { [styles.showMasked]: show },
              ])}
            >
              <Siderbar show={show} />
            </div>
            <div className={clsx(styles.contentWrapper)}>
              <MainRouting />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
