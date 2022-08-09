// es5
// module.exports = {
//   language: {
//     language: "语言",
//     zh: "中文",
//     en: "英文",
//     switch: "English",
//   },
// };

// es6写法
const moduleLanguage = {
  language: {
    zh: "汉语",
    en: "藏语",
  },
  menuTitle: {
    title: "数据管理后台",
    userManage: "用户管理",
    cityManage: "城市管理",
    iconManage: "图标管理",
    userlist: "用户列表",
    index: "首页",
  },
  menuList: {
    carList: "车辆列表",
    carTime: "车辆停车时长",
    buildingList: "层级车载数",
    buildingStatus: "故障处理",
  },
  chartsList: {
    rayChart: "雷达图",
    barChart: "柱状图",
    funnelChart: "漏斗图",
    pieChart: "饼图",
  },
  Userlist: {
    inputContent:"请输入内容",
    addUser: "添加用户",
    newUser: "新增用户",
    inputUser: "请输入用户名",
    inputPassword: "请输入密码",
    ensurePassword: "请输入密码",
    cancel: "取消",
    ensureBtn: "确定",
    name: "姓名",
    password: "密码",
    role: "角色",
    operate: "操作",
    admin: "超级管理员",
    user:"普通用户"
  },
  Carlist: {
    operate: "操作",
    truck: "卡车",
    car: "汽车",
    bus: "巴士",
    carCount: "车辆",
    license: "车牌",
    startTime: "出发日期",
  },
  Carstay: {
    building: '建筑',
    stayTime: "停留时长(时)",
    operate: "操作",
  },
  Buildinglist: {
    building: "建筑楼房",
    basketball: "篮球场",
    carpark: "停车场",
    buildingname: "建筑",
    livecount: "居住人数",
    floorcount: "层数",
    basketballname: "篮球场",
    isempty: "是否空闲",
    surpluscount: "空闲车位",
    status: "出入状态",
    operate:"操作"
  },
  BuildStatus: {
    name: "建筑",
    status: "当前状态(0:正常,1:火灾,2:紧急需求,3:危险情况)",
    operate:"操作"
  },
  Barlist: {
    moment: "时刻",
    forecastLive: "预计入住户数",
    realLive: "实际入住户数",
    operate:"操作"
  },
  FunnelList: {
    buildId: "建筑Id",
    age: "年龄段",
    count: "人数",
    operate:"操作"
  },
  PieList: {
    name: "名称",
    height: "高度",
    floor: "楼层数",
    square: "面积",
    maleCount: "男性人数",
    femaleCount: "女性人数",
    operate:"操作"
  }
};
export default moduleLanguage;
