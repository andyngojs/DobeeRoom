import React, { memo, useEffect } from "react";
import clsx from "clsx";
import { Input, Row, Col, Checkbox } from "antd";
import Select from "react-select";
import styles from "./PostForm.module.scss";
import { utilitiesData } from "../../../constants/utilitiesForm";
import { typeOptions } from "../../../constants/typeRoom";

function PostForm({ value }) {
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
            onChange={handleTypeRoom}
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
            onChange={handleCheckUtil}
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
            onChange={handleDescriptionChange}
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

export default memo(PostForm);

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
            defaultValue={selectedDistrict}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
          />
          <Select
            className={clsx(styles.selectItem)}
            placeholder="Phường/Xã"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            defaultValue={selectedWard}
            onChange={(option) => onWardSelect(option)}
            options={wardOptions}
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
          onChange={handleAddressChange}
          name="address"
        />
        {errors.address && (
          <span className={clsx(styles.error)}>{errors.address}</span>
        )}
      </Col>
    </>
  );
}

memo(LocationForm);

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
          onChange={handleRoomPrice}
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
            onChange={handleElectronPrice}
          />
          <Input
            style={{ width: "50%" }}
            defaultValue=""
            value={waterPrice}
            placeholder="Nhập giá nước"
            onChange={handleWaterPrice}
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
          onChange={handleAreaRoom}
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
          onChange={handlePhoneChange}
          placeholder="Nhập số điện thoại"
        />
        {errors.phone && (
          <span className={clsx(styles.error)}>{errors.phone}</span>
        )}
      </Col>
    </>
  );
}

memo(InformationForm);

function PhotoForm(props) {
  const { handleUploadThumbnail, state, handleUploadMulti, errors } = props;

  const { thumbnailImg, detailImgs } = state;

  return (
    <>
      <Col span={12}>
        <h3 className={clsx(styles.headingLabel)}>Chọn ảnh nổi bật</h3>
        <input
          type={"file"}
          className={clsx(styles.btnUpload)}
          onChange={handleUploadThumbnail}
          placeholder="Chọn ảnh chi tiết"
          name="file-single"
        />
        {errors.thumbnailImg && (
          <span className={clsx(styles.error)}>{errors.thumbnailImg}</span>
        )}
        <div className={clsx(styles.previewImg)}>
          <img
            src={`http://localhost:5000/${thumbnailImg}`}
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
          onChange={handleUploadMulti}
          name="file-multiple"
        />
        <div className={clsx(styles.previewImg)}>
          {detailImgs.map((item, index) => (
            <img
              src={`http://localhost:5000/${item}`}
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

memo(PhotoForm);
