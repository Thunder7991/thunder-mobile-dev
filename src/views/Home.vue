<template>
  <div class="home" v-if="!loading">
    <div class="datav-wrapper">
      <!-- <vue-echarts :option="options"></vue-echarts> -->
      <top-header></top-header>
      <sales-bar :data="data"></sales-bar>
      <sales-line :data="data"></sales-line>
      <sales-pie :data="data"></sales-pie>
      <sales-map></sales-map>
      <sales-sun :data="data"></sales-sun>
      <sales-radar :data="data"></sales-radar>
    </div>
  </div>
  <div class="home" v-else>
    <div class="loading-warpper">{{ loadingText }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from "@/components/TopHeader/index";
import SalesBar from "@/components/SalesBar/index";
import SalesLine from "@/components/SalesLine/index";
import SalesPie from "@/components/SalesPie/index";
import SalesMap from "@/components/SalesMap/index";
import SalesSun from "@/components/SalesSun/index";
import SalesRadar from "@/components/SalesRadar/index";

import { getMapData } from "@/api/index.js";
export default {
  name: "Home",
  components: {
    TopHeader,
    SalesBar,
    SalesLine,
    SalesPie,
    SalesMap,
    SalesSun,
    SalesRadar
  },
  data() {
    return {
      options: {},
      loading: true,
      data: {},
      loadingText: "加载中...",
      task: null
    };
  },
  created() {},
  mounted() {
    this.task && clearInterval(this.task);

    console.log(this.task);
    this.setAnimation();
    this.getOptions();
    this.getMapData();
  },
  methods: {
    getOptions() {
      this.options = {};
    },
    setAnimation() {
      this.task = setInterval(() => {
        if (this.loadingText === "加载中...") {
          this.loadingText = "加载中";
        } else {
          this.loadingText += ".";
        }
      }, 500);
    },
    getMapData() {
      getMapData()
        .then(res => {
         this.data = res
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          this.task && clearInterval(this.task);
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;

  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url("../assets/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
.loading-warpper {
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
