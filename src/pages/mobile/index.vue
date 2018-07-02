<template>
  <q-page class="flex-top bg">
     <div class="head ">
       <h3>南京固城湖水慢城景区</h3>
       <p>智慧景区监控系统</p>
     </div>
     <div class='body'>
        <div class="row">          
            <router-link  :to="{name:'data'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/1.png" alt="">
              <p>实时数据</p>
            </router-link>
             <router-link :to="{name:'monitor'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/2.png" alt="">
              <p>实时监控</p>
            </router-link>
             <router-link :to="{name:'scenic'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/3.png" alt="">
              <p>景区信息</p>
            </router-link>
             <router-link :to="{name:'hotel'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/4.png" alt="">
              <p>酒店信息</p>
            </router-link>
             <router-link :to="{name:'travelAgency'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/5.png" alt="">
              <p>旅行社信息</p>
            </router-link>
             <router-link :to="{name:'guide'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/6.png" alt="">
              <p>导游信息</p>
            </router-link>
             <router-link :to="{name:'bus'}" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/7.png" alt="">
              <p>旅游大巴</p>
            </router-link>
             <a href="http://wx.shuimancheng.cn/guchenghu_weixin/web/home.html" class="col-6 nav-icon-btn">
              <img src="../../statics/icons/8.png" alt="">
              <p>微网站</p>
            </a>
             <router-link :to="{name:'worker'}" class="col-12 nav-icon-btn">
              <img src="../../statics/icons/9.png" alt="">
              <p>值班人员</p>
            </router-link>
          
        </div>
     </div>
  </q-page>
</template>



<script>
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
import MyOverlay from "../../components/overlay.vue";
import { BmlHeatmap } from "vue-baidu-map";
export default {
  data() {
    return {};
  }
};
</script>
<style scope lang='css'>
 @import '../../css/mobile.css'; 

.nav-icon-btn:nth-child(2n){
  border-left: 1px solid rgb(236,236,236);
}
.nav-icon-btn{
  padding: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid rgb(236,236,236);
  
}
.nav-icon-btn img{
  width: 12vw;
  height: 6.5vh;
}
.nav-icon-btn >p{
 margin: .3rem 0;
 font-size: 1rem;
 
}

.bg {
  background: url("../../statics/icons/bg.png") no-repeat 0 0/100% 100%;
  padding: 1.2rem;
}

.head {
  text-align: center;  
  color: white;
}
.head > h3 {
  margin: 1rem 0 .5rem 0;
  font-weight: 400;
}
.head > p {
  margin-bottom:1rem;
  font-size: 1.3rem;
}
.body{
  background:white;
  border-radius:1rem;
  overflow: hidden;
  
}

</style>

