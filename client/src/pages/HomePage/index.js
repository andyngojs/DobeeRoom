import { useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./Home.module.scss";
import Slideshow from "../../components/Slideshow";
import RoomItem from "./components/RoomItem";
import { postPublicSelector } from "../../redux/selectors";

export default function HomePage() {
  const postPublic = useSelector(postPublicSelector)

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
          <div className={clsx("row", "wide", styles.row)}>
            {postPublic.map((item, index) => (
              <RoomItem post={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
