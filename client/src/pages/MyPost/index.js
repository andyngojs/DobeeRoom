import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import styles from "./index.module.scss";
import PendingPost from "./components/PendingPost";
import PublicPost from "./components/PublicPost";
import { getPostPending } from "../../redux/actions";
import useAuthen from "../../hooks/useAuthen";
import { myPostPendingSelector, postPublicSelector } from "../../redux/selectors";

export default function MyPost() {
  const dispatch = useDispatch()
  const { data } = useAuthen()
  const [tabItem, setTabItem] = useState({
    tab: true,
    pendingPost: true,
    publicPost: false
  })
  const [myPostPublic, setMyPostPublic] = useState([])
  const myPostPending = useSelector(myPostPendingSelector)
  const postPublic = useSelector(postPublicSelector)

  const handleSwitchTab = useCallback(() => {
    setTabItem({
      tab: !tabItem.tab,
      pendingPost: !tabItem.pendingPost,
      publicPost: !tabItem.publicPost
    })
  }, [tabItem])

  useEffect(() => {
    document.title = 'Bài đăng của tôi | DobeeRoom'
  }, [])

  useEffect(() => {
    dispatch(getPostPending.getPostPendingRequest({ idUser: data._id }))
  }, [])

  useEffect(() => {
    console.log(postPublic)
    const myPost = postPublic.filter(post => post.created_byID === data._id)
    setMyPostPublic(myPost)
  }, [postPublic])

  return (
    <div className={clsx(styles.container)}>
      <div className={styles.containerTop}>
        <h2 className={clsx(styles.heading)}>Bài đăng của tôi</h2>
      </div>
      <div className={clsx(styles.tabWrapper)}>
        <div
          className={clsx(styles.headingTab, { [styles.active]: tabItem.pendingPost })}
          onClick={handleSwitchTab}
        >
          <h3 className={clsx(styles.headingTabName)}>Đang chờ ({ myPostPending.length }) </h3>
        </div>
        <div  className={clsx(styles.headingTab, { [styles.active]: tabItem.publicPost } )} onClick={handleSwitchTab} >
          <h3 className={clsx(styles.headingTabName)}>Công Khai ({ myPostPublic.length }) </h3>
        </div>
      </div>
      <div>{tabItem.tab ? <PendingPost myPostPending={myPostPending} /> : <PublicPost myPostPublic={myPostPublic} />}</div>
    </div>
  );
}
