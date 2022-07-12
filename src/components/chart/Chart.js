import ReactECharts from "echarts-for-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const GRID = { top: 60, right: 50, bottom: 25, left: 100 };
const LEGEND_TOP = "22px";
const X_AXYS_TYPE = "category";
const Y_AXYS_TYPE = "value";
const SERIES_TYPE = "line";
const TOOLTIP_TRIGGER = "axis";
const TOOLTIP_POSITION = [20, 25];

const buildSeries = (items) => {
  return Object.values(items).map((item) => {
    const arrayValues = Object.values(item.values).map((value) =>
      parseFloat(value)
    );

    return {
      name: item.name,
      data: arrayValues,
      type: SERIES_TYPE,
      smooth: true,
    };
  });
};

const buildLegend = (items) => {
  return Object.values(items).map((item) => item.name);
};

const buildCategoryName = (items) => {
  return Object.values(items)
    .map((item) => Object.keys(item.values))
    .reduce((prev, current) => {
      if (prev.length <= current.length) {
        return current;
      }
      return prev;
    }, []);
};

const getTooltip = (windowWidth) => {
  const tooltip = { trigger: TOOLTIP_TRIGGER };
  if (windowWidth < 700) {
    tooltip.position = TOOLTIP_POSITION;
  }
  return tooltip;
};

const isValid = (title, items) => {
  return title && items;
};

const Chart = ({ title, items, windowWidth }) => {
  if (!isValid(title, items)) {
    return (
      <Box>
        <Typography align="center">Loading</Typography>
      </Box>
    );
  }

  const series = buildSeries(items);
  const legendData = buildLegend(items);
  const xAxisCategoryName = buildCategoryName(items);
  const tooltip = getTooltip(windowWidth);

  const options = {
    title: {
      text: title,
    },
    legend: {
      data: legendData,
      top: LEGEND_TOP,
    },
    series: series,
    grid: GRID,
    xAxis: {
      type: X_AXYS_TYPE,
      data: xAxisCategoryName,
    },
    yAxis: {
      type: Y_AXYS_TYPE,
    },
    tooltip: tooltip,
  };

  return <ReactECharts option={options} notMerge />;
};

export default Chart;
