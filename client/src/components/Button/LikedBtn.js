import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from "clsx";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styles from './LikedBtn.module.scss'
import useAuthen from '../../hooks/useAuthen';
import { savePostAction } from '../../redux/actions';

export default function LikedBtn({ post }) {
  const dispatch = useDispatch();
  const { data } = useAuthen();
  const [isSavedItem, setIsSavedItem] = useState(false)

  const handleSavePost = () => {
    dispatch(
      savePostAction.savePostRequest({ id_user: data._id, id_post: post._id }),
    );
    setIsSavedItem(true)
  }

  return (
    <>
      {post.isSaved || isSavedItem ? (
      <div className={clsx(styles.action, styles.isSaved)}>
        <HeartFilled />
      </div>
    ) : (
      <div
        className={clsx(styles.action)}
        onClick={handleSavePost}
        alt="Lưu bài viết"
      >
        <HeartOutlined />
      </div>
    )}
    </>
  )
}

