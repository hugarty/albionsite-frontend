import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function getEmptyErrorMessage (hasEmptyError) {
  if (hasEmptyError) {
    return "Select at least one option.";
  }
  return null;
}

export default function SelectMultipleOptions(props) {
  const {
    value,
    inputValue,
    onChange,
    setInputValue,
    options,
    label,
    placeholder,
    selectedItemsEmptyError
  } = props;

  const errorHelperText = getEmptyErrorMessage(selectedItemsEmptyError);

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={(_e, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="select-multiple-options"
      options={options}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} helperText={errorHelperText} error={selectedItemsEmptyError} required label={label} placeholder={placeholder} />
      )}
    />
  );
}
