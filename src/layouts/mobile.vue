<template>
  <q-layout style="max-width:414px;max-height:812px;margin:0 auto;overflow-x:hidden;"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
   

    <!-- (Optional) The Footer -->
    

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    

    <q-page-container class="my-root relative-position">
      <!-- This is where pages get injected -->
      <keep-alive>
      <transition :enter-active-class="enter" :leave-active-class="leave" >
      <router-view style="position:absolute;width:100%"/>     
      </transition>
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {
      enter: "animated slideInRight",
      leave: "animated slideOutLeft"
    };
  },
  beforeRouteUpdate(to, from, next) {
    if(to.meta.level==1||to.meta==undefined){
       next(false);  
    }
    if(to.meta.level>from.meta.level){
      this.enter='animated slideInRight';
      this.leave= "animated slideOutLeft";      
     next();
    }else if(to.meta.level<from.meta.level){
      this.enter='animated slideInLeft';
      this.leave= "animated slideOutRight";   
       next();   
    }
    

    
  }
};
</script>

<style>
@import "../css/mobile.css";
.my-root {
  font-size: 62.75%;
}

</style>
