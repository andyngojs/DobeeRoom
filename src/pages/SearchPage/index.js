import React, { useCallback, useState } from "react";
import Select from "react-select";
import clsx from "clsx";
import { Input, Button, Empty } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./index.module.scss";
import { searchPost } from "../../api";
import useLocationForm from "../../hooks/useLocationForm";
import RoomItem from "../HomePage/components/RoomItem";

export default function SearchPage() {
    const { locationValue, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false);
  const [value, setValue] = useState({
    priceRoom: "",
    areaRoom: "",
    address: {
      city: "",
      district: "",
      ward: "",
    },
  });
  const [resultSearch, setResultSearch] = useState([])

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = locationValue;

  const handleSubmit = useCallback(() => {
    searchPost(value).then((res) => {
        setResultSearch(res.data.data)
    })
  }, [value])

  const handlePriceRoomChange = useCallback(
    (e) => {
      setValue((prevState) => {
        const searchValue = {
            ...prevState,
            priceRoom: e.target.value,
          };
        return searchValue;
      });
    },
    [],
  );

  const handleAreaRoomChange = useCallback(
    (e) => {
      setValue((prevState) => {
          const searchValue = {
            ...prevState,
            areaRoom: e.target.value,
          }
          return searchValue
      });
    },
    [],
  );

  const handleCityChange = useCallback(
    (option) => {
        onCitySelect(option)
      setValue((prevState) => {
        const searchValue = {
            ...prevState,
            address: {
              ...prevState.address,
              city: option.label,
            },
          }
        return searchValue
      });
    },
    [],
  );

  const handleDistrictChange = useCallback(
    (option) => {
        onDistrictSelect(option)
      setValue((prevState) => {
          const searchValue = {
            ...prevState,
            address: {
              ...prevState.address,
              district: option.label,
            },
          }
          return searchValue
      });
    },
    [],
  );

  const handleWardChange = useCallback(
    (option) => {
        onWardSelect(option)
      setValue((prevState) => {
          const searchValue = {
            ...prevState,
            address: {
              ...prevState.address,
              ward: option.label,
            },
          }
          return searchValue
      });
    },
    [],
  );

  return (
    <div className={clsx(styles.container)} >
      <div className={styles.containerTop}>
        <h2 className={clsx(styles.heading)}>Tìm Kiếm</h2>
      </div>
      <div className={clsx(styles.formSearch)}>
        <div>
          <span className={clsx(styles.labelSearch)}>
            Tìm kiếm theo giá phòng
          </span>
          <Input
            placeholder="Nhập giá phòng"
            value={value.priceRoom}
            onChange={handlePriceRoomChange}
          />
        </div>
        <div>
          <span className={clsx(styles.labelSearch)}>
            Tìm kiếm theo diện tích
          </span>
          <Input
            placeholder="Nhập diện tích phòng"
            value={value.areaRoom}
            onChange={handleAreaRoomChange}
          />
        </div>
        <div>
          <span className={clsx(styles.labelSearch)}>
            Tìm kiếm theo địa chỉ
          </span>
          <div className={clsx(styles.selectLocation)}>
            <Select
              className={clsx(styles.selectItem)}
              placeholder={"Tỉnh/thành"}
              onChange={handleCityChange}
              defaultValue={selectedCity}
                key={`cityId_${selectedCity?.value}`}
                // isDisabled={cityOptions.length === 0}
                options={cityOptions}
            />
            <Select
              className={clsx(styles.selectItem)}
              placeholder="Quận/Huyện"
              options={districtOptions}
              onChange={handleDistrictChange}
              key={`districtId_${selectedDistrict?.value}`}
            // isDisabled={districtOptions.length === 0}
            defaultValue={selectedDistrict}
            />
            <Select
              className={clsx(styles.selectItem)}
              placeholder="Phường/Xã"
              options={wardOptions}
              onChange={handleWardChange}
              key={`wardId_${selectedWard?.value}`}
            // isDisabled={wardOptions.length === 0}
            defaultValue={selectedWard}
            />
          </div>
        </div>
      </div>
      <Button type="primary" style={{ marginTop: 18 }}  icon={<SearchOutlined />} onClick={handleSubmit} >Tìm Kiếm</Button>
      <div>
        <h3 className={clsx(styles.resultLabel)}>Kết quả tìm được: { resultSearch.length } </h3>
        <div className={clsx(styles.result)} >
            {
               resultSearch.length > 0 ? 
               resultSearch.map((post, index) => (
                    <RoomItem key={index} post={post} />
                ))
                : <Empty description='Không tìm thấy bài đăng nào!' className={clsx(styles.empty)} />
            }
        </div>
      </div>
    </div>
  );
}
