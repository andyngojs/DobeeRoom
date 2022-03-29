import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";
import {
  activeHomeTab,
  activeSearchTab,
  activeUserTab,
  activeAboutTab,
} from "../../redux/actions";

export default function Layout() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [hiddenSideBar, setHiddenSideBar] = useState(false);

  const handleModalMobile = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    if (pathname === "/new-post") {
      setHiddenSideBar(true);
    }
    return () => {
      setHiddenSideBar(false);
    };
  }, [pathname]);

  const handleSelectedTab = useMemo(() => {
    switch (pathname) {
      case "/":
        dispatch(activeHomeTab);
        break;
      case "/search":
        dispatch(activeSearchTab);
        break;
      case "/user":
        dispatch(activeUserTab);
        break;
      case "/about":
        dispatch(activeAboutTab);
        break;
      default:
        dispatch(activeHomeTab);
    }
  }, [pathname, dispatch]);

  return (
    <>
      <Header handleModalMobile={handleModalMobile} />
      <div className={clsx(styles.withSidebar)}>
        <div
          className={clsx(styles.sideBarWrapper, {
            [styles.hiddenSidebar]: hiddenSideBar,
          })}
        >
          <Siderbar handleSelectedTab={handleSelectedTab} />
        </div>
        <div className={clsx(styles.contentWrapper)}>
          <MainRouting />
        </div>
      </div>
      <Footer />
      {show ? (
        <div>
          <MobileMenu handleSelectedTab={handleSelectedTab} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
