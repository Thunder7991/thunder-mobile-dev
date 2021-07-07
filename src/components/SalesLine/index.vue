<template>
  <div class="salesline">
    <div class="saleslineinner">
      <vue-echarts :option="options"> </vue-echarts>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesLine",
  data() {
    return {
      options: {}
    };
  },

  mounted() {
    this.getOptions();
  },
  methods: {
    getOptions() {
      const axis = ["00:00", "08:00", "16:00", "24:00"];
      const data1 = [151, 532, 901, 344];
      const data2 = [320, 1732, 501, 334];
      const data3 = [980, 970, 960, 334];

      this.options = {
        title: {
          text: "分时访问&成交趋势图",
          textStyle: {
            color: "#fff"
          },
          left: 10,
          top: 10
        },
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: axis,
          boundaryGap: false,
          axisLable: {
            color: "rgba(255,255,255,.3)"
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
           axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLable: {
            color: "rgba(255,255,255,.3)"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
         
        },
        series: [
          {
            name: "访问量",
            type: "line",
            data: data1,
            smooth: true,
            itemStyle: {
              color: "#c92a2a",
              opacity: 0
            }
          },
          {
            name: "成交量",
            type: "line",
            data: data2,
            smooth: true,
            itemStyle: {
              color: "#2b8a3e",
              opacity: 0
            }
          },
          {
            name: "KPI",
            type: "line",
            data: data3,
            smooth: true,
            itemStyle: {
              color: "rgb(0,140,217)",
              opacity: 0
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.salesline {
  position: absolute;
  top: 950px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 500px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .saleslineinner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
