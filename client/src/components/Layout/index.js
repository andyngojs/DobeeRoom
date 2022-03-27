import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";

export default function Layout() {
  const [show, setShow] = useState(false);
  const [hiddenSideBar, setHiddenSideBar] = useState(false);
  const { pathname } = useLocation();

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

  return (
    <>
      <Header handleModalMobile={handleModalMobile} />
      <div className={clsx(styles.withSidebar)}>
        <div
          className={clsx(styles.sideBarWrapper, {
            [styles.hiddenSidebar]: hiddenSideBar,
          })}
        >
          <Siderbar />
        </div>
        <div className={clsx(styles.contentWrapper)}>
          <MainRouting />
        </div>
      </div>
      <Footer />
      {show ? (
        <div>
          <MobileMenu />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
