<template>
  <q-page class="content-pages">
    <q-layout view="hHr LpR lFf">  
  <q-layout-header style="box-shadow:none">
     <q-toolbar color="white" text-color="rgb(80,80,80)">
         <q-btn flat round dense icon="navigate_before" @click="$router.back()"/>
  <q-toolbar-title class="text-center">
    酒店介绍
  </q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>
   <div class="padding-lr-1rem" style="background:white">
    <section style="border-bottom:none">      
       <ul class="hotelfilter">
         <li @click="hotelType(0)" :class="[hotelT==0?'selected':'']">全部</li>
         <li @click="hotelType(5)" :class="[hotelT==5?'selected':'']">五星级（3家）</li>
         <li @click="hotelType(4)" :class="[hotelT==4?'selected':'']">四星级（2家）</li>
         <li @click="hotelType(3)" :class="[hotelT==3?'selected':'']">三星级（1家）</li>
         <li @click="hotelType(1)" :class="[hotelT==1?'selected':'']">民宿（1家）</li>         
       </ul>       
      
    </section>
   </div>
  </q-layout-header>
     
   <q-page-container>
   <q-page>
  
     <div  class="row padding-little" :key="index"  v-for="(hotel,index) in hotels" @click="goDetail(hotel.id)">
          <div class="col-5">
            <img class="hotel-img" :src="hotel.img">
          </div>
          <div class="col-7 hotel-info">
            <p class="hotel-name">{{hotel.name}}</p>
            <p class="hotel-grade">{{hotel.grade}}</p>
            <p class="hotel-address">{{hotel.address}}</p>
            <p style="margin-bottom:0">
              <span class="star" :key="i" v-for="i in hotel.stars"> 
              </span>
            </p>
          </div>
        </div> 
      
    </q-page>
  </q-page-container>
  
</q-layout>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      hotelT: 0,
      hotels: [],
      hotelList: [
        { 
          id:1,
          name: "酒店1",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel1.png"
        },
        { 
          id:2,
          name: "酒店2",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel2.png"
        },
        { 
          id:3,
          name: "酒店3",
          stars: 4,
          address: "地址地质队电子",
          grade: "4星级",
          img: "statics/images/hotel3.png"
        },
        { 
          id:4,
          name: "酒店4",
          stars: 3,
          address: "地址地质队电子",
          grade: "3星级",
          img: "statics/images/hotel4.png"
        },
         {
           id:5,
          name: "酒店5",
          stars: 1,
          address: "地址地质队电子",
          grade: "民宿",
          img: "statics/images/hotel1.png"
        },
        {
          id:6,
          name: "酒店6",
          stars: 5,
          address: "地址地质队电子",
          grade: "5星级",
          img: "statics/images/hotel2.png"
        },
        {
          id:7,
          name: "酒店7",
          stars: 4,
          address: "地址地质队电子",
          grade: "4星级",
          img: "statics/images/hotel3.png"
        }
      ]
    };
  },
  methods: {
    goDetail:function(id){
      this.$router.push({name:'hotelDetail',params:{hotelid:id}});
    },
    hotelType: function(type) {
      this.hotelT = type;
      if (type == 0) {
        this.hotels = this.hotelList.filter(function(s) {
          return s.stars != type;
        });
      } else {
        this.hotels = this.hotelList.filter(function(s) {
          return s.stars == type;
        });
      }
    }
  },
  mounted: function() {
    this.hotelType(0);
  }
};
</script>

<style>

.hotelfilter {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hotelfilter::after {
  display: block;
  clear: both;
  content: "";
}
.hotelfilter li {
  float: left;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(2, 151, 255);
  margin: 0 1.5rem 0 0;
  border-bottom: 2px solid transparent;
}

.hotelfilter .selected {
  border-bottom: 2px solid rgb(251, 176, 58);
}
.hotel-img {
  width: 100%;
}
.hotel-name {
  color: rgb(93, 93, 93);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.hotel-info > p {
  padding: 0 1rem;
}
.hotel-grade {
  color: rgb(152, 152, 152);
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}
.hotel-address {
  color: rgb(152, 152, 152);
  font-size: 1rem;
  margin-bottom: 0.4rem;
  margin-top: .5rem;
}
.star {
  background: url("../../statics/icons/star.png") no-repeat 0 0/100% 100%;
  width: 1rem;
  height: 1rem;
  display: inline-block;
}
</style>
