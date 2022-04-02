import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";

function TabItem({ item, index, active, handleSelected }) {
  return (
    <li
      key={index}
      className={clsx({ [styles.active]: active })}
      onClick={() => handleSelected(index, item)}
    >
      <Link to={item.link} className={clsx(styles.tabItemMobile)}>
        {item.icon}
        <span> {item.title}</span>
      </Link>
    </li>
  );
}

export default TabItem;
