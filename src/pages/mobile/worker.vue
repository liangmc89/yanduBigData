<template>
  <q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    值班人员
  </q-toolbar-title>
        <q-btn flat round dense  />
    </q-toolbar>   
  </q-layout-header>
     
   <q-page-container>
   <q-page>
     <div class="padding-1rem">
    <section class="no-border-bttom">
      <div class="sec-title">
        <span class="sec-main-title">今日值班信息</span>        
      </div>
      <div class="sec-content text-center worker">
        <div class="row normal">
          <div class="col-4">值班领导</div>
          <div class="col-3 text-right">吴宝松</div>
          <div class="col-5">18978761456</div>
        </div>
        <div class="row highlight">
          <div class="col-4">值班经理</div>
          <div class="col-3 text-right">张国平</div>
          <div class="col-5">13878761456</div>
        </div>
        <div class="row normal">
          <div class="col-4">安保人员</div>
          <div class="col-3 text-right">邢光禹</div>
          <div class="col-5">18578761456</div>
        </div>
        <div class="row normal">
          <div class="col-4"></div>
          <div class="col-3 text-right">梅家榜</div>
          <div class="col-5">18978761456</div>
        </div>
        <div class="row normal">
          <div class="col-4"></div>
          <div class="col-3 text-right">王华林</div>
          <div class="col-5">13978761456</div>
        </div>
        <div class="row highlight">
          <div class="col-4">网络值班</div>
          <div class="col-3 text-right">杨兴玉</div>
          <div class="col-5">15978761456</div>
        </div>
        
      </div>
    </section>
     </div>
     
      
    </q-page>
  </q-page-container>
  
</q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
.worker{
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.5rem;
}
.highlight{
  background: rgb(51,188,255);
  color: white;
}
.normal{
  background: rgb(214,243,255);
  color: rgb(2,151,255);
  
}
</style>
