
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },      
    ]},
    {path:'/mobile',
    component:()=>import('layouts/mobile'),
    children:[
      {name:'home',path:'',component:()=>import('pages/mobile/index'),meta:{level:1}},
      {name:'data',path:'data',component:()=>import('pages/mobile/dataAnalysis'),meta:{level:2}},
      {name:'monitor',path:'monitor',component:()=>import('pages/mobile/monitor'),meta:{level:2}},
      {name:'scenic',path:'scenic',component:()=>import('pages/mobile/scenic'),meta:{level:2}},
      {name:'hotel',path:'hotel',component:()=>import('pages/mobile/hotel'),meta:{level:2}},
      {name:'travelAgency',path:'travelAgency',component:()=>import('pages/mobile/travelAgency'),meta:{level:2}},
      {name:'guide',path:'guide',component:()=>import('pages/mobile/guide'),meta:{level:2}},
      {name:'bus',path:'bus',component:()=>import('pages/mobile/bus'),meta:{level:2}},
      {name:'microweb',path:'microweb',component:()=>import('pages/mobile/microweb'),meta:{level:2}},
      {name:'worker',path:'worker',component:()=>import('pages/mobile/worker'),meta:{level:2}},

      {name:'hotelDetail',path:'hotelDetail/:hotelid',component:()=>import('pages/mobile/hotelDetail'),meta:{level:3}},
      {name:'scenicDetail',path:'scenicDetail',component:()=>import('pages/mobile/scenicDetail'),meta:{level:3}}
      

    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
