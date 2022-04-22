import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch  } from 'react-redux'
import clsx from "clsx";
import styles from "./Main.module.scss";
import Header from "../Header";
import Siderbar from "../Sidebar";
import MainRouting from "./Main.routing";
import Footer from "../Footer";
import useAuthen from "../../hooks/useAuthen";
import Loading from "../Loading";
import { getPostAction } from '../../redux/actions'

function Layout() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const { isLoading } = useAuthen();

  const handleModalMobile = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    dispatch(getPostAction.getPostRequest())
  }, [])

  if (isLoading) {
    return <Loading />;
  }

  return (
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
  );
}

export default memo(Layout);
