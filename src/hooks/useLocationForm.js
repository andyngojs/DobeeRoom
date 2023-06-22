import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { PATHS } from "../constants/paths";

const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
};

async function fetchLocationOptions(fetchType, locationId) {
  let url;
  switch (fetchType) {
    case FETCH_TYPES.CITIES: {
      url = PATHS.CITIES;
      break;
    }
    case FETCH_TYPES.DISTRICTS: {
      url = `${PATHS.DISTRICTS}/${locationId}.json`;
      break;
    }
    case FETCH_TYPES.WARDS: {
      url = `${PATHS.WARDS}/${locationId}.json`;
      break;
    }
    default: {
      return [];
    }
  }
  const locations = (await axios.get(url)).data["data"];
  return locations.map(({ id, name }) => ({ value: id, label: name }));
}

export default function useLocationForm(shouldFetchInitialLocation) {
  const [locationValue, setLocationValue] = useState({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null,
    cityLabel: "",
    districtLabel: "",
    wardLabel: "",
  });

  const { selectedCity, selectedDistrict } = locationValue;

  useEffect(async () => {
    if (!shouldFetchInitialLocation) {
      const options = await fetchLocationOptions(FETCH_TYPES.CITIES);
      const newOption = options.filter((c) => c.value === 297);
      setLocationValue({
        ...locationValue,
        cityOptions: newOption,
        // selectedCity: newOption.find((c) => c.value === 297),
      });
    }
  }, [locationValue.cityLabel]);

  useEffect(async () => {
    if (!selectedCity) return;
    const options = await fetchLocationOptions(
      FETCH_TYPES.DISTRICTS,
      selectedCity.value,
    );
    setLocationValue({ ...locationValue, districtOptions: options });
  }, [selectedCity])

  useEffect(async () => {
    if (!selectedDistrict) return;
    const options = await fetchLocationOptions(
      FETCH_TYPES.WARDS,
      selectedDistrict.value,
    );
    setLocationValue({ ...locationValue, wardOptions: options });
  }, [selectedDistrict]);

  const onCitySelect = useCallback(
    (option) => {
      setLocationValue((prevState) => ({
        ...prevState,
        selectedCity: option,
        cityLabel: option.label,
      }));
    },
    [],
  );

  const onDistrictSelect = useCallback(
    (option) => {
      setLocationValue((prevState) => ({
        ...prevState,
        selectedDistrict: option,
        districtLabel: option.label,
      }));
    },
    [],
  );

  const onWardSelect = useCallback(
    (option) => {
      setLocationValue((prevState) => ({
        ...prevState,
        selectedWard: option,
        wardLabel: option.label,
      }));
    },
    [],
  );

  return {
    locationValue,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
  };
}