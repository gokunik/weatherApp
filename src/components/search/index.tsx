/* eslint-disable @typescript-eslint/no-explicit-any */
import { getGeoData } from "@/services/api";
import { OnSearchChange } from "@/types";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export const Search: React.FC<{ onSearchChange: OnSearchChange }> = ({
  onSearchChange,
}) => {
  const [searchValue, setSearchValue] = useState<string>("delhi");

  const loadOptions = async (inputValue: any) => {
    const location = inputValue === "" ? "delhi" : inputValue;
    const citiesList = await getGeoData(location);
    return {
      options: citiesList.data.map((city: any) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
          region: city.region,
          country: city.country,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData: any) => {
    setSearchValue(enteredData.value);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={600}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
