import React from "react";
import clsx from "clsx";
import { Input, Row, Col, InputNumber, Checkbox, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Select from "react-select";
import styles from "./PostForm.module.scss";
import { utilities } from "../../../constants/utilitiesForm";
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
  } = value;

  const { roomType, description } = state;

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
        </Col>
        <LocationForm
          locationValue={locationValue}
          onCitySelect={onCitySelect}
          onDistrictSelect={onDistrictSelect}
          onWardSelect={onWardSelect}
          handleAddressChange={handleAddressChange}
          state={state}
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
        />
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Col span={12} style={{ margin: "12px 0" }}>
          <h3 className={clsx(styles.utilitiesHeading)}>Các Tiện ích</h3>
          <Checkbox.Group options={utilities} />
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
          />
        </Col>
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <PhotoForm />
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
  } = props;

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = locationValue;

  const { address } = state;

  return (
    <>
      <Col span={12} className={clsx(styles.boxForm)}>
        <label className={clsx(styles.headingLabel)}>Địa chỉ</label>
        <div className={clsx(styles.selectLocation)}>
          <Select
            className={clsx(styles.selectItem)}
            name="cityId"
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
          />
          <Select
            className={clsx(styles.selectItem)}
            name="districtId"
            placeholder="Quận/Huyện"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            defaultValue={selectedDistrict}
          />
          <Select
            className={clsx(styles.selectItem)}
            name="wardId"
            placeholder="Phường/Xã"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            onChange={(option) => onWardSelect(option)}
            defaultValue={selectedWard}
          />
        </div>
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
        />
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
      </Col>
    </>
  );
}

function PhotoForm() {
  return (
    <>
      <Col span={12}>
        <h3>Chọn ảnh nổi bật</h3>
        <Upload>
          <Button>
            <UploadOutlined /> Chọn 1 ảnh nổi bật
          </Button>
        </Upload>
      </Col>
      <Col span={12}>
        <h3>Chọn ảnh chi tiết</h3>
        <Upload>
          <Button>
            <UploadOutlined /> Chọn nhiều ảnh chi tiết
          </Button>
        </Upload>
      </Col>
    </>
  );
}
