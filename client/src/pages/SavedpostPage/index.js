import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from './index.module.scss';
import PostItem from "../../components/PostItem";
import { deleteSavedPostAction, getSavedListAction } from "../../redux/actions";
import useAuthen from "../../hooks/useAuthen";
import { getSavedPostSelector } from "../../redux/selectors";

export default function SavedpostPage() {
  const dispatch = useDispatch()
  const { data } = useAuthen()
  const savedPosts = useSelector(getSavedPostSelector)

  useEffect(() => {
    document.title = 'Bài viết đã lưu | DobeeRoom'
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  useEffect(() => {
    dispatch(getSavedListAction.getSavedListRequest({ idUser: data._id }))
  }, [dispatch])

  const handleDelete = useCallback((post) => {
    dispatch(deleteSavedPostAction.deleteSavedPostRequest({ id_user: data._id, id_post: post._id }))
  }, [])

  return (
    <div className={clsx(styles.container)} >.
      <div className={styles.containerTop} >
        <h1 className={clsx(styles.heading)} >Bài đăng đã lưu</h1>
      </div>
      <div>
        <div className={styles.headingTab} >
          <h3 className={styles.headingTabName} >Bài đăng ({ savedPosts.length }) </h3>
        </div>
        {
          savedPosts ?
          savedPosts.map((post, index) => (
              <PostItem key={index} post={post} savedList={true} handleDelete={handleDelete} />
            ))
            : 
            <div className={clsx(styles.NoResultMessage)} >
                <p>Bạn chưa lưu bài viết nào.</p>
            </div>
        }
      </div>
    </div>
  )
}
