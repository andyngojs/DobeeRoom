import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import clsx from "clsx";
import { DeleteFilled } from "@ant-design/icons";
import styles from "./index.module.scss";

export default function PostItem({ post, savedList, handleDelete }) {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={styles.heading} >
        <h3>
          {
            post.status === 1 ? 
              <Link to={`/detail/${post._id}`}>{post.title} </Link>
            : post.title
          }
        </h3>
        <span 
        className={clsx([styles.iconAction, { [styles.show]: savedList }])} 
        onClick={ () => handleDelete(post) }  >
          <DeleteFilled />
        </span>
      </div>
      <div>
        <p className={styles.description}> {post.description} </p>
        <p className={styles.timeline}>
          <span>
            Ngày Đăng: {moment(post.createdAt).startOf("hour").fromNow()}
          </span>
        </p>
      </div>
    </div>
  );
}
