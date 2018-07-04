<template>
<q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    实时数据
  </q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>   
  </q-layout-header>     
   <q-page-container>
   <q-page>
    
    <div class="padding-1rem">
    <section>
      <div class="sec-title">
        <span class="sec-main-title">今日售票数</span>        
      </div>
      <div class="sec-content">
        <div class="ticket-zone">
          <span class="ticket-num">1073</span>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">今日入园人数</span><span class="in">345</span>        
      </div>
      <div class="sec-content sec-chart">
        <IEcharts :option='inNum'/>
      </div>
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">实时车位变化情况</span>        
      </div>
     <div class="sec-content sec-chart">
        <IEcharts :option='car'/>
      </div>
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">实时景区舒适度</span>        
      </div>
      <div class="sec-content sec-chart" style="margin-top:0">
        <IEcharts :option='comofort'/>
      </div>
    </section>
    <section>
      <div class="sec-title">
        <span class="sec-main-title">近日售票数量变化</span>        
      </div>
     
       <div class="sec-content sec-chart">
        <IEcharts :option='ticnum'/>
     
      </div>
    </section>  
    <section class="no-border-bttom">
      <div class="sec-title">
        <span class="sec-main-title">近日售票渠道</span>        
      </div>
     <div class="sec-content sec-chart ">
        <IEcharts :option='bbcc'/>
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
  // name: 'PageName',
  data() {
    return {
      ticnum: {
        grid: {
          show: true,         
          top: "17%",
          bottom: "20%"        
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            color: "#787f85"
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#787f85"
          }
        },
        series: [
          {
            data: [20, 932, 325, 234, 1090, 340, 1320],
            type: "line",
            label: {
              show: true,
              formatter: "{c}",
              color: "#787f85"
            },
            areaStyle: {
              color: "rgb(77,167,214)"
            },
            lineStyle: {
              color: "rgb(142,224,252)"
            },
            itemStyle: {
              color: "rgb(142,224,252)"
            }
          }
        ]
      },
      inNum: {
        grid: {
          top: "17%",
          bottom: "20%"
        },
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
            axisLine: {
              lineStyle: {
                color: "#787f85"
              }
            },
            type: "category",
            data: [
              "8：00",
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "分段累计入园",
            min: 0,
            max: 200,
            interval: 20,
            axisLine: {
              lineStyle: {
                color: "#787f85"
              }
            }
          },
          {
            type: "value",
            name: "时段入园",
            min: 0,
            max: 200,
            interval: 20,
            axisLine: {
              lineStyle: {
                color: "#787f85"
              }
            }
          }
        ],
        series: [
          {
            name: "分段累计入园",
            barWidth: "15px",
            type: "bar",
            data: [20, 49, 70, 23, 26, 76, 136, 162, 36, 20, 64, 33]
          },
          {
            name: "时段入园",
            type: "line",
            label: {
              show: true,
              formatter: "{c}"
            },
            yAxisIndex: 1,
            lineStyle: {
              color: "rgb(251,176,58)"
            },
            itemStyle: {
              color: "rgb(251,176,58)"
            },
            data: [20, 49, 70, 23, 26, 76, 136, 162, 36, 20, 64, 33]
          }
        ]
      },
      car: {
        color: ["rgb(251,176,58)", "rgb(4,183,255)"],
        legend: {
          x: "center",
          y: "bottom",
          data: ["已使用", "未使用"]
        },
        grid: {
          show: false,
          top: "17%",
          bottom: "20%",
          left: 180,
          right: 0,
          containLabel: false
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              formatter: function(params) {
                return params.value.replace("\n", "");
              }
            }
          }
        },
        xAxis: [
          {
            type: "category",

            data: [
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
              "19",
              "20"
            ],
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "车位情况",
            nameTextStyle: {
              color: "#787f85"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "已使用",
            type: "bar",
            barWidth: "5px",
            data: [120, 120, 120, 120, 470, 110, 430, 224, 0, 0, 0, 0, 0],
            stack: "sd"
          },
          {
            name: "未使用",
            type: "bar",
            data: [480, 480, 480, 480, 130, 490, 170, 376, 600, 600, 600, 600],
            stack: "sd"
          },

          {
            name: "车位使用占比",
            type: "pie",
            center: ["20%", "55%"],
            radius: ["30%", "40%"],
            z: 100,
            labelLine: {
              length2: "10",
              smooth: true
            },
            data: [
              { value: 35, name: "已使用" },
              { value: 565, name: "未使用" }
            ]
          }
        ]
      },
      bbcc:{
        color: ["rgb(251,176,58)", "rgb(4,183,255)"],        
        grid: {
          show: false,
          top: "17%",
          bottom: "20%",
          left: 100,
         
          
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              formatter: function(params) {
                return params.value.replace("\n", "");
              }
            }
          }
        },
        xAxis: [
          {
            type: "category",            
            data: [
              "散客",
              "合作单位",
              "垂钓酒店",
              "合作酒店",             
            ],
            axisLine: {
              show: false
            },
            
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
              interval:0,
              fontSize:10,
              fontWeight:400,
              color:'#787f85'
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          { 
            max:300,
            type: "value",           
            nameTextStyle: {
              color: "#787f85"
            },
             axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
           
          }
        ],
        series: [
          {
            //name: "散客",
            type: "bar",
            // barWidth: "5px",
            data: [168,55,33,66],
            color:'rgb(4,183,255)',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }

           
          },
          {
           
            type: "bar",
            data: [35, 25, 65,45],            
            color:'rgb(4,183,255)',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
          },
          {
            
            type: "bar",
            data: [44, 33, 14,33],            
            color:'rgb(4,183,255)',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
            
          },
          

          {
            name: "车位使用占比",
            type: "pie",
            center: ["15%", "55%"],
            radius: ["20%", "30%"],
            z: 100,
            labelLine: {
              length2: "10",
              smooth: true
            },
            data: [
              { value: 35, name: "线上" },
              { value: 565, name: "线下" }
            ]
          }
        ]
      },
      comofort: {
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
                length2: 60
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
                length2: 95
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
                length2: 95
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
                length2: 40
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
                length2: 40
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
.in {
  float: right;
  color: #1c87f1;
  margin-top: 0.5rem;
}
.in::after {
  content: "人";
  font-size: 0.6rem;
  color: #787f85;
}
.ticket-zone {
  background: url(../../statics/images/tickets.png) no-repeat 0 0/100% 100%;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
}
.ticket-num {
  line-height: 8vh;
  font-weight: 700;
  position: relative;
  color: #1c87f1;
  font-size: 2rem;
  display: inline-block;
}

.ticket-num::after {
  content: "张";
  font-size: 1rem;
  color: #787f85;
  font-weight: 100;
}
</style>
