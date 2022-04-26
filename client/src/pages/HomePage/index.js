import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { Skeleton } from "antd";
import styles from "./Home.module.scss";
import Slideshow from "../../components/Slideshow";
import RoomItem from "./components/RoomItem";
import { postPublicSelector } from "../../redux/selectors";
import { getPostAction } from "../../redux/actions";
import useAuthen from "../../hooks/useAuthen";

export default function HomePage() {
  const dispatch = useDispatch();
  const { data } = useAuthen();
  const postPublic = useSelector(postPublicSelector);

  useEffect(() => {
    dispatch(getPostAction.getPostRequest({ idUser: data && data._id }));
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "1920px" }}>
      <div className={clsx(styles.slideshow)}>
        <Slideshow />
      </div>
      <div className={clsx(styles.wrapper)}>
        <div>
          <h1 className={clsx(styles.heading)}>Thông tin phòng trọ</h1>
        </div>
        <div className={clsx(styles.scrollList, "grid")}>
          {data._id ? (
            <div className={clsx("row", "wide", styles.row)}>
              {postPublic.map((item, index) => (
                <RoomItem post={item} key={index} />
              ))}
            </div>
          ) : (
            <Skeleton active />
          )}
        </div>
      </div>
    </div>
  );
}
