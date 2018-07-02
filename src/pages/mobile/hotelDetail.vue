<template>
  <q-page >
     <q-layout view="hHr LpR lFf">  
       <q-layout-header style="box-shadow:none">
    <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    {{hotel.name}}
  </q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>
    <div class="padding-lr-1rem">
    <q-card   style="box-shadow:none; border-bottom:1px solid rgb(215,217,225); background:white;">
      <q-card-media>
        <img :src="hotel.img">
      </q-card-media>
      <q-card-title>
        {{hotel.address}}
        <q-rating disable slot="subtitle" v-model="hotel.stars" :max="5" />
        <span slot="right" class="row items-center sss">
           5星级
        </span>
      </q-card-title>
    </q-card>
    </div>
   </q-layout-header>

    <q-page-container>
   <q-page>
     <div class="padding-lr-1rem">
    <div class="row room">
      <div class="col-5 ">
        <img class="room-img" src="statics/images/hotel2.png">
      </div>
      <div class="col-7">
        <p class="room-type">豪华超大床房</p>
        <p>
         <span class="total">总数 15</span><span class="remain">空房 3</span>
        </p>
      </div>
    </div>
    <div class="row room">
      <div class="col-5">
        <img class="room-img" src="statics/images/hotel3.png">
      </div>
      <div class="col-7">
        <p class="room-type">舒适大床房</p>
        <p>
         <span class="total">总数 15</span><span class="remain">空房 3</span>
        </p>
      </div>
    </div>
    <div class="row room" style="margin-bottom:2rem;">
      <div  class="col-5">
        <img class="room-img" src="statics/images/hotel1.png">
      </div>
      <div class="col-7">
        <p class="room-type">标准双床房</p>
        <p>
         <span class="total">总数 15</span><span class="remain">空房 3</span>
        </p>
      </div>
    </div>
    </div>
   </q-page>
    </q-page-container>
    
     </q-layout>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      hotel: {},
      hotelList: [
        {
          id: 1,
          name: "酒店1",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel1.png"
        },
        {
          id: 2,
          name: "酒店2",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel2.png"
        },
        {
          id: 3,
          name: "酒店3",
          stars: 4,
          address: "地址地质队电子",
          grade: "4星级",
          img: "statics/images/hotel3.png"
        },
        {
          id: 4,
          name: "酒店4",
          stars: 3,
          address: "地址地质队电子",
          grade: "3星级",
          img: "statics/images/hotel4.png"
        },
        {
          id: 5,
          name: "酒店5",
          stars: 1,
          address: "地址地质队电子",
          grade: "民宿",
          img: "statics/images/hotel1.png"
        },
        {
          id: 6,
          name: "酒店6",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel2.png"
        },
        {
          id: 7,
          name: "酒店7",
          stars: 4,
          address: "地址地质队电子",
          grade: "4星级",
          img: "statics/images/hotel3.png"
        }
      ]
    };
  },

  mounted: function() {
    var id = this.$route.params.hotelid;
    this.hotel = this.hotelList.filter(function(h) {
      return h.id == id;
    })[0];
  }
};
</script>

<style>
.sss {
  color: white;
  background: rgb(2, 151, 255);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
}
.room-img {
  width: 100%;
}
.room {
  margin-top: 1rem;
}
.room-type {
  color: rgb(93, 93, 93);
  font-size: 1.2rem;
  margin: 1.5rem 1rem;
  font-weight: 500;
}
.total {
  padding: 0.3rem 0.7rem;
  margin: 0 1rem;
  border-radius: 0.8rem;
  background: rgb(2, 151, 255);
  color: white;
  font-size: 0.8rem;
}
.remain {
  padding: 0.3rem 0.7rem;
  margin: 0 1rem;
  border-radius: 0.8rem;
  background: rgb(251, 176, 58);
  color: white;
  font-size: 0.8rem;
}
</style>
