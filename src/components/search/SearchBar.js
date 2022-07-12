import * as React from "react";
import SelectMultipleOptions from "./SelectMultipleOptions";
import Calendar from "react-calendar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GuildAllianceRadioButtons from "./GuildAllianceRadioButtons";
import "../../custom-calendar.css";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  getSearchUrl,
  getDateSixDaysAgo,
  STATE_GUILDS,
  STATE_ALLIANCES,
} from "./SearchBarUtils";

const ui = {
  data: [
    {
      radioState: STATE_GUILDS,
      label: "Select Guilds",
      placeholder: "Albion Guild",
      options: [],
    },
    {
      radioState: STATE_ALLIANCES,
      label: "Select Alliances",
      placeholder: "Albion Alliance",
      options: [],
    },
  ],
};

const dateToday = new Date();

export default function SearchBar({ options, fetchData, setChartsData }) {
  ui.data[STATE_GUILDS].options = options?.guilds || [];
  ui.data[STATE_ALLIANCES].options = options?.alliances || [];

  const [radioStateValue, setRadioStateValue] = React.useState(STATE_GUILDS);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedItemsEmptyError, setSelectedItemsEmptyError] =
    React.useState(false);
  const [calendarValue, setCalendarValue] = React.useState([
    getDateSixDaysAgo(),
    dateToday,
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [loadingButtonStatus, setLoadingButtonStatus] = React.useState(false);

  const handleRadioChange = (event) => {
    setRadioStateValue(parseInt(event.target.value));
    setSelectedItems([]);
    setInputValue("");
  };  

  function onChangeSelectMultipleOptions(_e, newValue) {
    if (newValue?.length !== 0) {
      setSelectedItemsEmptyError(false);
    }
    setSelectedItems(newValue);
  }

  function handleSearch() {
    if (selectedItems.length === 0) {
      setSelectedItemsEmptyError(true);
      return;
    }
    const URL = getSearchUrl(selectedItems, calendarValue, radioStateValue);
    fetchData(URL, setChartsData, setLoadingButtonStatus);
  }

  const uiCurrentValues = ui.data[radioStateValue];
  return (
    <Box sx={{ mt: 0, mb: 4 }}>
      <Grid container columnSpacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <GuildAllianceRadioButtons
            radioValue={radioStateValue}
            handleChange={handleRadioChange}
          />
          <SelectMultipleOptions
            value={selectedItems}
            setValue={setSelectedItems}
            onChange={onChangeSelectMultipleOptions}
            inputValue={inputValue}
            setInputValue={setInputValue}
            options={uiCurrentValues.options}
            label={uiCurrentValues.label}
            placeholder={uiCurrentValues.placeholder}
            selectedItemsEmptyError={selectedItemsEmptyError}
          />
          <Box sx={{ mt: 1 }}>
            <LoadingButton
              onClick={handleSearch}
              loading={loadingButtonStatus}
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
            allowPartialRange
            maxDate={dateToday}
            defaultActiveStartDate={dateToday}
            onChange={setCalendarValue}
            value={calendarValue}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
