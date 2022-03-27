import clsx from "clsx";
import styles from "./Home.module.scss";
import Slideshow from "../../components/Slideshow";
import RoomItem from "./components/RoomItem";

export default function HomePage() {
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
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
            <RoomItem />
          </div>
        </div>
      </div>
    </div>
  );
}
