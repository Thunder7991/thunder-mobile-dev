<template>
  <div class="home">
    <div class="datav-wrapper">
      <!-- <vue-echarts :option="options"></vue-echarts> -->
      <top-header></top-header>
      <sales-bar></sales-bar>
      <sales-line></sales-line>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from "@/components/TopHeader/index";
import SalesBar from "@/components/SalesBar/index";
import SalesLine from "@/components/SalesLine/index";

export default {
  name: "Home",
  components: { TopHeader, SalesBar, SalesLine },
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
      this.options = {};
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
</style>
