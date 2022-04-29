import React, { useCallback, useEffect, useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import { Divider } from "antd";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import styles from "./NewPost.module.scss";
import clsx from "clsx";
import useLocationForm from "../../hooks/useLocationForm";
import { utilitiesData } from "../../constants/utilitiesForm";
import useAuthen from "../../hooks/useAuthen";
import { createPostActions } from "../../redux/actions";
import { uploadFileMultiple, uploadFileSingle } from "../../api";

function PostPage() {
  const dispatch = useDispatch();
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
    description: "",
    utilities: [],
    thumbnailImg: "",
    detailImgs: [],
    cityName: '',
    districtName: '',
    wardName: ''
  });
  const [isPosted, setIsPosted] = useState(false);

  const regexNumber = useMemo(() => {
    return /^-?\d*(\.\d*)?$/;
  }, []);

  useEffect(() => {
    if (state.title.length > 1) {
      document.title = state.title;
    } else {
      document.title = "Đăng tin | DobeeRoom";
    }
  }, [state]);

  const handleTitleChange = useCallback((e) =>
    setState((prevState) => ({
      ...prevState,
      title: e.target.value,
    })), [])

  const handleTypeRoom = useCallback(
    (e) => {
      setState((prevState) => ({
        ...prevState,
        roomType: e.value,
      }));
    },
    [],
  );

  const handleAddressChange = useCallback(
    (e) => {
      setState((prevState) => ({
        ...prevState,
        address: e.target.value,
      }));
    },
    [],
  );

  const handleCityChange = useCallback((option) => {
    onCitySelect(option)
    setState((prevState) => ({
      ...prevState,
      cityName: option.label
    }))
  }, [])

  const handleDistrictChange = useCallback((option) => {
    onDistrictSelect(option)
    setState((prevState) => ({
      ...prevState,
      districtName: option.label
    }))
  }, [])

  const handleWardChange = useCallback((option) => {
    onWardSelect(option)
    setState((prevState) => ({
      ...prevState,
      wardName: option.label
    }))
  }, [])

  const handleRoomPrice = useCallback(
    (e) => {
      if (
        (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
        e.target.value === "" ||
        e.target.value === "-"
      ) {
        setState((prevState) => ({
          ...prevState,
          roomPrice: e.target.value,
        }));
      }
    },
    [],
  );

  const handleElectronPrice = useCallback(
    (e) => {
      if (
        (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
        e.target.value === "" ||
        e.target.value === "-"
      ) {
        setState((prevState) => ({
          ...prevState,
          electronPrice: e.target.value,
        }));
      }
    },
    [],
  );

  const handleWaterPrice = useCallback(
    (e) => {
      if (
        (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
        e.target.value === "" ||
        e.target.value === "-"
      ) {
        setState((prevState) => ({
          ...prevState,
          waterPrice: e.target.value,
        }));
      }
    },
    [],
  );

  const handlePhoneChange = useCallback(
    (e) => {
      if (
        (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
        e.target.value === "" ||
        e.target.value === "-"
      ) {
        setState((prevState) => ({
          ...prevState,
          phone: e.target.value,
        }));
      }
    },
    [],
  );

  const handleAreaRoom = useCallback(
    (e) => {
      if (
        (!isNaN(e.target.value) && regexNumber.test(e.target.value)) ||
        e.target.value === "" ||
        e.target.value === "-"
      ) {
        setState((prevState) => ({
          ...prevState,
          areaRoom: e.target.value,
        }));
      }
    },
    [],
  );

  const handleDescriptionChange = useCallback(
    (e) => {
      setState((prevState) => ({
        ...prevState,
        description: e.target.value,
      }));
    },
    [],
  );

  const handleAllCheck = useCallback(
    (e) => {
      setIsCheckAll(e.target.checked);
      setState((prevState) => ({
        ...prevState,
        utilities: e.target.checked ? utilitiesData : [],
      }));
    },
    [],
  );

  const handleCheckUtil = useCallback(
    (e) => {
      setState((prevState) => ({
        ...prevState,
        utilities: e,
      }));
    },
    [],
  );

  const handleUploadThumbnail = useCallback(
    async (e) => {
      const file = e.target.files[0];
      const fd = new FormData();
      fd.append("file-single", file);
      await uploadFileSingle(fd).then((res) => {
        setState((prevState) => ({
          ...prevState,
          thumbnailImg: res.data.data,
        }));
      });
    },
    [],
  );

  const handleUploadMulti = useCallback(
    async (e) => {
      const fd = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        fd.append("file-multiple", e.target.files[i]);
      }
      await uploadFileMultiple(fd).then((res) => {
        setState((prevState) => ({
          ...prevState,
          detailImgs: res.data.data,
        }));
      });
    },
    [],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        createPostActions.createPostRequest({
          title: state.title,
          type_room: state.roomType,
          address: `${state.wardName}, ${state.districtName}, ${state.cityName}`,
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
        description: "",
        utilities: [],
        thumbnailImg: "",
        detailImgs: [],
        cityName: '',
        districtName: '',
        wardName: ''
      });
      setIsPosted(true);
    },
    [state],
  );

  useEffect(() => {
    if (isPosted) {
      toast.success("Đã đăng bài thành công!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return () => {
      setIsPosted(false);
    };
  }, [isPosted]);

  const values = {
    state,
    handleRoomPrice,
    handleAreaRoom,
    handleElectronPrice,
    handlePhoneChange,
    handleWaterPrice,
    locationValue,
    handleTypeRoom,
    handleAddressChange,
    handleDescriptionChange,
    handleCheckUtil,
    handleAllCheck,
    isCheckAll,
    handleUploadThumbnail,
    handleUploadMulti,
    handleCityChange,
    handleDistrictChange,
    handleWardChange
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className={clsx(styles.postForm)} encType="multipart/form-data" autoComplete="false">
        <input
          value={state.title}
          type={"text"}
          placeholder="Tiêu đề"
          className={clsx(styles.headingInput)}
          onChange={handleTitleChange}
        />
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

export default PostPage;
