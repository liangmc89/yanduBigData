<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <header class="title">
    <span class="header-time">{{dataStr}}</span>
    <span class="header-title">固城湖水慢城大数据运营中心</span>
    <span class="header-weather">天气:多云 温度:24.9℃ 风向:东南风 </span>
  </header>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { date } from 'quasar'
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      dataStr:''
    };
  },
  methods: {
    openURL,
    setDate:function(){
      let t = Date.now();      
      let weekArray=['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
      let day = weekArray[date.getDayOfWeek(t)-1] ;
      this.dataStr=date.formatDate(t, 'YYYY年 MM月 DD日')  +'   '+day;
    }
  
  },
  mounted:function(){
    this.setDate();
  }
};
</script>

<style>


</style>
