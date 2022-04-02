import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";

export default function Layout() {
  const { pathname } = useLocation();
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

  return (
    <>
      <Header handleModalMobile={handleModalMobile} />
      <div
        className={clsx([
          styles.withSidebar,
          { [styles.hiddenSideBar]: hiddenSideBar },
        ])}
      >
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
  );
}
