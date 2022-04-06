import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostForm from "./components/PostForm";
import styles from "./NewPost.module.scss";
import FormProvider from "../../Contexts/FormProvider";

export default function PostPage() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (title.length > 1) {
      document.title = title;
    } else {
      document.title = "Đăng tin | DobeeRoom";
    }
  }, [title]);

  return (
    <FormProvider>
      <div className={styles.wrapper}>
        <form className={styles.postForm}>
          <input
            value={title}
            type={"text"}
            placeholder="Tiêu đề"
            className={styles.headingInput}
            onChange={(e) => handleChange(e)}
          />
          <PostForm />
        </form>
      </div>
    </FormProvider>
  );
}
