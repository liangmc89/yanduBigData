<template>
 <q-page class="content-pages">
    <q-layout view="hHr LpR lFf">
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    旅游大巴
  </q-toolbar-title>
        <q-btn flat round dense  />
    </q-toolbar>
   <div class="padding-lr-1rem" style="background:white">
    <section style="border-bottom:none">


    </section>
   </div>
  </q-layout-header>

   <q-page-container>
   <q-page>

    <div class="padding-1rem">
    <section>
      <div class="sec-title">
        <span class="sec-main-title">实时大巴使用情况</span>
      </div>
      <div class="sec-content sec-chart" >
         <IEcharts :option='bus'/>
      </div>
    </section>
    <section class="no-border-bttom">
      <div class="sec-title">
        <span class="sec-main-title">近期大巴使用率（6月）</span>
      </div>
      <div class="sec-content sec-chart">
        <IEcharts :option='inNum'/>
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
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
export default {
  data() {
    return {
      bus: {

        color: ["rgb(251,176,58)", "rgb(51,188,255)", "rgb(174,232,255)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "使用情况",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              {
                value: 335,
                name: "已用",
                label: {
                  normal: {
                    position: "outside",
                    formatter: "{b}:{d}%",
                    textStyle: {
                      align: "center",
                      baseline: "middle",
                      fontFamily: "微软雅黑",
                      fontSize: 10,
                      fontWeight: "bolder"
                    }
                  }
                }
              },
              {
                value: 310,
                name: "维修",
                label: {
                  normal: {
                    position: "outside",
                    formatter: "{b}:{d}%",
                    textStyle: {
                      align: "center",
                      baseline: "middle",
                      fontFamily: "微软雅黑",
                      fontSize: 10,
                      fontWeight: "bolder"
                    }
                  }
                }
              },
              {
                value: 234,
                name: "闲置",
                label: {
                  normal: {
                    position: "outside",
                    formatter: "{b}:{d}%",
                    textStyle: {
                      align: "center",
                      baseline: "middle",
                      fontFamily: "微软雅黑",
                      fontSize: 10,
                      fontWeight: "bolder"
                    }
                  }
                }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      inNum: {
        color: ["#1c87f1"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            data: [
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLabel:{
              color:'#787f85'
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "大巴数量",
            min: 0,
            max: 100,
            interval: 50,
            axisLabel:{
              color:'#787f85'
            },
            nameTextStyle:{
               color:'#787f85'
            }
          },
          {
            type: "value",
            name: "百分比",
            min: 0,
            max: 100,
            interval: 10,
            axisLabel:{
              color:'#787f85'
            },
            nameTextStyle:{
               color:'#787f85'
            }
          }
        ],
        series: [
          {
            name: "大巴数量",
            type: "bar",
            data: [50, 42, 33, 45, 63, 12, 23, 24, 53, 66, 50, 62],
            barWidth:10

          },
          {
            name: "百分比",
            type: "line",
            yAxisIndex: 1,
            data: [50, 42, 33, 45, 63, 12, 23, 24, 53, 66, 50, 62],
            label:{
              show:true,
              color:'rgb(251,176,58)'
            },
            lineStyle:{
              color:'rgb(251,176,58)'
            }
          }
        ]
      }
    };
  },
  components: {
    IEcharts
  }
};
</script>

<style>
</style>
