<template>
  <q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    导游
  </q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>
   
  </q-layout-header>
     
   <q-page-container>
   <q-page>
    <div class="padding-1rem">
    <section>
      <div class="sec-title">
        <span class="sec-main-title">导游人员构成</span>        
      </div>
      <div class="sec-content sec-chart">
        <IEcharts :option='guide'/>
      </div>
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">导游实时位置</span>        
      </div>
      <div class="sec-content relative-position" style="height:280px">
        <baidu-map class="map" id="guidemap" :center="center" :zoom="zoom" @ready="handler">
           <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <my-overlay :marker="currentMarkerObj"    v-show="currentMarkerObj!=null"></my-overlay>
          <bm-marker autoPan :key=index @click="markerClick(marker)" v-for="(marker,index) in markers" :title="marker.name" :position="marker.position" :icon="currentMarkerObj==marker.name?{url:'../statics/images/icon-pinA.png',size: {width: 30, height: 35}}:marker.icon"  >
         
           
        </bm-marker>
       </baidu-map>
      </div>
    </section>
    </div>
    </q-page>
  </q-page-container>
  
</q-layout>
  </q-page>
</template>

<script>
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import MyOverlay from "../../components/overlay.vue";
export default {
  // name: 'PageName',
  data() {
    return {
      currentMarkerObj: null,
      center: { lng: 0, lat: 0 },
      zoom: 3,
      markers: [
        {
          name: "吴宝松",
          position: { lng: 119.830235, lat: 33.182229 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "张国平",
          position: { lng: 119.829085, lat: 33.179192 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "邢光禹",
          position: { lng: 119.834565, lat: 33.181081 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "梅家榜",
          position: { lng: 119.836649, lat: 33.180491 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "王华林",
          position: { lng: 119.833846, lat: 33.179192 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "杨兴玉",
          position: { lng: 119.832499, lat: 33.182924 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        },
        {
          name: "王大海",
          position: { lng: 119.833757, lat: 33.177273 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "在岗",
          type: "worker"
        }
      ],
      guide: {
        color: ["rgb(251,176,58)", "rgb(51,188,255)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "男女比例",
            type: "pie",
            radius: [0, 70],
            center: ["25%", "35%"],
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%"
              },
              emphasis: {
                show: true
              }
            },

            data: [{ value: 20, name: "男" }, { value: 35, name: "女" }]
          },
          {
            name: "在岗情况",
            type: "pie",
            radius: [0, 70],
            center: ["75%", "35%"],
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{d}%"
              },
              emphasis: {
                show: true
              }
            },
            data: [{ value: 65, name: "在岗" }, { value: 15, name: "休假" }]
          }
        ],
        title: [
          {
            text: "总人数：55\n男：20\n女：35",
            left: "5%",
            bottom: "5%",
            textStyle: {
              lineHeight: "20",
              color: "#787f85",
              fontSize: "14"
            }
          },
          {
            text: "在工作人数：65\n在休假人数：15",
            left: "60%",
            bottom: "12%",
            textStyle: {
              lineHeight: "20",
              color: "#787f85",
              fontSize: "14"
            }
          }
        ]
      }
    };
  },
  components: {
    IEcharts,
    MyOverlay
  },

  methods: {
    markerClick: function(marker) {
      this.currentMarkerObj = marker;
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 119.833002;
      this.center.lat = 33.180778;
      this.zoom = 16;
    }
  },
  mounted: function() {}
};
</script>

<style>
#guidemap {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
