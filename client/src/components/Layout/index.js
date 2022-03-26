import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={clsx(styles.withSidebar)}>
        <div className={clsx(styles.sideBarWrapper)}>
          <Siderbar />
        </div>
        <div className={clsx(styles.contentWrapper)}>
          <MainRouting />
        </div>
      </div>
      <Footer />
    </>
  );
}
