import React, { useContext, useState } from "react";
import clsx from "clsx";
import {
  Select,
  Input,
  Row,
  Col,
  InputNumber,
  Checkbox,
  Upload,
  Modal,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./PostForm.module.scss";
import { utilities } from "../../../constants/utilitiesForm";
import { FormContext } from "../../../Contexts/FormProvider";

const { Option } = Select;

export default function PostForm() {
  return (
    <div className={clsx(styles.formWrapper)}>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Col span={8} className={clsx(styles.boxForm)}>
          <label htmlFor="roomType" className={clsx(styles.headingLabel)}>
            Loại phòng
          </label>
          <Select id="roomType" placeholder="Chọn loại phòng trọ" allowClear>
            <Option value="Nhà trọ & phòng trọ">Nhà trọ & phòng trọ</Option>
            <Option value="Chung cư mini">Chung cư mini</Option>
            <Option value="Tìm người ở ghép">Tìm người ở ghép</Option>
          </Select>
        </Col>
        <Location />
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Information />
      </Row>
      <Row gutter={16} className={clsx(styles.rowForm)}>
        <Col span={12} style={{ margin: "12px 0" }}>
          <h3 className={clsx(styles.utilitiesHeading)}>Các Tiện ích</h3>
          <Checkbox.Group options={utilities} />
        </Col>
        <Col span={12}>
          <h3>Chọn Ảnh nổi bật</h3>
        </Col>
      </Row>
    </div>
  );
}

function Location() {
  return (
    <>
      <Col span={8} className={clsx(styles.boxForm)}>
        <label className={clsx(styles.headingLabel)}>Địa chỉ</label>
        <Input.Group compact>
          <Select defaultValue="Hà Nội">
            <Option value="hanoi">Hà Nội</Option>
          </Select>
          <Select defaultValue="Chọn Quận/huyện">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
          <Select defaultValue="Chọn Phường/xã">
            <Option value="Option2-1">Option2-1</Option>
            <Option value="Option2-2">Option2-2</Option>
          </Select>
        </Input.Group>
      </Col>
      <Col span={8} className={clsx(styles.boxForm)}>
        <label htmlFor="detailAddress" className={clsx(styles.headingLabel)}>
          Địa chỉ chi tiết
        </label>
        <Input placeholder="Nhập địa chỉ chi tiết..." id="detailAddress" />
      </Col>
    </>
  );
}

function Information() {
  const {
    state,
    handleAreaRoom,
    handleElectronPrice,
    handlePhoneChange,
    handleRoomPrice,
    handleWaterPrice,
  } = useContext(FormContext);

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
        <InputNumber
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
