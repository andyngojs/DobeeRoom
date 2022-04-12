import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  const [errorTitle, setErrorTitle] = useState({});

  const regexNumber = useMemo(() => {
    return /^-?\d*(\.\d*)?$/;
  }, []);

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

  const handleChange = useCallback(
    (e) => {
      setState({
        ...state,
        title: e.target.value,
      });
    },
    [state],
  );

  useEffect(() => {
    if (state.title.length > 1) {
      document.title = state.title;
    } else {
      document.title = "Đăng tin | DobeeRoom";
    }
  }, [state.title]);

  const handleTypeRoom = useCallback(
    (e) => {
      setState({
        ...state,
        roomType: e.value,
      });
    },
    [state],
  );

  const handleAddressChange = useCallback(
    (e) => {
      setState({
        ...state,
        address: e.target.value,
      });
    },
    [state],
  );

  const handleRoomPrice = useCallback(
    (e) => {
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
    },
    [state, regexNumber],
  );

  const handleElectronPrice = useCallback(
    (e) => {
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
    },
    [state, regexNumber],
  );

  const handleWaterPrice = useCallback(
    (e) => {
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
    },
    [state, regexNumber],
  );

  const handlePhoneChange = useCallback(
    (e) => {
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
    },
    [state, regexNumber],
  );

  const handleAreaRoom = useCallback(
    (e) => {
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
    },
    [state, regexNumber],
  );

  const handleDescriptionChange = useCallback(
    (e) => {
      setState({
        ...state,
        description: e.target.value,
      });
    },
    [state],
  );

  const handleAllCheck = useCallback(
    (e) => {
      setIsCheckAll(e.target.checked);
      setState({
        ...state,
        utilities: e.target.checked ? utilitiesData : [],
      });
    },
    [state],
  );

  const handleCheckUtil = useCallback(
    (e) => {
      setState({
        ...state,
        utilities: e,
      });
    },
    [state],
  );

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleUploadThumbnail = useCallback(
    (e) => {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setState({
        ...state,
        thumbnailImg: url,
      });
    },
    [state],
  );

  const handleUploadMulti = useCallback(
    (e) => {
      const files = [...e.target.files];
      const newImgs = files.map((item, index) => {
        const url = URL.createObjectURL(item);
        return { thumbnailUrl: url };
      });
      setState({
        ...state,
        detailImgs: newImgs,
      });
    },
    [state],
  );

  const blurValid = useCallback(() => {
    setErrorTitle(validator.validate(state));
  }, [state, validator]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validator.validate(state));
    setErrorTitle(validator.validate(state));
    setState({
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
          onChange={handleChange}
          onBlur={blurValid}
        />
        {errorTitle.title && (
          <span className={clsx(styles.error)}>{errorTitle.title}</span>
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
