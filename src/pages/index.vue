<template>
  <q-page class="flex ">
  <div class="content">
    <div class="left">
      <div class="camera-container">
        <div class="flex-wrap">
          <div id="c-1" class="camera-view">
            <div class="c-title">
              <span class="c-corner">1</span>
              <span class="c-detail">{{playerOptions[0].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
            <div class="c-content">
              <video-player  
                         ref="player1"
                         :options="playerOptions[0]"                                              
                         >
          </video-player>
         </div>

          </div>
          <div id="c-2" class="camera-view">
            <div class="c-title">
              <span class="c-corner">2</span>
              <span class="c-detail">{{playerOptions[1].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
            <div class="c-content">
              <video-player  class="vjs-custom-skin"
                         ref="player2"
                         :options="playerOptions[1]"
                         @ready="playerReadied"
                                               
                         >
          </video-player>
              </div>

          </div>
        </div>
        <div class="flex-wrap">
          <div id="c-3" class="camera-view">
            <div class="c-title">
              <span class="c-corner">3</span>
              <span class="c-detail">{{playerOptions[2].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
          <div class="c-content">
              <video-player  class="vjs-custom-skin"
                         ref="player3"
                         :options="playerOptions[2]"
                                             
                         >
          </video-player>
              </div>
          </div>
          <div id="c-4" class="camera-view">
            <div class="c-title">
              <span class="c-corner">4</span>
              <span class="c-detail">{{playerOptions[3].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
         <div class="c-content">
              <video-player  class="vjs-custom-skin"
                         ref="player4"
                         :options="playerOptions[3]"
                                               
                         >
          </video-player>
              </div>
          </div>
        </div>
        <div class="flex-wrap">
          <div id="c-5" class="camera-view">
            <div class="c-title">
              <span class="c-corner">5</span>
              <span class="c-detail">{{playerOptions[4].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
          <div class="c-content">
              <video-player  class="vjs-custom-skin"
                         ref="player5"
                         :options="playerOptions[4]"
                                           
                         >
          </video-player>
              </div>
          </div>
          <div id="c-6" class="camera-view">
            <div class="c-title">
              <span class="c-corner">6</span>
              <span class="c-detail">{{playerOptions[5].sources[0].name}}</span>
              <span class="c-switch"></span>
            </div>
          <div class="c-content">
              <video-player  class="vjs-custom-skin"
                         ref="player6"
                         :options="playerOptions[5]"                                              
                         >
          </video-player>
              </div>
          </div>
        </div>
      </div>
       <div class="map">
        <div class="map-title">
          <div class="year">
            <div class="flow-side">本年度游客总数</div>
            <div class="sides-num">
              <span id="people-year">42346</span>
              <span class="num-unit">人</span>
            </div>
          </div>
          <div class="total">
            <div class="flow-num">今日运行团队数量</div>
            <div class="sides-num">
              <span id="people-all">345</span>
              <span class="num-unit">人</span>
            </div>
          </div>
          <div class="month">
            <div class="flow-side">监控景区数量</div>
            <div class="sides-num">
              <span id="people-month">15</span>
              <span class="num-unit">个</span>
            </div>
          </div>
        </div>
        <baidu-map class="map" id="map" :center="center" :zoom="zoom" @ready="handler">
           <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <my-overlay :marker="currentMarkerObj"  @ShowScreen="ShowScreen"  v-show="currentMarkerObj!=null"></my-overlay>
           <bml-heatmap  :data="heatdata" :max="200" :radius="30" v-if="markerType=='wifi'">
  </bml-heatmap>
   
          <bm-marker autoPan :key=index @click="markerClick(marker)" v-for="(marker,index) in markers" :title="marker.name" v-if="marker.type==markerType" :position="marker.position" :icon="currentMarker==marker.name?{url:'../statics/images/icon-pinA.png',size: {width: 30, height: 35}}:marker.icon"  >
         
           <!-- <bm-label :content="marker.name" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 20}"/> -->
        </bm-marker>
       </baidu-map>
        <div class="map-icon" id="mapIcon">
          <div class="btn " @click="mapbtnClick('bus')" :class="[markerType=='bus'?'sel':'']">
          	<div class="sightSeeingBus"></div>
            <span>游览车</span>
          </div>
          <div class="btn" @click="mapbtnClick('boat')" :class="[markerType=='boat'?'sel':'']">
          	<div class="sightSeeingShip"></div>
            <span>游览船</span>
          </div>
          <div class="btn " @click="mapbtnClick('worker')" :class="[markerType=='worker'?'sel':'']">
          	<div class="workers" ></div>
            <span>工作人员</span>
          </div>
          <div class="btn" @click="mapbtnClick('camera')" :class="[markerType=='camera'?'sel':'']">
          	<div class="camera" ></div>
            <span>摄像头</span>
          </div>
          <div class="btn" @click="mapbtnClick('wifi')" :class="[markerType=='wifi'?'sel':'']">
          	<div class="wifi"></div>
            <span>WiFi对接</span>
          </div>
        </div>
      
       </div>
    </div>
    <div class="right">
      
    <q-tabs>
  <!-- 选项卡 - 注意slot="title" -->
  <q-tab default  slot="title" name="tab-1"  label='实时数据'/>
  <q-tab  slot="title" name="tab-2" label='应急预案与值班' />
 
  

  <!-- 目标 -->
  <q-tab-pane name="tab-1" >
    
      <div class="two-part-wrap"  >  
        <div class="num-view"  >
          <div class="click-zone"></div>
          <div class="b-title">停车场数据监测</div>
          <div class="two-block">
            <div class="num-view-detail" id="remain-time-analysis">
              <IEcharts :option='carStayOpt'/>
            </div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">近日车辆停留时间分析</span>
              <span class="long-block ml3"></span>
            </span>
          </div>
          <div class="two-block fixmt">
            <div class="num-view-detail" id="car-region-analysis">
              <IEcharts :option='carFrom'/>
            </div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">近日车辆来源分析</span>
              <span class="long-block ml3"></span>
            </span>
          </div>
           
        </div>      
        <div class="num-view" >
          <div class="click-zone"></div>
          <div class="b-title">停车场数据监测</div>
          <div class="two-block">
            <div class="num-view-detail" id="parking">
              <div class="echarts">
                <IEcharts
                  :option="bar"      
                  @ready="onReady"
                  @click="onClick"
                />    
              </div>
            </div>
            <span class="num-view-title">
                
              <span class="long-block mr3"></span>
              <span class="t-detail">实时车位变化情况</span>
              <span class="long-block ml3"></span>
            </span>
          </div>
          <div class="two-block fixmt">
            <div class="num-view-detail" id="car">
              <IEcharts :option='Parkinglot'/>
            </div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">近日车流变化</span>
              <span class="long-block ml3"></span>
            </span>
          </div>
        </div>
        
       
      </div>
      <div class="two-part-wrap">
        <div class="num-view" id="ticket">
          <div class="b-title">工作人员监测</div>
          <div class="two-block">
            <div class="num-view-detail" id="ticket-trend">
              <IEcharts :option='ticketSale'/>
            </div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">在岗人数变化</span>
              <span class="long-block ml3"></span>
            </span>
          </div>
          <!-- <div class="two-block fixmt">
            <div class="num-view-detail" id="ticket-channel"></div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">近日售票渠道分析</span>
              <span class="long-block ml3"></span>
            </span>
          </div> -->
        </div>
      </div>
      <div class="two-part-wrap">
        <div class="num-view" id="payment">
          <div class="b-title">景区最大承载量与舒适度</div>
          <div class="two-block">
            <div class="num-view-detail" id="payment-ditch">
              <IEcharts :option='loadOption'/>
            </div>
            <span class="num-view-title">
            <span class="long-block mr3"></span>
            <span class="t-detail">景区最大承载量（单位：千）</span>
            <span class="long-block ml3"></span>
          </span>
          </div>
          <div class="two-block fixmt">
            <div class="num-view-detail" id="payment-type">
              <IEcharts :option='comfortOption'/>
            </div>
            <span class="num-view-title">
            <span class="long-block mr3"></span>
            <span class="t-detail">景区舒适度</span>
            <span class="long-block ml3"></span>
          </span>
          </div>
        </div>
      </div>
      <div class="two-part-wrap">
        
        <div class="num-view " id="netTrack">
          <div class="click-zone"></div>
          <div class="b-title">网络舆情监测 处置追踪</div>
            <div class="trace-wrap">
              
              
            <div class="rectangle-wrap"><div class="rectangle"><span class="no-more-things">暂无更多事件</span><span class="no-more-detail">请通过运营中心系统添加更多需要追踪的正面或负面事件</span></div></div></div>
        </div>
      </div>
      <div class="two-part-wrap">
        <div class="num-view" id="tour">
          <div class="b-title">游客画像分析</div>
          <div class="one-wrap mt3">
            <div class="one-block">
              <div class="num-view-detail" id="gender-analysis">
                <IEcharts :option='abc'/>
              </div>
              <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">游客性别分析</span>
                <span class="long-block ml3"></span>
              </span>
            </div>
            <div class="one-block">
              <div class="num-view-detail" id="age-analysis">
                <IEcharts :option='bbb'/>
              </div>
              <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">游客年龄分析</span>
                <span class="long-block ml3"></span>
              </span>
            </div>
          </div>
          <div class="one-wrap fix-onemt">
            <div class="one-block ">
              <div class="num-view-detail" id="source-analysis">
                <IEcharts ref='chinaMap' :option='chinaMap'/>
              </div>
              <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">游客来源地分析</span>
                <span class="long-block ml3"></span>
              </span>
            </div>
            <div class="one-block ">
              <div class="num-view-detail" id="province">
                <div id="province-list" class="table">
                    <table id="province-rank">
                      <thead>
                      <tr>
                        <th>排名</th>
                        <th>省份</th>
                        <th>人数</th>
                      </tr>
                      </thead>
                      <tbody>
                         <tr>
                        <th>1</th>
                        <th>江苏</th>
                        <th>123500</th>
                      </tr>
                       <tr>
                        <th>2</th>
                        <th>上海</th>
                        <th>30450</th>
                      </tr>
                       <tr>
                        <th>3</th>
                        <th>安徽</th>
                        <th>25431</th>
                      </tr>
                       <tr>
                        <th>4</th>
                        <th>浙江</th>
                        <th>23431</th>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">来源地省份排名</span>
                <span class="long-block ml3"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      
  </q-tab-pane>
  <q-tab-pane name="tab-2">
    <div class="two-part-wrap">
        <div class="num-view dpn" id="emergency">
          <div class="click-zone"></div>
          <div class="b-title">突发事件预警及响应方案</div>
          <div class="emergency-wrap">
            <div class="three-block fixmt13">
              <span class="top">
                <span class="three-top-left">停车场实时预警监控</span>
                <span class="right-left">等级：</span>
                <span id="peopleFlow" class="warn-level1">
                  一级 畅通
                </span>
              </span>
                <span class="bottom plan" data-level="1" data-type="park" @click="showWindow(parkText)">
                点击查看停车场预警应急预案
              </span>
              </div><div class="three-block fixmt13">
              <span class="top">
                <span class="three-top-left">人流实时预警监控</span>
                <span class="right-left">等级：</span>
                <span id="peopleFlow" class="warn-level1">
                  一级 舒适
                </span>
              </span>
                <span class="bottom plan" data-level="1" data-type="visitor" @click="showWindow(peppleText)">
                点击查看人流预警应急预案
              </span>
              </div>
              <div class="three-block">
              <span class="top">
                <span class="more">更多监控项等待接入中...</span>
              </span>
                <span class="no-more-bottom" id="noMore">暂无预警应急预案</span>
              </div>
            
          </div>
        </div>
        <div class="num-view dpn" id="onDuty">
          <div class="click-zone"></div>
          <div class="b-title">突发事件预警及响应方案 值班联络</div>
          <div class="two-block" id="scrollDuty" style="overflow: hidden; display: block;">
            <div id="text-wrap" class="animatedSlideUp" style="display: block; width: 96%; margin: 2%; font-size: 5.52563px;">
              <p style="text-align: center; font-size: 5.52563px;">
                <span style="font-size: 8.68313px; line-height: 31.4286px;">值班领导：吴宝松18913339018</span>
                </p>
                <p style="text-align: center; font-size: 5.52563px;"><span style="font-size: 8.68313px; line-height: 31.4286px;">值班经理：张国平13851593668</span></p>
                <p style="text-align: center; font-size: 5.52563px;"><span style="font-size: 8.68313px; line-height: 31.4286px;">安保人员：邢光禹15951031595</span></p>
                <p style="text-align: center; font-size: 5.52563px;"><span style="font-size: 8.68313px; line-height: 31.4286px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 梅家榜13905148701</span></p>
                <p style="text-align: center; font-size: 5.52563px;"><span style="font-size: 8.68313px; line-height: 31.4286px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 王华林13951647941</span></p>
                <p style="text-align: center; font-size: 5.52563px;"><span style="font-size: 8.68313px; line-height: 31.4286px;">网络值班：杨兴玉18013370068</span></p></div>
            </div>
        </div>
      </div>
     
      
  </q-tab-pane>
 
</q-tabs>

      
     
      
     
      
      <!-- <div class="two-part-wrap">
        <div class="num-view" id="internet">
          <div class="click-zone"></div>
          <div class="b-title">网络舆情监控</div>
          <div class="two-block">
            <div class="num-view-detail" id="consensus-trend"></div>
            <span class="num-view-title">
              <span class="long-block mr3"></span>
              <span class="t-detail">舆情走势图</span>
              <span class="long-block ml3"></span>
            </span>
        </div>
        <div class="one-wrap">
          <div class="one-block">
            <div class="num-view-detail" id="media-liveness"></div>
            <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">媒体活跃度</span>
                <span class="long-block ml3"></span>
              </span>
          </div>
          <div class="one-block">
            <div class="num-view-detail" id="keywords-cloud"></div>
            <span class="num-view-title">
                <span class="long-block mr3"></span>
                <span class="t-detail">关键词云</span>
                <span class="long-block ml3"></span>
              </span>
          </div>
          </div>
        </div>
        <div class="num-view dpn" id="netTrack">
          <div class="click-zone"></div>
          <div class="b-title">网络舆情监测 处置追踪</div>
            <div class="trace-wrap">
              <div class="rectangle-wrap">
                <div class="rectangle">
                  <span class="rectangle-title">事件标题</span>
                  <span class="rectangle-time">2017.05.01 - 2017.05.01</span>
                  <span class="rectangle-detail">人工简介</span>
                  <span class="view-more">详情</span>
                </div>
                <div class="rectangle">
                  <span class="rectangle-title">事件标题</span>
                  <span class="rectangle-time">2017.05.01 - 2017.05.01</span>
                  <span class="rectangle-detail">人工简介</span>
                  <span class="view-more">详情</span>
                </div>
              </div>
              <div class="rectangle-wrap">
                <div class="rectangle">
                  <span class="rectangle-title">事件标题</span>
                  <span class="rectangle-time">2017.05.01 - 2017.05.01</span>
                  <span class="rectangle-detail">人工简介人工简介人工简介人工简介人工简介人工简介人工简介人工简介人工简介人工简介</span>
                  <span class="view-more">详情</span>
                </div>
                <div class="rectangle">
                  <span class="no-more-things">暂无更多事件</span>
                  <span class="no-more-detail">请通过运营中心系统添加更多需要追踪的正面或负面事件</span>
                </div>
              </div>
            </div>
        </div>
      </div> -->
      
    </div>

     <q-dialog
    v-model="customDialogModel"
    stack-buttons
    prevent-close
    primary
   
  >
    <!-- 这里可能使用<q-dialog>的"title"属性 -->
    <span slot="title">应急方案</span>

    <!-- 这里可能使用<q-dialog>的"message"属性 -->
    <div slot="message" v-html="ttt"></div>
   
  </q-dialog>
    
  
    
    
  </div>
  </q-page>
</template>

<style>
@keyframes myfirst {
  0% {
    top: 100%;
  }
  100% {
    top: -150%;
  }
}

.animatedSlideUp {
  animation: myfirst 20s linear 2s infinite normal;
  position: relative;
}

.video-player {
  width: 100%;
  height: 100%;
}
.video-player > div[id^="vjs_video_"] {
  width: 100% !important;
  height: 100% !important;
}
.alert-wrap .alert-con .alert-html {
  position: relative;
  width: 100%;
  height: 100%;
  padding-right: 0.7vw;
  color: #fff !important;
  box-sizing: border-box;
  overflow-x: hidden;
}

.ps-container {
  -ms-touch-action: auto;
  touch-action: auto;
  overflow: hidden !important;
  -ms-overflow-style: none;
}
.modal-content {
  margin-left: -25%;
  width: 50%;
  left: 50%;
  top: 20%;
  position: fixed;
  background-color: rgba(14, 34, 54, 0.9);
  border: 1px solid #99e0fd;
  box-sizing: border-box;
  color: white;
}
.modal-body {
  color: #fff;
}
.q-tab-pane {
  padding: 0;
  border: none;
}
</style>

<script>
import china from "echarts/map/json/china.json";
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/map";
import MyOverlay from "../components/overlay.vue";
import { BmlHeatmap } from "vue-baidu-map";
IEcharts.registerMap("china", china);

export default {
  data() {
    return {
      showss: true,
      customDialogModel: false,
      ttt: "",
      parkText: `<div class="alert-html ps-container ps-theme-default ps-active-y" id="alert-html" data-ps-id="3d5f8821-619e-fa9c-a92d-e466d98891a6" style="font-size: 4.2px;"><div style="font-size: 4.2px;"><br style="font-size: 4.2px;"></div><div style="font-size: 4.2px;"><h3 style="text-align: left; margin-bottom: 0px; font-size: 4.2px;">一、安全应急预案指导方针：</h3><div style="font-size: 4.2px;"><br style="font-size: 4.2px;"></div><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">“以人为本，预防为主，快速反应，联动处置”，把保障游客健康和生命财产安全作为景区首要任务，层层落实责任，形成统一指挥、反应灵敏、协调有序、运转高效的应急管理机制，对各种突发事件做到“早发现、早<span style="line-height: 25.2px; font-size: 4.2px;">报告</span>、早处置”。</p><h3 style="text-align: left; margin-bottom: 0px; font-size: 4.2px;">二、应急处置程序：</h3><p style="margin-bottom: 0px; font-size: 4.2px;">　　</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;">1、发生情况和报告</span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><br style="font-size: 4.2px;"></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">&nbsp; &nbsp; &nbsp; &nbsp;一旦游客在景区内因道路交通事故、火灾、强风、雷击、冰雪灾害或因滑跌、落水、疾病、食物中毒造成人员伤亡，以及遇险、迷途走失等报警求助紧急情况，各工作点（岗位）员工要迅速报告本部门主管（负责人），部门主管（负责人）根据现场情况作紧急处置并迅即报告办公室和应急领导小组当日值班领导。对报告已明确发生了重大安全事故（险情）和人员伤亡的，各级负责人应以最快速度报告集团领导以及相关的公安派出所、交警、旅游质监、安全生产监督、卫生防疫等政府部门。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><br style="font-size: 4.2px;"></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;">2、出发救援</span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;"><br style="font-size: 4.2px;"></span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　安全应急领导小组值班领导接报告后应立即通知安全应急领导小组其他成员，各位成员根据分工做好车辆调度、组织相关人员、准备应急处置装备（工具）、联系有关单位等各项准备工作，集合待命。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　安全应急分队队长以最快速度通知各位队员。所有应急分队队员不论人在何处，无论白天黑夜，必须立即携带通讯、照明等应急装备（工具）赶到指定地点，在应急领导小组值班领导和队长带领下，火速赶赴现场，开展救援处置工作。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><br style="font-size: 4.2px;"></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;">3、现场处置</span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;"><br style="font-size: 4.2px;"></span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　⑴ 情况报告</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　应急分队到达现场后，迅速全面掌握了解情况，随时向安全应急领导小组组长报告事件性质、发生的时间和地点、人员伤亡损失、救援处置进展以及是否需要后继人员和装备支援等情况。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　⑵ 抢救伤员</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　应急队员利用携带的担架、急救箱，尽快将伤员（患者）抬（搀扶）至安全地段，由受过医疗救护专业训练的队员进行基本情况检查并进行精神安抚。根据伤员（患者）情况，或送山下景区游客中心休息康复，对重伤员（患者）直接送下花园区医院诊治。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　⑶ 保护现场</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　设立警戒范围，安排人员在现场警戒、守候（在搜救伤员和紧急排险时，对现场原始状态应作好标记标号），等待有关部门来勘察现场。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　⑷ 疏导游客尽快撤离危险地段。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　⑸ 协助有关部门对事故进行调查。</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><br style="font-size: 4.2px;"></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><span style="font-size: 5.4px;">4、信息汇总</span></p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;">　　应急处置信息中心设在集团办公室</p><p style="margin-bottom: 0px; text-align: left; font-size: 4.2px;"><br style="font-size: 4.2px;"></p></div></div>`,
      peppleText: `<div class="alert-html ps-container ps-theme-default ps-active-y" id="alert-html" data-ps-id="f3350eb2-6d51-c06b-079a-1eff0b39e609" style="font-size: 5.62188px;"><h1 style="margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></h1><h3 style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">一、安全应急预案指导方针：</h3><div style="font-size: 5.62188px;"><br style="font-size: 5.62188px;"></div><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">“以人为本，预防为主，快速反应，联动处置”，把保障游客健康和生命财产安全作为景区首要任务，层层落实责任，形成统一指挥、反应灵敏、协调有序、运转高效的应急管理机制，对各种突发事件做到“早发现、早<span style="line-height: 25.2px; font-size: 5.62188px;">报告</span>、早处置”。</p><h3 style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">二、应急处置程序：</h3><p style="margin-bottom: 0px; font-size: 5.62188px;">　　</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;">1、发生情况和报告</span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">&nbsp; &nbsp; &nbsp; &nbsp;一旦游客在景区内因道路交通事故、火灾、强风、雷击、冰雪灾害或因滑跌、落水、疾病、食物中毒造成人员伤亡，以及遇险、迷途走失等报警求助紧急情况，各工作点（岗位）员工要迅速报告本部门主管（负责人），部门主管（负责人）根据现场情况作紧急处置并迅即报告办公室和应急领导小组当日值班领导。对报告已明确发生了重大安全事故（险情）和人员伤亡的，各级负责人应以最快速度报告集团领导以及相关的公安派出所、交警、旅游质监、安全生产监督、卫生防疫等政府部门。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;">2、出发救援</span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;"><br style="font-size: 5.62188px;"></span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　安全应急领导小组值班领导接报告后应立即通知安全应急领导小组其他成员，各位成员根据分工做好车辆调度、组织相关人员、准备应急处置装备（工具）、联系有关单位等各项准备工作，集合待命。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　安全应急分队队长以最快速度通知各位队员。所有应急分队队员不论人在何处，无论白天黑夜，必须立即携带通讯、照明等应急装备（工具）赶到指定地点，在应急领导小组值班领导和队长带领下，火速赶赴现场，开展救援处置工作。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;">3、现场处置</span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;"><br style="font-size: 5.62188px;"></span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　⑴ 情况报告</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　应急分队到达现场后，迅速全面掌握了解情况，随时向安全应急领导小组组长报告事件性质、发生的时间和地点、人员伤亡损失、救援处置进展以及是否需要后继人员和装备支援等情况。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　⑵ 抢救伤员</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　应急队员利用携带的担架、急救箱，尽快将伤员（患者）抬（搀扶）至安全地段，由受过医疗救护专业训练的队员进行基本情况检查并进行精神安抚。根据伤员（患者）情况，或送山下景区游客中心休息康复，对重伤员（患者）直接送下花园区医院诊治。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　⑶ 保护现场</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　设立警戒范围，安排人员在现场警戒、守候（在搜救伤员和紧急排险时，对现场原始状态应作好标记标号），等待有关部门来勘察现场。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　⑷ 疏导游客尽快撤离危险地段。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　⑸ 协助有关部门对事故进行调查。</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><span style="font-size: 7.22812px;">4、信息汇总</span></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;">　　应急处置信息中心设在集团办公室</p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><p style="text-align: left; margin-bottom: 0px; font-size: 5.62188px;"><br style="font-size: 5.62188px;"></p><div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px; height: 510px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 373px;"></div></div></div>`,
      abc: {
        color: [
          "rgb(4,164,215)",
          "rgb(103,194,230)",
          "#fff",
          "rgb(251,176,58)"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "游客性别比例",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 535,
                name: "男",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
                }
              },
              {
                value: 510,
                name: "女",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
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
      chinaMap: {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["iphone3", "iphone4", "iphone5"]
        },
        gird: {
          left: "10%",
          top: "10%",
          bottom: "10%"
        },
        geo: [
          {
            name: "世界地图",
            type: "map",
            map: "china",
            roam: true,
            selectedMode: "single",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            }
          }
        ],
        series: [
          {
            name: "游客来源",
            type: "map",
            mapType: "china",
            roam: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: "北京", value: Math.round(Math.random() * 1000) },
              { name: "天津", value: Math.round(Math.random() * 1000) },
              { name: "上海", value: Math.round(Math.random() * 1000) },
              { name: "重庆", value: Math.round(Math.random() * 1000) },
              { name: "河北", value: Math.round(Math.random() * 1000) },
              { name: "河南", value: Math.round(Math.random() * 1000) },
              { name: "云南", value: Math.round(Math.random() * 1000) },
              { name: "辽宁", value: Math.round(Math.random() * 1000) },
              { name: "黑龙江", value: Math.round(Math.random() * 1000) },
              { name: "湖南", value: Math.round(Math.random() * 1000) },
              { name: "安徽", value: Math.round(Math.random() * 1000) },
              { name: "山东", value: Math.round(Math.random() * 1000) },
              { name: "新疆", value: Math.round(Math.random() * 1000) },
              { name: "江苏", value: Math.round(Math.random() * 1000) },
              { name: "浙江", value: Math.round(Math.random() * 1000) },
              { name: "江西", value: Math.round(Math.random() * 1000) },
              { name: "湖北", value: Math.round(Math.random() * 1000) },
              { name: "广西", value: Math.round(Math.random() * 1000) },
              { name: "甘肃", value: Math.round(Math.random() * 1000) },
              { name: "山西", value: Math.round(Math.random() * 1000) },
              { name: "内蒙古", value: Math.round(Math.random() * 1000) },
              { name: "陕西", value: Math.round(Math.random() * 1000) },
              { name: "吉林", value: Math.round(Math.random() * 1000) },
              { name: "福建", value: Math.round(Math.random() * 1000) },
              { name: "贵州", value: Math.round(Math.random() * 1000) },
              { name: "广东", value: Math.round(Math.random() * 1000) },
              { name: "青海", value: Math.round(Math.random() * 1000) },
              { name: "西藏", value: Math.round(Math.random() * 1000) },
              { name: "四川", value: Math.round(Math.random() * 1000) },
              { name: "宁夏", value: Math.round(Math.random() * 1000) },
              { name: "海南", value: Math.round(Math.random() * 1000) },
              { name: "台湾", value: Math.round(Math.random() * 1000) },
              { name: "香港", value: Math.round(Math.random() * 1000) },
              { name: "澳门", value: Math.round(Math.random() * 1000) }
            ]
          }
        ]
      },
      bbb: {
        color: ["rgb(4,164,215)", "rgb(103,194,230)"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "游客年龄分析",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 35,
                name: "15岁以下",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
                }
              },
              {
                value: 510,
                name: "16-20岁",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
                }
              },
              {
                value: 310,
                name: "20-30岁",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
                }
              },
              {
                value: 310,
                name: "40-60岁",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
                }
              },
              {
                value: 210,
                name: "60岁以上",
                label: {
                  position: "inside",
                  formatter: "{b} : {c}人",
                  fontSize: 8
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
      loadOption: {
        title: [
          {
            show: true,
            text: "日最大可承载量",
            textStyle: {
              color: "rgb(255,255,255)",
              fontSize: "12",
              align: "center"
            },
            top: "bottom",
            left: "10%"
          },
          {
            text: "瞬时最大可承载量",
            textStyle: {
              color: "rgb(255,255,255)",
              fontSize: "12",
              align: "center"
            },
            top: "bottom",
            left: "60%"
          }
        ],
        tooltip: {},
        color: ["#0492D7", "#67C2E6"],
        series: [
          {
            type: "pie",
            radius: ["0%", "50%"],
            center: ["25%", "45%"],
            data: [{ value: 600, name: "600" }],
            label: {
              normal: {
                position: "center",
                color: "#fff"
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
                color: "#fff"
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
      comfortOption: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}"
        },
        title: {
          bottom: "10%",
          right: "10%",
          textStyle: {
            color: "#fff",
            fontSize: "10",
            fontWeight: 400
          },

          text:
            "舒适：20000人以下\n较舒适：50000人以下\n一般：80000人以下\n较拥挤：100000人以下\n拥挤：150000人以下"
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
                show: false,
                position: "outside",
                fontSize: 6
              }
            },
            labelLine: {
              normal: {
                show: false,
                length2: 100
              }
            },
            data: [{ value: 1548, name: "舒适：20000人以下" }],
            itemStyle: {
              color: "rgb(255,255,255)"
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
                show: false,
                position: "outside",
                fontSize: 6
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 100
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
                show: false,
                position: "outside",
                fontSize: 6
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 100
              }
            },
            data: [{ value: 1548, name: "一般：80000人以下" }],
            itemStyle: {
              color: "rgb(255,255,255)"
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
                show: false,
                position: "outside",
                fontSize: 6
              }
            },
            labelLine: {
              normal: {
                show: true,
                length2: 100
              }
            },
            data: [{ value: 1548, name: "较拥挤：100000人以下" }],
            itemStyle: {
              color: "rgb(255,255,255)"
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
                show: false,
                position: "outside",
                fontSize: 6
              }
            },
            labelLine: {
              normal: {
                show: false,
                length2: 100
              }
            },
            data: [{ value: 1548, name: "拥挤：150000人以下" }],
            itemStyle: {
              color: "rgb(255,255,255)"
            }
          }
        ]
      },
      ticketSale: {
        color: ["rgb(58,19,255)", "#7160CB"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title: {
          text: "团队总人数：95人\n今日在岗人数：85人\n今日休假人数：10人",
          right: "5%",
          bottom: "50%",
          textStyle: {
            lineHeight: "20",
            color: "#fff",
            fontSize: "12",
            fontWeight: "400"
          }
        },
        series: [
          {
            name: "在岗人数",
            type: "pie",
            radius: "55%",
            center: ["30%", "50%"],
            data: [
              {
                value: 85,
                name: "在岗人数",
                label: { show: true, position: "inside", formatter: "{d}%" }
              },
              {
                value: 10,
                name: "休假",
                label: { show: true, position: "inside", formatter: "{d}%" }
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
      Parkinglot: {
        color: ["rgb(251,176,58)", "rgb(4,183,255)"],
        tooltip: {},
        grid: {
          top: "10%",
          bottom: "25%",
          left: 110,
          right: 0
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
            axisLabel: { interval: 0, color: "#fff" },
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
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "车位情况",

            axisLine: { show: false },
            axisLabel: { color: "#fff", show: false },
            axisTick: { show: false },
            splitLine: { show: false }
          }
        ],
        series: [
          {
            barWidth: 8,
            name: "已使用",
            type: "bar",
            data: [120, 320, 350, 380, 470, 110, 430, 224, 0, 0, 0, 0, 0],
            stack: "sd"
          },
          {
            name: "未使用",
            type: "bar",
            data: [480, 280, 250, 220, 130, 490, 170, 376, 600, 600, 600, 600],
            stack: "sd"
          },

          {
            name: "车位使用占比",
            type: "pie",
            center: ["15%", "55%"],
            radius: ["30%", "45%"],
            z: 100,
            data: [
              { value: 35, name: "已使用" },
              { value: 565, name: "未使用" }
            ],
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 5
              }
            }
          }
        ]
      },
      carFrom: {
        color: ["rgb(8,104,157)"],
        grid: {
          top: "15%",
          bottom: "25%",
          left: "15%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        xAxis: {
          type: "category",
          data: ["江苏", "上海", "浙江", "安徽", "湖北", "山东", "广东"],
          // axisLabel: {
          //   color: "rgb(255,255,255)"
          // },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            color: "#fff"
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          max: 300,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false,
            color: "#fff"
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            label: {
              color: "#fff",
              show: true,
              formatter: function(param) {
                return "top" + parseInt(param.dataIndex + 1);
              },
              position: "top"
            },
            barWidth: "10px",
            data: [220, 200, 150, 80, 70, 60, 40],
            type: "bar"
          }
        ]
      },
      carStayOpt: {
        tooltip: {},
        grid: {
          show: true,
          top: "10%",
          bottom: "25%",
          left: "15%"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1小时",
            "3小时",
            "5小时",
            "7小时",
            "9小时",
            "11小时",
            "13小时"
          ],
          axisLabel: {
            color: "rgb(255,255,255)"
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "rgb(255,255,255)"
          }
        },
        series: [
          {
            data: [20, 932, 901, 234, 1090, 340, 130],
            type: "line",
            label: { show: true },
            areaStyle: {
              color: "rgb(8,104,157)"
            },
            lineStyle: {
              color: "rgb(103,194,230)"
            },
            itemStyle: {
              color: "rgb(103,194,230)"
            }
          }
        ]
      },
      bar: {
        tooltip:{},
        color: ["#08689D"],
        grid: {
          top: "10%",
          bottom: "25%",
          left: "10%"
        },
        xAxis: [
          {
            type: "category",
            data: [
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00"
            ],
            axisLabel: {
              color: "rgb(255,255,255)"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "rgb(255,255,255)"
            }
          }
        ],
        series: [
          {
            name: "车位变化情况",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320] 
          }
        ]
      },
      //baidumap options
      heatdata: [
        { lng: 119.833685, lat: 33.180778, count: 20 },
        { lng: 119.833685, lat: 33.180889, count: 90 },
        {lng:119.833766,lat:33.18054,count:150},
        {lng:119.833981,lat:33.180858,count:120},
         {lng:119.833424,lat:33.180737,count:130},
         {lng:119.83346,lat:33.180284,count:130},

         { lng: 119.829813, lat: 33.182006, count: 120 },
        { lng: 119.830783, lat: 33.182021, count: 90 },
        {lng:119.829885,lat:33.181689,count:190},
        {lng:119.830154,lat:33.181432,count:140},
         {lng:119.830226,lat:33.182474,count:130},
         {lng:119.830837,lat:33.18193,count:135},
        // { lng: 119.836685, lat: 33.185778, count: 20 },
        // { lng: 119.833685, lat: 33.180778, count: 20 },
        // { lng: 119.830128, lat: 33.182682, count: 20 },
        // { lng: 119.833577, lat: 33.179101, count: 65 }
        // ...此处添加更多的数据集
      ],
      currentMarkerObj: null,
      center: { lng: 0, lat: 0 },
      zoom: 3,
      markerType: "bus",
      currentMarker: "",
      markers: [
        //車
        {
          name: "AS1084",
          position: { lng: 119.82993, lat: 33.182214 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "bus"
        },
        {
          name: "AS1085",
          position: { lng: 119.833182, lat: 33.182742 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "bus"
        },
        {
          name: "AS1086",
          position: { lng: 119.833936, lat: 33.181081 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "bus"
        },
        {
          name: "AS1087",
          position: { lng: 119.833649, lat: 33.179963 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "bus"
        },
        {
          name: "AS1088",
          position: { lng: 119.833559, lat: 33.179162 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "bus"
        },
        //船
        {
          name: "AS2084",
          position: { lng: 119.832086, lat: 33.182168 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS3085",
          position: { lng: 119.833954, lat: 33.182017 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS4086",
          position: { lng: 119.835374, lat: 33.180476 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS5087",
          position: { lng: 119.828744, lat: 33.18312 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS6088",
          position: { lng: 119.831601, lat: 33.178844 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS7084",
          position: { lng: 119.835284, lat: 33.178119 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },
        {
          name: "AS8085",
          position: { lng: 119.831295, lat: 33.179766 },
          icon: {
            url: "../statics/images/icon-pinB.png",
            size: { width: 30, height: 35 }
          },
          status: "可用",
          type: "boat"
        },

        //工作人員
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
        },

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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "大纵湖旅游度假区-售票处"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "水车"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "樱花大道"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "芦荡迷宫"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "曲桥"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "柳堡门楼"
          },
          type: "camera"
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
            src: "statics/videos/oceans.mp4",
            type: "video/mp4",
            name: "同心岛"
          },
          type: "camera"
        }
      ],
      // videojs options

      playerOptions: [
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "紫藤"
            }
          ],
          poster: ""
        },
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "兴湖塔"
            }
          ],
          poster: ""
        },
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "樱花大道"
            }
          ],
          poster: ""
        },
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "百步金滩"
            }
          ],
          poster: ""
        },
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "曲桥"
            }
          ],
          poster: ""
        },
        {
          autoplay: true,
          loop: true,
          muted: true,
          sources: [
            {
              type: "video/mp4",
              src: "statics/videos/oceans.mp4",
              name: "同心岛"
            }
          ],
          poster: ""
        }
      ]
    };
  },
  mounted: function() {
    var s = this.chinaMaps;
    setInterval(() => {
      this.showss = !this.showss;
    }, 8000);
  },
  computed: {
    chinaMaps() {
      return this.$refs.chinaMap;
    }
  },
  components: {
    MyOverlay,
    BmlHeatmap,
    IEcharts
  },
  methods: {
    showWindow: function(text) {
      this.customDialogModel = true;
      this.ttt = text;
    },
    doRandom() {
      const that = this;
      let data = [];
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min));
      }
      that.loading = !that.loading;
      that.bar.series[0].data = data;
    },
    onReady(instance, ECharts) {
      console.log(instance, ECharts);
    },
    onClick(event, instance, ECharts) {
      console.log(arguments);
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 119.833002;
      this.center.lat = 33.180778;
      this.zoom = 17;
    },
    markerClick: function(marker) {
      this.currentMarker = marker.name;
      this.currentMarkerObj = marker;
    },

    mapbtnClick: function(type) {
      this.markerType = type;
      this.currentMarkerObj = null;
    },
    ShowScreen(num) {
      this.playerOptions[num - 1].sources = [this.currentMarkerObj.video];
    },
    playerReadied(player) {
      // seek to 10s
      console.log("example player 1 readied", player);
      //player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>

