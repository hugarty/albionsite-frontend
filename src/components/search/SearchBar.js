import * as React from "react";
import SelectMultipleOptions from "./SelectMultipleOptions";
import Calendar from "react-calendar";
import GuildAllianceRadioButtons from "./GuildAllianceRadioButtons";
import "../../custom-calendar.css";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { filmsA, filmsB } from "./dataFile";

const ui = {
  radioState: {
    guilds: 0,
    alliances: 1,
  },
  data: [
    {
      radioState: 0,
      label: "Select Guilds",
      placeholder: "Albion Guild",
      options: filmsA,
    },
    {
      radioState: 1,
      label: "Select Alliances",
      placeholder: "Albion Alliance",
      options: filmsB,
    },
  ],
};

export default function SearchBar() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const [radioStateValue, setRadioStateValue] = React.useState(
    ui.radioState.guilds
  );

  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setRadioStateValue(event.target.value);
    setValue([]);
    setInputValue('');
  };

  const uiCurrentValues = ui.data[radioStateValue];

  return (
    <Box sx={{ mt: 0, mb: 4 }}>
      <Grid container columnSpacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <GuildAllianceRadioButtons
            radioValue={radioStateValue}
            handleChange={handleChange}
          />
          <SelectMultipleOptions
            value={value}
            setValue={setValue}
            inputValue={inputValue}
            setInputValue={setInputValue}
            options={uiCurrentValues.options}
            label={uiCurrentValues.label}
            placeholder={uiCurrentValues.placeholder}
          />
          <Box sx={{ mt: 1 }}>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              variant="outlined"
              fullWidth
            >
              search
            </LoadingButton>
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Calendar
            selectRange
            returnValue={"range"}
            onChange={(value, _event) => {
              console.log(value);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
