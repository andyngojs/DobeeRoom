import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostForm from "./components/PostForm";
import { Divider } from "antd";
import styles from "./NewPost.module.scss";
import clsx from "clsx";
import useLocationForm from "../../hooks/useLocationForm";
import { utilitiesData } from "../../constants/utilitiesForm";

export default function PostPage() {
  const { locationValue, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [state, setState] = useState({
    title: "",
    roomPrice: "",
    electronPrice: "",
    waterPrice: "",
    areaRoom: "",
    phone: "",
    roomType: "",
    address: "",
    addressHC: "",
    description: "",
    utilities: [],
    thumbnailImg: "",
    detailImgs: [],
  });
  const regexNumber = /^-?\d*(\.\d*)?$/;

  const { cityLabel, districtLabel, wardLabel } = locationValue;

  useEffect(() => {
    setState({
      ...state,
      addressHC: `${wardLabel} ${districtLabel} ${cityLabel}`,
    });
  }, [districtLabel, wardLabel]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  useEffect(() => {
    if (state.title.length > 1) {
      document.title = state.title;
    } else {
      document.title = "Đăng tin | DobeeRoom";
    }
  }, [state.title]);

  const handleTypeRoom = (e) => {
    setState({
      ...state,
      roomType: e.value,
    });
  };

  const handleAddressChange = (e) => {
    setState({
      ...state,
      address: e.target.value,
    });
  };

  const handleRoomPrice = (e) => {
    if (
      (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
      e.target.value === "" ||
      e.target.value === "-"
    ) {
      setState({
        ...state,
        roomPrice: e.target.value,
      });
    }
  };

  const handleElectronPrice = (e) => {
    if (
      (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
      e.target.value === "" ||
      e.target.value === "-"
    ) {
      setState({
        ...state,
        electronPrice: e.target.value,
      });
    }
  };

  const handleWaterPrice = (e) => {
    if (
      (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
      e.target.value === "" ||
      e.target.value === "-"
    ) {
      setState({
        ...state,
        waterPrice: e.target.value,
      });
    }
  };

  const handlePhoneChange = (e) => {
    if (
      (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
      e.target.value === "" ||
      e.target.value === "-"
    ) {
      setState({
        ...state,
        phone: e.target.value,
      });
    }
  };

  const handleAreaRoom = (e) => {
    if (
      (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
      e.target.value === "" ||
      e.target.value === "-"
    ) {
      setState({
        ...state,
        areaRoom: e.target.value,
      });
    }
  };

  const handleDescriptionChange = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      description: e.target.value,
    });
  };

  const handleAllCheck = (e) => {
    setIsCheckAll(e.target.checked);
    setState({
      ...state,
      utilities: e.target.checked ? utilitiesData : [],
    });
  };

  const handleCheckUtil = (e) => {
    setState({
      ...state,
      utilities: e,
    });
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleUploadThumbnail = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setState({
      ...state,
      thumbnailImg: url,
    });
  };

  const handleUploadMulti = (e) => {
    const files = [...e.target.files];
    const newImgs = files.map((item, index) => {
      const url = URL.createObjectURL(item);
      return { thumbnailUrl: url };
    });
    setState({
      ...state,
      detailImgs: newImgs,
    });
  };

  const values = {
    state,
    handleRoomPrice,
    handleAreaRoom,
    handleElectronPrice,
    handlePhoneChange,
    handleWaterPrice,
    locationValue,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    handleTypeRoom,
    handleAddressChange,
    handleDescriptionChange,
    handleCheckUtil,
    handleAllCheck,
    isCheckAll,
    handleUploadThumbnail,
    handleUploadMulti,
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <form className={clsx(styles.postForm)}>
        <input
          value={state.title}
          type={"text"}
          placeholder="Tiêu đề"
          className={clsx(styles.headingInput)}
          onChange={(e) => handleChange(e)}
        />
        <PostForm value={values} />
        <Divider />
        <button type="submit" className={clsx(styles.btnSubmit)}>
          Đăng Bài
        </button>
      </form>
    </div>
  );
}
