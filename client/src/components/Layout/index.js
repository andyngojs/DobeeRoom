import { useCallback, useState } from "react";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";

export default function Layout() {
  const [show, setShow] = useState(false);

  const handleModalMobile = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      <Header handleModalMobile={handleModalMobile} />
      <div className={clsx(styles.withSidebar)}>
        <div className={clsx(styles.sideBarWrapper)}>
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
