import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./index.module.scss";
import '../../sass/index.scss'
import { getPostAction, getUserByIDAction } from "../../redux/actions";
import { getUserCurrSelector, postPublicSelector } from "../../redux/selectors";
import imgCover from "../../assets/images/imgCover.png";
import avatarImg from '../../assets/images/avatar.jpg'
import AboutBox from "./components/AboutBox";

export default function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [myPostPublic, setMyPostPublic] = useState([])
  const userCurr = useSelector(getUserCurrSelector);
  const postPublic = useSelector(postPublicSelector);

  useEffect(() => {
    dispatch(getUserByIDAction.getUserIDRequest({ idUser: id}));
  }, [id]);

  useEffect(() => {
    dispatch(getPostAction.getPostRequest({ idUser: id }))
  }, [id])

  useEffect(() => {
    const myPost = postPublic.filter(post => post.created_byID === id)
    setMyPostPublic(myPost)
  }, [postPublic])

  return (
    <div
      className={clsx(styles.grid, styles.wide)}
      style={{ maxWidth: "1100px" }}
    >
      <div
        style={{ backgroundImage: `url("${imgCover}")` }}
        className={clsx(styles.banner)}
      >
        <div className={clsx(styles.user)} >
            <div className={clsx(styles.userAvatar)}>
                <img alt={userCurr.name} src={avatarImg} className={clsx(styles.avatar)} />
            </div>
            <div className={clsx(styles.username)} >
                <span> { userCurr.name } </span>
            </div>
        </div>
      </div>
      <div className={clsx(styles.container)} >
        <div className={clsx('grid wide')} >
            <div className={clsx('row')}>
            <div className={clsx('col c-12 m-12 l-5')} >
                <AboutBox userCurr={userCurr} title={'Giới Thiệu'}  />
                <AboutBox userCurr={userCurr} title={'Hoạt động gần đây'} description={'Chưa có hoạt động gần đây'} />
            </div>
            <div className={clsx('col c-12 m-12 l-7')} >
                <AboutBox title={'Các bài đăng'} isPost={true} myPostPublic={myPostPublic} />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
