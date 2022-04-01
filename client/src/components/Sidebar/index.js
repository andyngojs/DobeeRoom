import { memo, useState, useCallback } from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";
import sidebarNav from "../../constants/sidebarNav";
import TabItem from "./TabItem";

const Siderbar = ({ show }) => {
  const [indexActive, setIndexActive] = useState(0);

  const handleSelected = useCallback((index, item) => {
    document.title = `${item.section} | DobeeRoom`;
    setIndexActive(index);
  }, []);

  return (
    <div className={clsx([styles.wrapper, { [styles.show]: show }])}>
      <ul className={clsx(styles.navbarList)}>
        {sidebarNav.map((item, index) => (
          <TabItem
            key={index}
            item={item}
            active={indexActive === index}
            index={index}
            handleSelected={() => handleSelected(index, item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(Siderbar);
