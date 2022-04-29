import { memo, useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";
import sidebarNav from "../../constants/sidebarNav";
import TabItem from "./TabItem";
import { set, get } from "../../utils/LocalStorage";
import useAuthen from "../../hooks/useAuthen";

const Siderbar = ({ show }) => {
  const [indexActive, setIndexActive] = useState(
    !!get("indexActive") ? Number(get("indexActive")) : 0,
  );
  const { data } = useAuthen()
 
  useEffect(() => {
    set("indexActive", indexActive);
  }, [indexActive]);

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
            idUser={data._id}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(Siderbar);
