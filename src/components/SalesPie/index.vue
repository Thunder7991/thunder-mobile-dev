<template>
  <div class="salespie">
    <div class="salespieinner">
      <div class="salespieitem">
        <div class="salespieiteminner">
          <vue-echarts :option="options1"> </vue-echarts>
        </div>
      </div>
      <div class="salespieitem">
        <div class="salespieiteminner">
          <vue-echarts :option="options2"> </vue-echarts>
        </div>
      </div>
      <div class="salespieitem">
        <div class="salespieiteminner">
          <vue-echarts :option="options3"> </vue-echarts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesPie",
  props: {
    data: Object
  },
  data() {
    return {
      options1: {},
      options2: {},
      options3: {}
    };
  },
  watch: {
    data: {
      handler: function(val, oldVal) {
        if (val) {
          const [data1, data2, data3] = this.data.salePie;
          this.getOptions(data1.name, data1.total, data1.data, 1);
          this.getOptions(data2.name, data2.total, data2.data, 2);
          this.getOptions(data3.name, data3.total, data3.data, 3);
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {

  },
  methods: {
    getOptions(title, value, data, num) {
      this[`options${num}`] = {
        title: [
          {
            text: title,
            textStyle: {
              color: "rgba(255,255,255,.3)",
              fontSize: 12
            },
            top: 3
          },
          {
            text: value,
            textStyle: {
              color: "rgb(255,255,255)",
              fontSize: 16,
              fontWeight: 500
            },
            top: "43%",
            left: "32%"
          }
        ],
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: ["65%", "80%"],
            label: {
              show: false
            },
            data: [
              {
                value: data[0],
                name: "数据",
                itemStyle: {
                  color: "rgb(0,140,217)"
                }
              },
              {
                name: "数据",
                value: data[1],
                itemStyle: {
                  color: "rgb(35,69,145)"
                }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      // return {
      //       title: [{
      //         text: title
      //       }]
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.salespie {
  position: absolute;
  top: 1450px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 400px;
  padding: 25px 12.5px 0;
  box-sizing: border-box;
  .salespieinner {
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    .salespieitem {
      flex: 0 0 33.33%;
      width: 33.33%;
      height: 100%;
      padding: 0 12.5px;
      box-sizing: border-box;
    }
    .salespieiteminner {
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.05);
    }
  }
}
</style>
