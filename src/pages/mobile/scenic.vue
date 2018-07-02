<template>
 <q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    景区介绍
  </q-toolbar-title>
        <q-btn flat round dense  />
    </q-toolbar>  
  </q-layout-header>
     
   <q-page-container>
   <q-page>
  
    <div class="padding-lr-3rem">
    <section class="no-border-bttom">
      <div class="row">
        <div class="col-8 text-left scienc-type">5A级景区</div>
        <div class="col-4 text-right scienc-num">6家</div>        
      </div>
      <div class="row">
        <div class="col-8 text-left scienc-type">4A级景区</div>
        <div class="col-4 text-right scienc-num">5家</div>        
      </div>
      <div class="row">
        <div class="col-8 text-left scienc-type">国家旅游度假村</div>
        <div class="col-4 text-right scienc-num">3家</div>       
      </div>
      <div class="row">
        <div class="col-8 text-left scienc-type">未评级景区</div>
        <div class="col-4 text-right scienc-num">7家</div>        
      </div>      
      <div class="row text-center" style="margin-top:1rem;" @click="$router.push({name:'scenicDetail'})">
        <div class="col-12">
        <img class="scienc-imp" src="statics/images/camera1.jpg">
        <p class="scienc-title">固城湖水慢城城景区</p>
        </div>
      </div>
     <p class="text-center"> <button  class="morebtn">查看更多</button></p>
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
.morebtn{
  color: rgb(2,151,255);
  background: rgb(209,230,255);
  border-radius: 3rem;
  font-size: 1rem;
  padding: .5rem 1rem;
  font-weight: 500;
  border:none;
  user-select: none;
}
.scienc-type{
  color: rgb(152,152,152);
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2rem;
}
.scienc-num{
  color: rgb(2,151,255);
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2rem;
}
.scienc-imp{
  width: 100%;
  height: 300px;
}
.scienc-title{
  color: rgb(2,151,255);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 3rem;  
}
</style>
