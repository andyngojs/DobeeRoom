import React, { useEffect } from "react";
import clsx from "clsx";
import { Input, Row, Col, Checkbox } from "antd";
import Select from "react-select";
import styles from "./PostForm.module.scss";
import { utilitiesData } from "../../../constants/utilitiesForm";
import { typeOptions } from "../../../constants/typeRoom";

export default function PostForm({ value }) {
  const {
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
  } = value;

  const { roomType, description, utilities } = state;

  return (
    <div className={clsx(styles.formWrapper)}>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Col span={6} className={clsx(styles.boxForm)}>
          <label htmlFor="roomType" className={clsx(styles.headingLabel)}>
            Loại phòng
          </label>
          <Select
            defaultValue={roomType}
            options={typeOptions}
            placeholder="Chọn loại phòng trọ"
            onChange={(e) => handleTypeRoom(e)}
          />
          {errors.roomType && (
            <span className={clsx(styles.error)}>{errors.roomType}</span>
          )}
        </Col>
        <LocationForm
          locationValue={locationValue}
          onCitySelect={onCitySelect}
          onDistrictSelect={onDistrictSelect}
          onWardSelect={onWardSelect}
          handleAddressChange={handleAddressChange}
          state={state}
          errors={errors}
        />
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <InformationForm
          handleRoomPrice={handleRoomPrice}
          handleElectronPrice={handleElectronPrice}
          handleWaterPrice={handleWaterPrice}
          handlePhoneChange={handlePhoneChange}
          handleAreaRoom={handleAreaRoom}
          state={state}
          errors={errors}
        />
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Col span={12} style={{ margin: "6px 0" }}>
          <div className={clsx(styles.headingCheck)}>
            <h3 className={clsx(styles.headingLabel)}>Các Tiện ích</h3>
            <Checkbox checked={isCheckAll} onChange={(e) => handleAllCheck(e)}>
              Chọn Tất Cả
            </Checkbox>
          </div>
          <Checkbox.Group
            options={utilitiesData}
            value={utilities}
            className={clsx(styles.checkboxUtil)}
            onChange={(e) => handleCheckUtil(e)}
          />
        </Col>
        <Col span={12}>
          <label htmlFor="description" className={clsx(styles.headingLabel)}>
            Mô tả
          </label>
          <Input.TextArea
            id="description"
            placeholder="Nhập mô tả phòng trọ"
            allowClear
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
            rows={6}
            name="description"
          />
          {errors.description && (
            <span className={clsx(styles.error)}>{errors.description}</span>
          )}
        </Col>
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <PhotoForm
          handleUploadMulti={handleUploadMulti}
          handleUploadThumbnail={handleUploadThumbnail}
          state={state}
          errors={errors}
        />
      </Row>
    </div>
  );
}

function LocationForm(props) {
  const {
    locationValue,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    handleAddressChange,
    state,
    errors,
  } = props;

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = locationValue;

  const { address, addressHC } = state;

  return (
    <>
      <Col span={12} className={clsx(styles.boxForm)}>
        <label className={clsx(styles.headingLabel)}>Địa chỉ</label>
        <div className={clsx(styles.selectLocation)}>
          <Select
            className={clsx(styles.selectItem)}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
          />
          <Select
            className={clsx(styles.selectItem)}
            placeholder="Quận/Huyện"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            defaultValue={selectedDistrict}
          />
          <Select
            className={clsx(styles.selectItem)}
            placeholder="Phường/Xã"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            onChange={(option) => onWardSelect(option)}
            defaultValue={selectedWard}
          />
        </div>
        {errors.addressHC && selectedDistrict !== null && (
          <span className={clsx(styles.error)}>{errors.addressHC}</span>
        )}
      </Col>
      <Col span={6} className={clsx(styles.boxForm)}>
        <label htmlFor="detailAddress" className={clsx(styles.headingLabel)}>
          Địa chỉ chi tiết
        </label>
        <Input
          placeholder="Nhập địa chỉ chi tiết..."
          id="detailAddress"
          value={address}
          onChange={(e) => handleAddressChange(e)}
          name="address"
        />
        {errors.address && (
          <span className={clsx(styles.error)}>{errors.address}</span>
        )}
      </Col>
    </>
  );
}

function InformationForm(props) {
  const {
    state,
    handleAreaRoom,
    handleElectronPrice,
    handlePhoneChange,
    handleRoomPrice,
    handleWaterPrice,
    errors,
  } = props;

  const { roomPrice, electronPrice, waterPrice, areaRoom, phone } = state;

  return (
    <>
      <Col span={6} className={clsx(styles.boxForm)}>
        <label className={clsx(styles.headingLabel)} htmlFor="room-price">
          Giá Phòng - VNĐ
        </label>
        <Input
          id="room-price"
          value={roomPrice}
          onChange={(e) => handleRoomPrice(e)}
          placeholder="Nhập giá phòng..."
        />
        {errors.roomPrice && (
          <span className={clsx(styles.error)}>{errors.roomPrice}</span>
        )}
      </Col>
      <Col span={6} className={clsx(styles.boxForm)}>
        <label htmlFor="electronPrice" className={clsx(styles.headingLabel)}>
          Giá điện & nước
        </label>
        <Input.Group compact id="electronPrice">
          <Input
            style={{ width: "50%" }}
            defaultValue=""
            value={electronPrice}
            placeholder="Nhập giá điện"
            onChange={(e) => handleElectronPrice(e)}
          />
          <Input
            style={{ width: "50%" }}
            defaultValue=""
            value={waterPrice}
            placeholder="Nhập giá nước"
            onChange={(e) => handleWaterPrice(e)}
          />
          {errors.electronPrice && errors.waterPrice && (
            <>
              <span className={clsx(styles.error)}>{errors.electronPrice}</span>
              <span className={clsx(styles.error)}>{errors.waterPrice}</span>
            </>
          )}
        </Input.Group>
      </Col>
      <Col span={6} className={clsx(styles.boxForm)}>
        <label htmlFor="areaRoom" className={clsx(styles.headingLabel)}>
          Diện tích
        </label>
        <Input
          id="areaRoom"
          addonAfter={"m2"}
          placeholder="Nhập diện tích phòng"
          value={areaRoom}
          onChange={(e) => handleAreaRoom(e)}
        />
        {errors.areaRoom && (
          <span className={clsx(styles.error)}>{errors.areaRoom}</span>
        )}
      </Col>
      <Col span={6} className={clsx(styles.boxForm)}>
        <label className={clsx(styles.headingLabel)} htmlFor="phone">
          Số điện thoại
        </label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => handlePhoneChange(e)}
          placeholder="Nhập số điện thoại"
        />
        {errors.phone && (
          <span className={clsx(styles.error)}>{errors.phone}</span>
        )}
      </Col>
    </>
  );
}

function PhotoForm(props) {
  const { handleUploadThumbnail, state, handleUploadMulti, errors } = props;

  const { thumbnailImg, detailImgs } = state;

  useEffect(() => {
    return () => {
      thumbnailImg && URL.revokeObjectURL(thumbnailImg);
      detailImgs && URL.revokeObjectURL(detailImgs);
    };
  }, [thumbnailImg, detailImgs]);

  return (
    <>
      <Col span={12}>
        <h3 className={clsx(styles.headingLabel)}>Chọn ảnh nổi bật</h3>
        <input
          type={"file"}
          className={clsx(styles.btnUpload)}
          onChange={(e) => handleUploadThumbnail(e)}
          placeholder="Chọn ảnh chi tiết"
        />
        {errors.thumbnailImg && (
          <span className={clsx(styles.error)}>{errors.thumbnailImg}</span>
        )}
        <div className={clsx(styles.previewImg)}>
          <img
            src={thumbnailImg}
            className={clsx(styles.imgThumbnail)}
            alt=""
          />
        </div>
      </Col>
      <Col span={12}>
        <h3 className={clsx(styles.headingLabel)}>Chọn ảnh chi tiết</h3>
        <input
          type={"file"}
          className={clsx(styles.btnUpload)}
          multiple
          onChange={(e) => handleUploadMulti(e)}
        />
        <div className={clsx(styles.previewImg)}>
          {detailImgs.map((item, index) => (
            <img
              src={item.thumbnailUrl}
              className={clsx(styles.imgDetail)}
              key={index}
              alt=""
            />
          ))}
        </div>
      </Col>
    </>
  );
}
