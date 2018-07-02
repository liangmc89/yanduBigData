<template>
<q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    景区介绍
  </q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>   
  </q-layout-header>     
   <q-page-container>
   <q-page>
    
    <div class="padding-1rem">
      <section class="no-border-bttom">
      <img class="sec-main-img" src="statics/images/camera6.jpg"/>
    </section>
    <section class="no-border-bttom">
      <div class="sec-title">
        <span class="sec-main-title">景区性质:4A级景区</span>        
      </div>     
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">景区舒适度标准</span>        
      </div>
      <div class="sec-content sec-chart">
        <IEcharts :option='comfort'/>
      </div>
    </section>
    <section class="no-border-bttom">
      <div class="sec-title">
        <span class="sec-main-title">景区最大承载量（单位：千）</span>        
      </div>
     <div class="sec-content sec-chart">
        <IEcharts :option='loadOption'/>
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
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
export default {
  data() {
    return {
      loadOption: {
        title: [
          {
            show: true,
            text: "日最大可承载量",
            textStyle: {
              color: "#787f85",
              fontSize: "10",
              align: "center",
              fontWeith:400
            },
            top: "bottom",
            left: "10%"
          },
          {
            text: "瞬时最大可承载量",
            textStyle: {
              color: "#787f85",
              fontSize: "10",
              align: "center",
              fontWeith:400
            },
            top: "bottom",
            left: "60%"
          }
        ],
        tooltip: {},
        color: ["rgb(251,176,58)", "#67C2E6"],
        series: [
          {
            type: "pie",
            radius: ["0%", "50%"],
            center: ["25%", "45%"],
            data: [{ value: 2.5, name: "2.5" }],
            label: {
              normal: {
                position: "center",
                color: "#787f85",
                fontSize:'26'
              }
            },
            itemStyle: {
              color: "rgba(0,0,0,0)"
            }
            // No encode specified, by default, it is '2012'.
          },
          {
            type: "pie",
            radius: ["0%", "50%"],
            center: ["75%", "45%"],
            data: [{ value: 800, name: "800" }],
            label: {
              normal: {
                position: "center",
                color: "#787f85",
                fontSize:'26'
              }
            },
            itemStyle: {
              color: "rgba(0,0,0,0)"
            }
            // No encode specified, by default, it is '2012'.
          },
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["25%", "45%"],
            data: [{ value: 150, name: "sdf" }, { value: 200, name: "sff" }],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            },
            itemStyle: {
              colors: ["#fff000", "#00ffdd"]
            }
            // No encode specified, by default, it is '2012'.
          },
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["75%", "45%"],
            data: [{ value: 150, name: "sdf" }, { value: 200, name: "sff" }],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            }
          }
        ]
      },
      comfort: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}"
        },

        series: [
          {
            name: "舒适",
            type: "pie",
            selectedMode: false,
            center: ["30%", "50%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "outside",
                align: "left",
                verticalAlign: "top"
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 70
              }
            },
            data: [{ value: 1548, name: "舒   适：20000人以下" }],
            itemStyle: {
              color: "rgb(174,232,255)"
            }
          },
          {
            name: "较舒适",
            type: "pie",
            selectedMode: false,
            center: ["30%", "50%"],
            radius: ["35%", "40%"],

            label: {
              normal: {
                position: "outside",
                align: "right",
                verticalAlign: "bottom"
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 105
              }
            },
            data: [{ value: 1548, name: "较舒适：50000人以下" }],
            itemStyle: {
              color: "rgb(251,176,58)"
            }
          },
          {
            name: "舒适",
            type: "pie",
            selectedMode: false,
            center: ["30%", "50%"],
            radius: ["45%", "50%"],

            label: {
              normal: {
                position: "outside",
                align: "right",
                verticalAlign: "bottom"
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 105
              }
            },
            data: [{ value: 1548, name: "一   般：80000人以下" }],
            itemStyle: {
              color: "rgb(174,232,255)"
            }
          },
          {
            name: "舒适",
            type: "pie",
            selectedMode: false,
            center: ["30%", "50%"],
            radius: ["55%", "60%"],

            label: {
              normal: {
                position: "outside",
                align: "right",
                verticalAlign: "bottom",
                lineHeight: 30
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 50
              }
            },
            data: [{ value: 1548, name: "较拥挤：100000人以下" }],
            itemStyle: {
              color: "rgb(174,232,255)"
            }
          },
          {
            name: "舒适",
            type: "pie",
            selectedMode: false,
            center: ["30%", "50%"],
            radius: ["65%", "70%"],

            label: {
              normal: {
                position: "outside",
                align: "right",
                verticalAlign: "middle",
                lineHeight: 30
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 45
              }
            },
            data: [{ value: 1548, name: "拥   挤：150000人以下" }],
            itemStyle: {
              color: "rgb(174,232,255)"
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
.sec-main-img {
  width: 100%;
  height: auto;
}
</style>
