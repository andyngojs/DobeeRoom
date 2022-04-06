import { createContext, useState } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [state, setState] = useState({
    roomPrice: "",
    electronPrice: "",
    waterPrice: "",
    areaRoom: "",
    phone: "",
  });
  const regexNumber = /^-?\d*(\.\d*)?$/;

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

  const values = {
    state,
    handleRoomPrice,
    handleAreaRoom,
    handleElectronPrice,
    handlePhoneChange,
    handleWaterPrice,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
