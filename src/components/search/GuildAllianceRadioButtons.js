import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function GuildAllianceRadioButtons({ radioValue, handleChange }) {

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="radio-group-select-type-search"
        name="row-radio-buttons-group"
        defaultValue={0}
        value={radioValue}
        onChange={handleChange}
      >
        <FormControlLabel
          value={0}
          control={<Radio />}
          label="Guilds"
        />
        <FormControlLabel
          value={1}
          control={<Radio />}
          label="Alliances"
        />
      </RadioGroup>
    </FormControl>
  );
}
