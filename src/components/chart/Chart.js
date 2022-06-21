import ReactECharts from "echarts-for-react";

const buildSeries = (props) => {
  return [
    {
      name: "asefa",
      data: [820 - 10, 932 - 10, 901 + 10],
      type: "line",
      smooth: true,
    },
    {
      name: "bbbbbb",
      data: [820, 232, 801],
      type: "line",
      smooth: true,
    },
    {
      name: "ffffff",
      data: [120 - 10, 132 - 10, 901 + 10],
      type: "line",
      smooth: true,
    },
    {
      name: "asdf",
      data: [820, 932, 701],
      type: "line",
      smooth: true,
    },
    {
      name: "xxxxx",
      data: [820 - 10, 732 - 10, 801 + 20],
      type: "line",
      smooth: true,
    },
    {
      name: "zzzz",
      data: [220, 532, 701],
      type: "line",
      smooth: true,
    },
  ];
};

const buildLegend = (props) => {
  return ["asdf", "asefa", "xxxxx", "zzzz", "ffffff", "bbbbbb"];
};

const buildCategoryName = (props) => {
  return ["Mon", "Tue", "Wed"];
};

const getGridTop = (props) => {
  return 80;
};

const Chart = (props) => {
  const series = buildSeries(props);
  const legendData = buildLegend(props);
  const xAxisCategoryName = buildCategoryName(props);
  const gridTop = getGridTop(props);

  const options = {
    title: {
      text: props.title,
    },
    legend: {
      data: legendData,
      top: "30px",
    },
    series: series,
    grid: { top: gridTop, right: 10, bottom: 25, left: 50 },

    xAxis: {
      type: "category",
      data: xAxisCategoryName,
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Chart;
