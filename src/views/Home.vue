<template>
  <div class="home">
    <div class="echarts-wrapper">
  <vue-echarts :option="options"></vue-echarts>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      options: {}
    }
  },
  mounted () {
    this.getOptions() 
  },
  methods: {
    getOptions() {
      this.options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      }, 
      yAxis: {}, 
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%; 
  font-size: 20px;
  .echarts-wrapper {
     width: 100%;
  height: 500px; 
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
