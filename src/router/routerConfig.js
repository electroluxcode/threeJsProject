const routes = [
  {
    path: "data2",
    name: "MainPage2",
    component: () => import("../views/dataBig_2.vue"),
  },
  {
    path: "data1",
    name: "MainPage1",
    component: () => import("../views/dataBig_1.vue"),
  },
  {
    path: "data",
    name: "MainPage1",
    component: () => import("../views/dataBig.vue"),
  },
  {
    path: "",
    name: "MainPage",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "login",
    name: "MainPage1",
    component: () => import("../views/loginElement.vue"),
  },
  {
    path: "backstageManage",
    name: "backstageManage",
    component: () => import("../views/backstageManage.vue"),
    children: [
      {
        path: "userlist",
        component: () => import("../components/Backstage/Userlist.vue"),
      },
      {
        path: "carlist",
        component: () => import("../components/Backstage/Carlist.vue"),
      },
      {
        path: "carstay",
        component: () => import("../components/Backstage/Carstay.vue"),
      },
      {
        path: "buildlist",
        component: () => import("../components/Backstage/Buildinglist.vue"),
      },
      {
        path: "buildstatus",
        component: () => import("../components/Backstage/BuildStatus.vue"),
      },
      {
        path: "raylist",
        component: () => import("../components/Backstage/Raylist.vue"),
      },
      {
        path: "barlist",
        component: () => import("../components/Backstage/Barlist.vue"),
      },
      {
        path: "funnellist",
        component: () => import("../components/Backstage/Funnellist.vue"),
      },
      {
        path: "pielist",
        component: () => import("../components/Backstage/Pielist.vue"),
      },
    ],
  },
 
  {
    path: "apartmentAreaFirst",
    name: "apartmentAreaFirst",
    component: () => import("../views/ApartmentAreaFirst.vue"),
  },
  {
    path: "apartmentArea",
    name: "apartmentArea",
    component: () => import("../views/ApartmentArea.vue"),
  },
  {
    path: "buildingdetail",
    name: "buildingdetail",
    component: () => import("../views/BuildingDetail.vue"),
  },
  {
    path: "chat",
    name: "chat",
    component: () => import("../views/PersonChatAll.vue"),
  },
  {
    path: "video",
    name: "video",
    component: () => import("../views/video.vue"),
  }
];
export default routes;
