<template>
  <q-page >
    <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    实时监控
  </q-toolbar-title>
 <q-btn flat round dense icon="search"/>
</q-toolbar>
    <div class="padding-lr-1rem">
    <section style="border-bottom:none">      
      <div >
       <baidu-map class="map" map-click id="mobilemap" :center="center" :zoom="zoom" @ready="handler">
           <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <my-overlay :marker="currentMarker" @ShowScreen="ShowScreen"  v-show="currentMarker!=null"></my-overlay>
   
          <bm-marker autoPan :key=index @click="markerClick(marker)" v-for="(marker,index) in markers" :title="marker.name"  :position="marker.position" :icon="currentMarker==marker.name?{url:'../statics/images/icon-pinA.png',size: {width: 30, height: 35}}:marker.icon"  >
         
           <!-- <bm-label :content="marker.name" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 20}"/> -->
        </bm-marker>
       </baidu-map>
      </div>
    </section>
    </div>
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
#mobilemap{
  width: 100%;
  height: 620px;
}
</style>
