import React from "react";
import Chart from "./Chart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ChartsWrapper = ({ chartsData, width }) => {
  if (!chartsData || (Array.isArray(chartsData) && chartsData.length === 0)) {
    return (
      <Box sx={{ mt: 5, mb: 15 }}>
        <Typography align="center">
          Sorry, we don't have data for this search.
        </Typography>
      </Box>
    );
  }

  return Object.entries(chartsData).map((data) => (
    <Box key={data[0]} sx={{ mb: 5 }}>
      <Chart windowWidth={width} title={data[0]} items={data[1]} />
    </Box>
  ));
};

export default React.memo(ChartsWrapper);
