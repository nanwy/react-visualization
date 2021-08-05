function getConfig(data: any) {
  console.log("______", data);

  const echartsData = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: "center",
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 300 * data, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" },
        ],
      },
    ],

    // title: {
    //   text: "未来一周气温变化",
    //   subtext: "纯属虚构"
    // },
    // tooltip: {
    //   trigger: "axis"
    // },
    // legend: {
    //   data: ["最高气温", "最低气温"],
    //   x: "right",
    //   textStyle: {
    //     rich: {
    //       align: "right"
    //     }
    //   }
    // },
    // grid: {
    //   left: "3%",
    //   right: "4%",
    //   bottom: "10%",
    //   containLabel: true
    // },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    // xAxis: {
    //   type: "category",
    //   boundaryGap: true,
    //   data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    //   splitLine: {
    //     show: true
    //     // interval: 1
    //   }
    // },
    // yAxis: {
    //   type: "value",
    //   offset: 4,
    //   axisLabel: {
    //     formatter: "{value} °C"
    //   },
    //   axisTick: {
    //     show: false
    //   },

    //   axisLine: {
    //     // 坐标轴线
    //     show: false, // 默认显示，属性show控制显示与否
    //     lineStyle: {
    //       // 属性lineStyle控制线条样式
    //       color: "#48b",
    //       width: 2,
    //       type: "solid"
    //     }
    //   }
    // },
    // series: [
    //   {
    //     name: "最高气温",
    //     type: "line",
    //     data: [11, 11, 15, 13, 12, 13, 10],
    //     markPoint: {
    //       data: [
    //         { type: "max", name: "最大值" },
    //         { type: "min", name: "最小值" }
    //       ]
    //     },
    //     // markLine: {
    //     //     data: [
    //     //         {type: 'average', name: '平均值'}
    //     //     ]
    //     // },
    //     itemStyle: {
    //       normal: {
    //         lineStyle: {
    //           color: "#00FF00"
    //         }
    //       }
    //     }
    //   },
    //   {
    //     name: "最低气温",
    //     type: "line",
    //     data: [1, 4, 2, 5, 3, 2, 7],
    //     markPoint: {
    //       data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
    //     },
    //     markLine: {
    //       data: [
    //         // {type: 'average', name: '平均值'},
    //         [
    //           {
    //             symbol: "none",
    //             // x: '90%',
    //             yAxis: "max"
    //           },
    //           {
    //             // symbol: 'circle',
    //             // label: {
    //             //     normal: {
    //             //         position: 'start',
    //             //         formatter: '最大值'
    //             //     }
    //             // },
    //             // type: 'max',
    //             // name: '最高点'
    //           }
    //         ]
    //       ]
    //     }
    //   }
    // ]

    // tooltip: {
    //   trigger: "axis"
    // },
    // grid: {
    //   left: "0px",
    //   right: "0%",
    //   bottom: "10%",
    //   containLabel: true
    // },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    // legend: {
    //   bottom: "10",
    //   itemWidth: 30,
    //   itemHeight: 6,
    //   data: [
    //     "tolal.avg",
    //     "use.avg",
    //     "swap.avg",
    //     "share.avg",
    //     "chae.avg",
    //     "buffer.avg"
    //   ]
    // },
    // xAxis: [
    //   {
    //     axisLine: {
    //       show: true
    //     },
    //     axisTick: {
    //       show: true
    //     },
    //     axisLabel: {
    //       rotate: 50
    //     },
    //     splitLine: {
    //       show: true,
    //       lineStyle: {
    //         color: "#CCC"
    //       }
    //     },
    //     splitNumber: 3,
    //     data: ["15:30", "15:45", "16:00", "16:15"]
    //   }
    // ],
    // yAxis: {
    //   show: true,
    //   type: "value",
    //   axisTick: {
    //     show: false
    //   },

    //   axisLine: {
    //     // 坐标轴线
    //     show: false, // 默认显示，属性show控制显示与否
    //     lineStyle: {
    //       // 属性lineStyle控制线条样式
    //       color: "#48b",
    //       width: 2,
    //       type: "solid"
    //     }
    //   }
    // },
    // series: [
    //   {
    //     name: "tolal.avg",
    //     type: "line",
    //     step: "start",
    //     itemStyle: {
    //       color: "#58e1cd",
    //       borderColor: "#5b9bd5",
    //       borderWidth: 4
    //     },
    //     lineStyle: {
    //       width: 4
    //     },
    //     data: data.data
    //   }
    //   // {
    //   //     name: 'use.avg',
    //   //     type: 'line',
    //   //             step:"middle",
    //   //     itemStyle: {
    //   //         color: '#e95057',
    //   //         borderColor: '#ed7d31',
    //   //         borderWidth: 4
    //   //     },
    //   //     lineStyle: {
    //   //         width: 4
    //   //     },
    //   //     data: [5, 7, 9, 11]
    //   // },
    //   // {
    //   //     name: 'swap.avg',
    //   //     type: 'line',
    //   //                         step:"middle",
    //   //     itemStyle: {
    //   //         color: '#d2db71',
    //   //         borderColor: '#5b9bd5',
    //   //         borderWidth: 4
    //   //     },
    //   //     lineStyle: {
    //   //         width: 4
    //   //     },
    //   //     data: [8, 9.5, 10,13]
    //   // },
    //   // {
    //   //     name: 'share.avg',
    //   //     type: 'line',
    //   //                         step:"middle",
    //   //     itemStyle: {
    //   //         color: '#5f7df4',
    //   //         borderColor: '#ed7d31',
    //   //         borderWidth: 4
    //   //     },
    //   //     lineStyle: {
    //   //         width: 4
    //   //     },
    //   //     data: [10, 11, 14, 16]
    //   // },

    //   // {
    //   //     name: 'chae.avg',
    //   //     type: 'line',
    //   //                         step:"middle",
    //   //     itemStyle: {
    //   //         color: '#5b9bd5',
    //   //         borderColor: '#5b9bd5',
    //   //         borderWidth: 4
    //   //     },
    //   //     lineStyle: {
    //   //         width: 4
    //   //     },
    //   //     data: [13, 15, 17, 18]
    //   // },
    //   // {
    //   //     name: 'buffer.avg',
    //   //     type: 'line',
    //   //                         step:"end",
    //   //     itemStyle: {
    //   //         color: '#2535ae',
    //   //         borderColor: '#ed7d31',
    //   //         borderWidth: 4
    //   //     },
    //   //     lineStyle: {
    //   //         width: 4
    //   //     },
    //   //     data: [17, 18, 22, 25]
    //   // }
    // ]
  };

  return echartsData;
}

export default getConfig;
