import clsx from "clsx";
import styles from "./Home.module.scss";
import Slideshow from "../../components/Slideshow";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1920px" }}>
      <div className={clsx(styles.slideshow)}>
        <Slideshow />
      </div>
      <div className={clsx(styles.wrapper)}>Home content</div>
    </div>
  );
}
