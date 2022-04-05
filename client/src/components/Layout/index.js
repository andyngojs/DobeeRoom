import { memo, useCallback, useState } from "react";
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import AuthProvider from "../../Contexts/AuthProvider";

function Layout() {
  const [show, setShow] = useState(false);

  const handleModalMobile = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default memo(Layout);
