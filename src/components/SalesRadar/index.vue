<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <vue-echarts :option="options" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesRadar",
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
  mounted() {
    // 渲染echarts雷达图
  },
  methods: {
    getOptions() {
      if (this.data) {
        console.log(this.data);
        const { data, indicator } = this.data.salesRadar
        this.options = {
          radar: {
            indicator: indicator
          },
          series: [
            {
              name: "运营指标",
              type: "radar",
              data: data
            }
          ]
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sales-radar {
  position: absolute;
  top: 3250px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;
  padding: 25px 25px 0;
  box-sizing: border-box;

  .sales-radar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
