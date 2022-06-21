import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SelectMultipleOptions(props) {
  const {
    value,
    inputValue,
    setValue,
    setInputValue,
    options,
    label,
    placeholder
  } = props;

  return (
    <Autocomplete
      value={value}
      onChange={(_e, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(_e, newInputValue) => {
        setInputValue(newInputValue);
      }}
      multiple
      id="select-multiple-options"
      options={options}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}
