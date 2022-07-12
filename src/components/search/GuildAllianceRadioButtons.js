import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {STATE_GUILDS, STATE_ALLIANCES } from "./SearchBarUtils";

export default function GuildAllianceRadioButtons({ radioValue, handleChange }) {

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="radio-group-select-type-search"
        name="row-radio-buttons-group"
        defaultValue={STATE_GUILDS}
        value={radioValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value={STATE_GUILDS}
          control={<Radio />}
          label="Guilds"
        />
        <FormControlLabel
          value={STATE_ALLIANCES}
          control={<Radio />}
          label="Alliances"
        />
      </RadioGroup>
    </FormControl>
  );
}
