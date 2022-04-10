import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostForm from "./components/PostForm";
import { Divider } from "antd";
import styles from "./NewPost.module.scss";
import clsx from "clsx";
import useLocationForm from "../../hooks/useLocationForm";
import { utilitiesData } from "../../constants/utilitiesForm";
import Validator from "../../utils/validator";

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
  const [errors, setErrors] = useState({});
  const regexNumber = /^-?\d*(\.\d*)?$/;

  const rules = [
    {
      field: "title",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập tiêu đề.",
    },
    {
      field: "roomType",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa chọn loại phòng trọ.",
    },
    {
      field: "address",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập địa chỉ phòng trọ.",
    },
    {
      field: "addressHC",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập địa chỉ phòng trọ.",
    },
    {
      field: "roomPrice",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập giá phòng trọ.",
    },
    {
      field: "electronPrice",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập giá tiền điện.",
    },
    {
      field: "waterPrice",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập giá tiền nước.",
    },
    {
      field: "areaRoom",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập diện tích phòng.",
    },
    {
      field: "phone",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập số điện thoại chủ phòng trọ.",
    },
    {
      field: "description",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa nhập mô tả chi tiết về phòng trọ.",
    },
    {
      field: "thumbnailImg",
      method: "isEmpty",
      validWhen: false,
      message: "❗Bạn chưa chọn ảnh nổi bật về phòng trọ.",
    },
  ];

  const validator = new Validator(rules);

  const { cityLabel, districtLabel, wardLabel } = locationValue;

  useEffect(() => {
    setState({
      ...state,
      addressHC: `${wardLabel} ${districtLabel} ${cityLabel}`,
    });
  }, [districtLabel, wardLabel]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validator.validate(state));
    console.log(state);
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
    errors,
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <form className={clsx(styles.postForm)} onSubmit={handleSubmit}>
        <input
          value={state.title}
          type={"text"}
          placeholder="Tiêu đề"
          className={clsx(styles.headingInput)}
          onChange={(e) => handleChange(e)}
        />
        {errors.title && (
          <span className={clsx(styles.error)}>{errors.title}</span>
        )}
        <PostForm value={values} />
        <Divider />
        <button type="submit" className={clsx(styles.btnSubmit)}>
          Đăng Bài
        </button>
      </form>
    </div>
  );
}
