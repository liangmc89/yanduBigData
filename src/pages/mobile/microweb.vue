<template>
  <q-page >
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    微网站
  </q-toolbar-title>
        <q-btn flat round dense  />
    </q-toolbar>
 
  </q-layout-header>
     
   <q-page-container>
   <q-page>
  
    <iframe style="width:100%;height:100%;position:absolute;top:0;left:0;border:none" src="http://wx.shuimancheng.cn/guchenghu_weixin/web/home.html"/>
    </q-page>
  </q-page-container>
  
</q-layout>
    
  </q-page>
</template>

<script>
import MyOverlay from "../../components/overlay.vue";
export default {
  // name: 'PageName',
  data(){
    return{
      center: { lng: 0, lat: 0 },
      zoom: 3,      
      markers: [
        //攝像頭
        {
          name: "AS2084",
          position: { lng: 119.828475, lat: 33.182214 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera1.jpg",
            type: "video/mp4",
            name: "大纵湖旅游度假区-售票处"
          },
          type: "cameramobile"
        },
        {
          name: "AS3085",
          position: { lng: 119.833954, lat: 33.182017 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera2.jpg",
            type: "video/mp4",
            name: "水车"
          },
          type: "cameramobile"
        },
        {
          name: "AS4086",
          position: { lng: 119.835374, lat: 33.180476 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera3.jpg",
            type: "video/mp4",
            name: "樱花大道"
          },
          type: "cameramobile"
        },
        {
          name: "AS5087",
          position: { lng: 119.828744, lat: 33.18312 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera4.jpg",
            type: "video/mp4",
            name: "芦荡迷宫"
          },
          type: "cameramobile"
        },
        {
          name: "AS6088",
          position: { lng: 119.831601, lat: 33.178844 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera5.jpg",
            type: "video/mp4",
            name: "曲桥"
          },
          type: "cameramobile"
        },
        {
          name: "AS7084",
          position: { lng: 119.835284, lat: 33.178119 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera6.jpg",
            type: "video/mp4",
            name: "柳堡门楼"
          },
          type: "cameramobile"
        },
        {
          name: "AS8085",
          position: { lng: 119.831295, lat: 33.179766 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "工作中",
          video: {
            src: "statics/images/camera7.jpg",
            type: "video/mp4",
            name: "同心岛"
          },
          type: "cameramobile"
        }
      ],
      currentMarker: null,
      // videojs options

      
    }
  },
  components:{
   MyOverlay,
   
  },methods:{
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 119.833002;
      this.center.lat = 33.180778;
      this.zoom = 17;
    },
    markerClick: function(marker) {
      
      this.currentMarker = marker;
    },
    ShowScreen(num) {
      // [this.currentMarker.video];
    },
  }


}
</script>

<style>

</style>
