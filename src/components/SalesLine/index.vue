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
  props: {
    data: Object
  },
  watch: {
    data: {
      handler: function(val, oldVal) {
        this.getOptions();
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {},
  methods: {
    getOptions() {
      if (this.data) {
        const { axis, data1, data2, data3 } = this.data.saleLine;
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
            nameTextStyle: "",
            axisLabel: {
              color: "rgba(255,255,255,0.3)"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: "value",
            axisLabel: {
              color: "rgba(255,255,255,.3)"
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
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
