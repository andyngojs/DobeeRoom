import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import { Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import styles from "./NewPost.module.scss";
import clsx from "clsx";
import useLocationForm from "../../hooks/useLocationForm";
import { utilitiesData } from "../../constants/utilitiesForm";
import Validator from "../../utils/validator";
import useAuthen from "../../hooks/useAuthen";
import { createPostActions } from "../../redux/actions";
import { postState$ } from "../../redux/selectors";
import { createPost, uploadFileMultiple, uploadFileSingle } from "../../api";

function PostPage() {
  const dispatch = useDispatch();
  const { isSuccess, isError } = useSelector(postState$);
  const { data } = useAuthen();
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
      message: "❗Bạn chưa tải ảnh nổi bật.",
    },
  ];

  const validator = new Validator(rules);

  const { cityLabel, districtLabel, wardLabel } = locationValue;

  useEffect(() => {
    setState({
      ...state,
      addressHC: `${wardLabel}, ${districtLabel}, ${cityLabel}`,
    });
  }, [districtLabel, wardLabel, cityLabel]);

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

  const handleUploadThumbnail = useCallback(
    async (e) => {
      const file = e.target.files[0];
      const fd = new FormData();
      fd.append("file-single", file);
      await uploadFileSingle(fd).then((res) => {
        setState({
          ...state,
          thumbnailImg: res.data.data,
        });
      });
    },
    [state],
  );

  const handleUploadMulti = useCallback(
    async (e) => {
      const fd = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        fd.append("file-multiple", e.target.files[i]);
      }
      await uploadFileMultiple(fd).then((res) => {
        setState({
          ...state,
          detailImgs: res.data.data,
        });
      });
    },
    [state],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setErrors(validator.validate(state));
      dispatch(
        createPostActions.createPostRequest({
          title: state.title,
          type_room: state.roomType,
          address: state.addressHC,
          detail_address: state.address,
          price_room: state.roomPrice,
          price_electron: state.electronPrice,
          price_water: state.waterPrice,
          area_room: state.areaRoom,
          phone: state.phone,
          utils: state.utilities,
          thumbnail_img: state.thumbnailImg,
          detail_img: state.detailImgs,
          description: state.description,
          status: 0,
          created_by: data._id,
        }),
      );
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
    },
    [state],
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Đã đăng bài thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isSuccess]);

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        className={clsx(styles.postForm)}
        encType="multipart/form-data"
        autoComplete="false"
      >
        <input
          value={state.title}
          type={"text"}
          placeholder="Tiêu đề"
          className={clsx(styles.headingInput)}
          onChange={(e) =>
            setState({
              ...state,
              title: e.target.value,
            })
          }
          onBlur={() => setErrorTitle(validator.validate(state))}
        />
        {errorTitle.title && (
          <span className={clsx(styles.error)}>{errorTitle.title}</span>
        )}
        <PostForm value={values} />
        <Divider />
        <button
          type="submit"
          className={clsx(styles.btnSubmit)}
          onClick={handleSubmit}
        >
          Đăng Bài
        </button>
      </form>
    </div>
  );
}

export default memo(PostPage);
