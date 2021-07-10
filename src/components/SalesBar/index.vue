<template>
  <div class="salesbar">
    <div class="salesbarinner">
      <vue-echarts :option="options"> </vue-echarts>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesBar",
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
        this.getOptions()
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    getOptions() {
      if (this.data && this.data.salesBar) {
        const { axis, data1, data2 } = this.data.salesBar;
        this.options = {
          title: {
            text: "今日销售额:253,089.10元",
            textStyle: {
              color: "#fff"
            },
            top: 10,
            left: 10
          },
          grid: {
            left: "3%",
            right: "5%",
            bottom: "3%",
            containLabel: true
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "value",
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)"
              }
            }
          },
          yAxis: {
            type: "category",
            data: axis,
            axisLabel: {
              show: true,
              color: "#fff"
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: "平台流量",
              type: "bar",
              data: data1,
              itemStyle: {
                color: "#c92a2a"
              }
            },
            {
              name: "外部流量",
              type: "bar",
              data: data2,
              itemStyle: {
                color: "rgb(0,140,217)"
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
.salesbar {
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 650px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .salesbarinner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
