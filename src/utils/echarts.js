export const initEchartOption1 = (title, lineStyle, dataBJ, dataSH, dataGZ) => {
  return {
    backgroundColor: "rgba(0,0,0,0.5)",
    title: {
      text: title,
      left: "center",
      textStyle: {
        color: "#eee",
      },
    },
    legend: {
      bottom: 5,
      data: ["Morning", "Afternoon", "Evening"],
      itemGap: 20,
      textStyle: {
        color: "#fff",
        fontSize: 14,
      },
      selectedMode: "single",
    },
    radar: {
      indicator: [
        { name: "0:00-4:00", max: 300 },
        { name: "4:00-8:00", max: 250 },
        { name: "8:00-12:00", max: 300 },
        { name: "12:00-16:00", max: 5 },
        { name: "16:00-20:00", max: 200 },
        { name: "20:00-24:00", max: 100 },
      ],
      shape: "circle",
      splitNumber: 5,
      axisName: {
        color: "rgb(238, 197, 102)",
      },
      splitLine: {
        lineStyle: {
          color: [
            "rgba(238, 197, 102, 0.1)",
            "rgba(238, 197, 102, 0.2)",
            "rgba(238, 197, 102, 0.4)",
            "rgba(238, 197, 102, 0.6)",
            "rgba(238, 197, 102, 0.8)",
            "rgba(238, 197, 102, 1)",
          ].reverse(),
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(238, 197, 102, 0.5)",
        },
      },
    },
    series: [
      {
        name: "Morning",
        type: "radar",
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: "none",
        itemStyle: {
          color: "#F9713C",
        },
        areaStyle: {
          opacity: 0.3,
        },
      },
      {
        name: "Afternoon",
        type: "radar",
        lineStyle: lineStyle,
        data: dataSH,
        symbol: "none",
        itemStyle: {
          color: "#B3E4A1",
        },
        areaStyle: {
          opacity: 0.3,
        },
      },
      {
        name: "Evening",
        type: "radar",
        lineStyle: lineStyle,
        data: dataGZ,
        symbol: "none",
        itemStyle: {
          color: "rgb(238, 197, 102)",
        },
        areaStyle: {
          opacity: 0.3,
        },
      },
    ],
  };
};
export const initEchartOption2 = (date_lst, real_lst, forecast_lst) => {
  return {
    backgroundColor: "rgba(0,0,0,0.5)",
    title: {
      text: "入驻停车场月卡数量",
      left: "center",
      textStyle: {
        color: "#eee",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      bottom: 5,
      data: ["实际办卡", "预计办卡"],
      textStyle: {
        color: "#fff",
        fontSize: 11,
      },
    },
    xAxis: [
      {
        type: "category",
        data: date_lst,
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "实际入住户数",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} 户",
        },
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
      {
        type: "value",
        name: "预计入住户数",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {},
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
      },
    ],
    series: [
      {
        name: "实际入住户数",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 户";
          },
        },
        data: real_lst,
      },
      {
        name: "预计入住户数",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " 户";
          },
        },
        data: forecast_lst,
      },
    ],
  };
};
