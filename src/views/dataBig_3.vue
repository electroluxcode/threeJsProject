<template>
  <div class="dataBig">
    <div
      v-if="this.$route.path !== '/home' && this.$route.path !== '/home2'"
      class="page-title-wrapper"
    >
      <span class="page-title"> 世泊可视化大屏 </span>
      <span class="to-home">
        <router-link to="/home">返回</router-link>
      </span>
    </div>
    <div class="summary" flex>
      <Panel>
        <template slot="inner">
          <div flex="main:justify dir:top" style="height: 100%">
            <!-- <Card>
              <template slot="title">
                <span>本月数据分析</span>
              </template>
              <template slot="content">
                <div flex="main:justify">
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <img src="~@/assets/images/summary/icon_01.png" alt="" />
                    <i class="font">总入库数量</i>
                    <p>
                      <i class="num">{{ month.collection }}</i
                      ><i class="white-font">（条）</i>
                    </p>
                  </span>
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <img src="~@/assets/images/summary/icon_02.png" alt="" />
                    <i class="font">上报数据量</i>
                    <p>
                      <i class="num">{{ month.submit }}</i
                      ><i class="white-font">（条）</i>
                    </p>
                  </span>
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <img src="~@/assets/images/summary/icon_03.png" alt="" />
                    <i class="font">回流数据量</i>
                    <p>
                      <i class="num">{{ month.reflux }}</i
                      ><i class="white-font">（条）</i>
                    </p>
                  </span>
                </div>
              </template>
            </Card> -->
            <Card>
              <template slot="title">
                <span>车库信息</span>
              </template>
              <template slot="content">
                <div flex="main:justify">
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <i class="font">能耗度</i>
                    <p>
                      <i class="num">{{ classify.lv1 }}</i
                      ><i class="white-font">（度）</i>
                    </p>
                  </span>
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <i class="font">电梯楼层</i>
                    <p>
                      <i class="num">{{ classify.lv2 }}</i
                      ><i class="white-font">（层）</i>
                    </p>
                  </span>
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <i class="font">AGV</i>
                    <p>
                      <i class="num">{{ classify.resourceCount }}</i
                      ><i class="white-font">（个）</i>
                    </p>
                  </span>
                  <span class="count-wrapper-item" flex="main:justify dir:top">
                    <i class="font">月卡人数</i>
                    <p>
                      <i class="num">{{ classify.deptCount }}</i
                      ><i class="white-font">（个）</i>
                    </p>
                  </span>
                </div>
                <div>
                  <chart
                    ref="chart1"
                    :options="returnBar(classify.chartData)"
                    style="width: 100%; height: 220px"
                  ></chart>
                </div>
              </template>
            </Card>
            <Card>
           
              <template slot="content" >
                <div class="table" style="margin-top:30px">

                  <chart ref="chart2" :options="returnTrend(timeCar)" style="width: 100%; height: 320px;"></chart>
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Panel>
      <Panel style="padding-left: 0; padding-right: 0" flex="main:justify dir:top">
        <template slot="outer">
          <div flex="dir:top" style="width: 100%">
            <div class="outer-wrapper">
              <div class="tip-wrapper" flex="space:around">
                <div class="tip-item">
                  <div class="tip-item-inner" flex="space:around cross:center">
                    <img src="~@/assets/images/summary/icon_zyxx.png" alt="" />
                    <span class="tip-item-font">
                      <i>当前停车数</i><br />
                      <i class="num">{{ resource.resourceCount }}</i
                      ><i>（个）</i>
                    </span>
                  </div>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                </div>
                <div class="tip-item">
                  <div class="tip-item-inner" flex="space:around cross:center">
                    <img src="~@/assets/images/summary/icon_sjgj.png" alt="" />
                    <span class="tip-item-font">
                      <i>当前空车位</i><br />
                      <i class="num">{{ resource.dataCount }}</i
                      ><i>（个）</i>
                    </span>
                  </div>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                </div>
                <div class="tip-item">
                  <div class="tip-item-inner" flex="space:around cross:center">
                    <img src="~@/assets/images/summary/icon_bygj.png" alt="" />
                    <span class="tip-item-font">
                      <i>当天总收入</i><br />
                      <i class="num">{{ resource.monthCount }}</i
                      ><i>（元）</i>
                    </span>
                  </div>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                  <span class="light-corner"></span>
                </div>
              </div>
            </div>
            <div class="outer-wrapper">
              <!-- <div class="picture" style="width:200px;height:300px"></div> -->
              <div class="picture">
                <canvas id="canvas" style="height: 400px; margin-top: 30px"></canvas>
              </div>

              <div style="margin-left: 70px" class="bottomBtn">
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  class="select"
                  style="line-height: 80px"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-button
                  type="primary"
                  @click="switchMonitor()"
                  style="margin: 10px; margin-left: 110px"
                  >点击切换监控</el-button
                >
              </div>
              <div class="mask-cir-container">
                <div class="mask-inner">
                  <div class="rotate-cir-1"></div>
                  <div class="rotate-cir-2"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Panel>
      <Panel>
        <template slot="inner">
          <div flex="main:justify dir:top" style="height: 100%">
            <Card>
              <template slot="title">
                <span>各楼层车位</span>
              </template>
              <template slot="content">
                <chart
                  ref="chart1"
                  :options="returnComplexBar(floor.chartData)"
                  style="width: 100%; height: 220px"
                ></chart>
              </template>
            </Card>
            <Card>
              <template slot="title" style="z-index: 99">
                <div flex="main:justify">
                  <span>{{ chartTab === 0 ? "车库" : "法人" }}数据分类统计</span>
                  <span class="handle-date" flex="main:justify">
                    <i class="tab active" v-show="chartTab === 0" @click="chartTab = 1"
                      ><i
                        class="iconfont icon-ios-repeat"
                        style="color: #00cbfe; font-size: 18px; vertical-align: top"
                      ></i
                      >法人</i
                    >
                    <i class="tab active" v-show="chartTab === 1" @click="chartTab = 0"
                      ><i
                        class="iconfont icon-ios-repeat"
                        style="color: #00cbfe; font-size: 18px; vertical-align: top"
                      ></i
                      >自然人</i
                    >
                  </span>
                </div>
              </template>
              <template slot="content">
                <chart
                  ref="chart4"
                  :options="returnPie(naturalPersonData)"
                  style="width: 100%; height: 280px"
                ></chart>
              </template>
            </Card>
            <!-- <Card>
            <template slot="title">
              <span>最新填报部门</span>
            </template>
            <template slot="content">
              <div class="table">
                <div class="table-row" flex="main:justify">
                  <span>部门名称</span>
                  <span>资源信息（条）</span>
                </div>
                <div
                  class="table-row"
                  v-for="(item, index) in newestList"
                  :key="index"
                  flex="main:justify"
                >
                  <span>{{ item.name }}</span>
                  <span>{{ item.count }}</span>
                </div>
              </div>
            </template>
          </Card> -->
            <Card style="height: 290px">
              <template slot="title">
                <div flex="main:justify">
                  <span>车库告警记录</span>
                  <span class="handle-date" flex="main:justify"> </span>
                </div>
              </template>
              <template slot="content" class="list">
                <div
                  class="execute-status"
                  @mouseenter="on_swiper_enter"
                  @mouseleave="on_swiper_leave"
                >
                  <div class="table collist">
                    <div
                      class="row"
                      style="background-color: #001739; z-index: 999"
                      flex="space:around"
                    >
                      <div class="col">责任人</div>
                      <div class="col">故障描述</div>
                      <div class="col">状态</div>
                      <div class="col">故障时间</div>
                    </div>
                  </div>
                  <div class="table" style="height: 200px">
                    <swiper ref="mySwiper" style="height: 100%" :options="swiperOptions">
                      <swiper-slide
                        class="row"
                        flex="space:around"
                        :key="index"
                        v-for="(item, index) in punishRewardList"
                      >
                        <div class="col">{{ item.name }}</div>
                        <div class="col">{{ item.info }}</div>
                        <div class="col">{{ item.dept }}</div>
                        <div class="col">{{ item.time }}</div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Panel>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import Panel from "@/components/Panel/Panel";
import Card from "@/components/Card/Card";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// 统一变量
const xyLineColor = "#535e83";
const splitLineColor = "#283353";
export default {
  name: "SummaryMap",
  data() {
    return {
      // 车库告警记录轮播设置
      swiperOptions: {
        direction: "vertical",
        slidesPerView: 6,
        loop: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        },
      },
      options: [
        {
          value: "0",
          label: "D1",
        },
        {
          value: "1",
          label: "D2",
        },
        {
          value: "2",
          label: "C1",
        },
        {
          value: "3",
          label: "C2",
        },
      ],
      value: "",
      //车库告警记录信息
      punishRewardList: [
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
        {
          name: "123456",
          info: "D2安全门",
          dept: "未处理",
          time: "2020-06-02",
        },
      ],

      open: false,
      date: "",
      dateTab: 0,
      chartTab: 0,
      // 左边上面数据分析
      month: {
        collection: 6,
        submit: 0,
        reflux: 0,
      },
      //对应页面上资源信息统计那一栏，左边条形图，车库信息
      classify: {
        lv1: 12,
        lv2: 6,
        resourceCount: 2,
        deptCount: 2,
        chartData: [
          ["product", "电量"],

          ["一号AGV", 30],
          ["二号AGV", 100],
        ],
      },
      //各楼层车位数据
      floor: {
        chartData: [
          ["product", "占用"],

          ["一楼", 30],
          ["二楼", 50],
           ["三楼", 50],
        ],
      },
      // 左边下面资源信息统计图
      classifyList: [
        {
          name: "部门名称一",
          count: 8848,
          percent: 10,
        },
        {
          name: "部门名称一",
          count: 884228,
          percent: 122,
        },
        {
          name: "部门名称二",
          count: 8848,
          percent: 19,
        },
        {
          name: "部门名称一",
          count: 8848,
          percent: 10,
        },
        {
          name: "部门名称一",
          count: 8848,
          percent: 10,
        },
        {
          name: "部门名称一",
          count: 8848,
          percent: 10,
        },
      ],
      //中间上面的展示图
      resource: {
        resourceCount: 32,
        dataCount: 12,
        monthCount: 15521,
      },
      // 右边上面的饼图
      sourceData: [
        {
          value: 10,
          name: "手工填报",
        },
        {
          value: 5,
          name: "et对接",
        },
        {
          value: 565,
          name: "内部接口",
        },
        {
          value: 25,
          name: "其他",
        },
      ],
      // 右边中面的饼图
      naturalPersonData: {
        legalPerson: {
          inner: [
            {
              value: 335,
              name: "业务信息",
            },

            {
              value: 248,
              name: "其他信息",
            },
            {
              value: 248,
              name: "基本信息",
            },
          ],
          outer: [
            {
              value: 335,
              name: "直接访问",
            },
          ],
        },
      },
      //右边下面的图
      newestList: [
        {
          name: "部门名称",
          count: 8848,
          percent: 10,
        },

        {
          name: "部门名称一",
          count: 8848,
          percent: 10,
        },
      ],
      monitor: [
        "ws://localhost:2000/api/stream",
        "ws://localhost:2000/api/stream1",
        "ws://localhost:2000/api/stream2",
        "ws://localhost:2000/api/stream3",
      ],
      monitorController: null,
      //各个时间段
      timeCar: [
        ["product", "月卡用户", "非月卡用户"],
        ["0:00", 1000, 500],
        ["4:00", 1400, 600],
        ["8:00", 2000, 700],
        ["12:00", 1500, 500],
        ["16:00", 1200, 400],
        ["20:00", 1300, 500],
        ["24:00", 1400, 600],
       
      ],
    };
  },
  mounted() {
    // 加载摄像头

    this.monitorController = new JSMpeg.Player(this.monitor[1], {
      canvas: document.getElementById("canvas"),
    });
    // this.renderBall()
    // document.querySelector(".light-bg").style.cssText=("display:none !important")
    // document.querySelector('.picture').load('http://localhost:8081/#/buildingdetail?name=dep1')
    // this.renderMap({ id: "map", mapData: this.mapData });
    // this.$store.dispatch("getMap");
    setTimeout(() => {
      document.body.style.cssText = "overflow:revert";
      document.body.style.cssText = "transfrom:scale(0.1,0.1) !important";
      document.querySelector(".dataBig").style.cssText = "background:rgb(5,8,25) ";
      // document.querySelector(".content").style.cssText=("display:block !important")
    }, 1000);
  },
  computed: {},
  components: {
    Panel,
    Card,

    Swiper,
    SwiperSlide,
  },
  methods: {
    switchMonitor() {
      this.monitorController.stop();
      this.monitorController = new JSMpeg.Player(this.monitor[this.value], {
        canvas: document.getElementById("canvas"),
      });
    },

    mySwiper() {
      // mySwiper 是要绑定到标签中的ref属性
      return this.$refs.mySwiper.swiper;
    },
    on_swiper_enter() {
      this.$refs.mySwiper.$swiper.autoplay.stop();
    },
    on_swiper_leave() {
      this.$refs.mySwiper.$swiper.autoplay.start();
    },
    consoleMessage() {},
    handleClick() {
      this.open = !this.open;
    },
    handleChange(date) {
      this.date = date;
    },
    handleClear() {
      this.open = false;
    },
    handleOk() {
      this.open = false;
    },
    renderBall() {
      function render() {
        const container = document.getElementById("cvsBg");
        const w = container.clientWidth;
        const h = container.clientHeight;
        const cameraDeg = 45;
        const aspect = w / h;
        const near = 0.1;
        const far = 10000;
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const camera = new THREE.PerspectiveCamera(cameraDeg, aspect, near, far);

        const scene = new THREE.Scene();
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(w, h);

        // 附加DOM元素
        container.append(renderer.domElement);

        // 设置球体的值
        let radius = 72;
        let segemnt = 60;
        let rings = 60;
        let sphereGeometry = new THREE.SphereGeometry(radius, segemnt, rings);
        let pMaterial = new THREE.PointsMaterial({
          color: 0xffffff,
          vertexColors: true,
          size: 1,
        });
        let sphere = new THREE.Mesh(sphereGeometry);

        let particleSystem = new THREE.Points(sphereGeometry, pMaterial);

        // let pivotPoint = new THREE.Object3D();// 3d效果
        // sphere.castShadow = sphere.receiveShadow = true
        // sphere.rotation.x = 45
        // sphere.position.x = 0
        // sphere.position.y = 0
        // sphere.add(pivotPoint)// 球 添加3d效果

        let spotLight = new THREE.SpotLight("#ffffff");
        spotLight.position.set(-50, 50, 150);
        spotLight.castShadow = true;
        spotLight.target = sphere;
        spotLight.distance = 0;
        spotLight.angle = 0.8;

        let helper = new THREE.DirectionalLightHelper(spotLight, 50, 0xffffff);

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 400;
        camera.lookAt(scene.position);

        scene.add(camera);
        scene.add(spotLight);
        scene.add(particleSystem);
        // scene.add(sphere)
        // scene.add(helper)

        function animate() {
          requestAnimationFrame(animate);
          particleSystem.rotation.y += 0.001;
          renderer.render(scene, camera);
        }

        animate();
      }

      let init = () => {
        render();
      };
      init();
      window.onresize = init;
    },
    //车库信息
    returnBar(data) {
      const seriesLabel = {};
      return {
        // title: {
        //   text: 'Weather Statistics'  //这个有点丑陋，不建议加上去
        // },
        color: "#00abfb",
        tooltip: {
          //触发类型
          //当trigger为’item’时只会显示该点（散点图）的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
          trigger: "axis",
          axisPointer: {
            //触发数据的范围
            type: "shadow",
          },
        },
        //没鸟用

        //显示的地方
        grid: {
          left: "3%",
          right: "12%",
          bottom: "6%",
          top: "3%",
          //是否显示坐标轴
          containLabel: true,
        },
        dataset: {
          source: data,
        },
        xAxis: {
          type: "value",
          //显示比例 0，100就会贼小
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
          splitLine: { lineStyle: { color: splitLineColor } },
          name: "(百分比)",
        },
        yAxis: {
          type: "category",

          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
        },

        series: [
          {
            //是否显示数字
            // label:{show:true},
            type: "bar",
            showBackground: true,
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#2380f2" },
                { offset: 1, color: "#39BBF3" },
              ]),
            },
          },
          //是否显示label
          {
            label: {
              show: false,
              fontSize: 0,
            },
            type: "bar",
            name: "健康度",
            data: [
              { value: 39, label: { show: false }, labelLine: { show: false } },
              { value: 20, label: { show: true }, labelLine: { show: true } },
            ],

            barWidth: 10,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#2380f2" },
                { offset: 1, color: "#39BBF3" },
              ]),
            },
          },
        ],
      };
    },
    //各个时段停车段
    returnTrend(data) {
      return {
        dataset: {
          source: data,
        },
        color: ["#02b7f4", "#2646c5"],
        title: {
          text: "各个时间段停车",
          textStyle: { color: "#fff" },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },
        legend: {
          textStyle: { color: "#fff" },
          bottom: 0,
        },
        xAxis: [
          {
            axisLine: { lineStyle: { color: xyLineColor } },
            type: "category",
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            position: "left",
            boundaryGap: [0.2, 0.2],
            splitLine: { lineStyle: { color: splitLineColor } },
            axisLine: { lineStyle: { color: xyLineColor } },
            type: "value",
            name: "(条)",
            interval: 500,
            max: 2500,
          },
          {
            position: "right",
            boundaryGap: [0.2, 0.2],
            splitLine: { lineStyle: { color: splitLineColor } },
            axisLine: { lineStyle: { color: xyLineColor } },
            type: "value",
            name: "(个)",
            interval: 500,
            max: 2500,
          },
        ],
        series: [
          {
            smooth: true,
            name: "月卡用户",
            type: "line",
            areaStyle: {},
            yAxisIndex: 1,
          },
          {
            smooth: true,
            name: "普通用户",
            type: "line",
            areaStyle: {},
          },
        ],
      };
    },
    //各楼层车位堆叠图
    //数据传入两个，第一个是占用车位floor，然后是空车位series的数据
    returnComplexBar(data) {
      const seriesLabel = {};
      return {
        // title: {
        //   text: 'Weather Statistics'  //这个有点丑陋，不建议加上去
        // },
        color: "#00abfb",
        tooltip: {
          //触发类型
          //当trigger为’item’时只会显示该点（散点图）的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
          trigger: "axis",
          axisPointer: {
            //触发数据的范围
            type: "shadow",
          },
        },
        //显示的地方
        grid: {
          left: "3%",
          right: "12%",
          bottom: "6%",
          top: "3%",
          //是否显示坐标轴
          containLabel: true,
        },
        dataset: {
          source: data,
        },
        xAxis: {
          type: "value",
          //显示比例 0，100就会贼小
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
          splitLine: { lineStyle: { color: splitLineColor } },
          name: "(百分比)",
        },
        yAxis: {
          type: "category",

          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
        },

        series: [
          {
            stack: "Search Engine",
            //是否显示数字
            label: { show: true },
            type: "bar",
            showBackground: true,
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#2380f2" },
                { offset: 1, color: "#39BBF3" },
              ]),
            },
          },
          //是否显示label
          {
            label: {
              show: false,
              fontSize: 0,
            },
            stack: "Search Engine",
            type: "bar",
            name: "空车位",
            data: [
              { value: 70, label: { show: false }, labelLine: { show: false } },
              { value: 50, label: { show: true }, labelLine: { show: true } },
              { value: 50, label: { show: true }, labelLine: { show: true } },
            ],

            barWidth: 10,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#2380f2" },
                { offset: 1, color: "#39BBF3" },
              ]),
            },
          },
        ],
      };
    },
    returnPie(data) {
      let chartData;
      this.chartTab === 0
        ? (chartData = data.legalPerson)
        : (chartData = data.naturalPerson);
      return {
        color: [
          "#553cff",
          "#fe3b3c",
          "#fb952f",
          "#4dcea7",
          "#00ccff",
          "#0e31e3",
          "#1167e2",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "65%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: "#fff",
              lineHeight: 20,
              align: "center",
              formatter: (p) => p.name + "\n" + p.value + "（条）",
            },
            labelLine: {
              show: false,
            },
            data: chartData.inner,
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["0", "40%"],
            avoidLabelOverlap: false,
            label: {
              align: "center",
              show: true,
              position: "center",
              color: "#fff",
              lineHeight: 20,
              formatter: (p) => p.name + "\n  " + p.value + "（条）",
            },
            labelLine: {
              show: false,
            },
            data: chartData.outer,
          },
        ],
      };
    },
    renderMap(paramObj) {
      var effect = "#06eaed";
      var flyLine = "#ffffff";
      var border = "#105689";
      var bg = "rgba(2,10,34,0.8)";
      var bg1 = "#040c22";
      var chinaGeoCoordMap = {
        黑龙江: [126.642464, 47.756967],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京市: [116.4551, 40.2539],
        徐州市: [117.192941, 34.269397],
        辽宁: [123.1238, 42.1216],
        河北: [115.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [97.4038, 36.8207],
        新疆: [87.617733, 43.792818],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [119.9062, 33.2208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [117.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
        云南: [102.712251, 25.040609],
      };
      var chinaDatas = paramObj.mapData;
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = chinaGeoCoordMap[dataItem[0].name];
          // 中心点坐标
          var toCoord = [117.192941, 34.269397];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem[0].value,
              },
              {
                coord: toCoord,
              },
            ]);
          }
        }
        return res;
      };
      var series = [];
      [["徐州市", chinaDatas]].forEach(function (item, i) {
        series.push(
          {
            type: "lines",
            tooltip: { show: false },
            zlevel: 1,
            effect: {
              show: true,
              period: 5, // 箭头指向速度，值越小速度越快
              trailLength: 0.1, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow",
              symbolSize: [5, 10], // 图标大小
            },
            lineStyle: {
              color: flyLine,
              width: 1, // 尾迹线条宽度
              opacity: 0.1, // 尾迹线条透明度
              curveness: 0.8, // 尾迹线条曲直度
            },
            data: convertData(item[1]),
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              // 涟漪特效
              period: 4, // 动画时间，值越小速度越快
              brushType: "stroke", // 波纹绘制方式 stroke, fill
              scale: 3, // 波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: "right", // 显示位置
                offset: [8, 0], // 偏移设置
                // 圆环显示文字
                formatter: function (params) {
                  return params.data.name;
                },
                fontSize: 13,
              },
              emphasis: {
                show: false,
              },
            },
            symbol: "circle",
            symbolSize: function (val) {
              return 8 + val[2] * 2; // 圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: effect,
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[0].name,
                value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
              };
            }),
          },
          // 标的点
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 2,
            },
            label: {
              textBorderColor: "#000",
              show: true,
              position: "right",
              // offset:[5, 0],
              color: "#00d0ff",
              formatter: "{b}",
              textStyle: {
                fontSize: 22,
                color: "#fff",
              },
              // textShadowColor:'#fff',
              // textShadowBlur:2,
              emphasis: {
                show: true,
                color: "#f60",
              },
            },
            symbol: "pin",
            symbolSize: 30,
            data: [
              {
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
              },
            ],
          }
        );
      });
      var option = {
        tooltip: {
          trigger: "item",
          borderColor: "#FFFFCC",
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: "z-index:100",
          formatter: function (params, ticket, callback) {
            // 根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
          },
        },
        geo: {
          map: "china",
          zoom: 1.2,
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否允许缩放
          itemStyle: {
            normal: {
              color: "rgba(51, 69, 89, 0.2)", // 地图背景色
              // color:'#0f1d37',
              borderColor: border, // 省市边界线00fcff 516a89
              borderWidth: 1,
              shadowColor: bg,
              shadowBlur: 4,
            },
            emphasis: {
              color: "rgba(37, 43, 61, .5)", // 悬浮背景
            },
          },
        },
        series: series,
      };
      var chart = echarts.init(document.getElementById(paramObj.id));
      chart.setOption(option);
    },
  },
};
</script>

<style lang="stylus" scoped>


  $lightBgc = rgba(1, 23, 58, .6)
  $lightBdc = rgba(2, 203, 255, .1)
  $lightShadowColor = rgba(2, 203, 255, .2)
  $fontColor = #02cbff
  $bgc = #050819
  .num
    color $fontColor
    font-weight: 400
    font-size: 22px

  .font
    color #fff
    font-size: 12px

  #app
    height: 100%;
    background-color: $bgc
    overflow-x auto
    overflow-y auto
  i
    font-style normal

  .page-title-wrapper
    background-image: url('~@/assets/images/overview/title_bg.png')
    background-repeat: no-repeat
    -webkit-background-size: auto 72px
    background-size: auto 72px
    background-position: top center
    width: 100%
    text-align center
    height: 80px;
    padding-top: 10px
    position relative

    .to-home
      position absolute
      right: 40px
      bottom 0
      background-color: #0d1b4d
      padding 4px 20px
      -webkit-border-radius: 18px
      -moz-border-radius: 18px
      border-radius: 18px
      cursor pointer

  .page-title
    background-image: -webkit-linear-gradient(bottom, #1fb9fc, #1d80d2, #1850a7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700
    font-size: 36px
    line-height: 40px
    padding 10px 0
    letter-spacing 10px
  .white-font
    color #fff
  .bin-date-picker-cells-cell-range:before{
    background-color: #0f366e !important
  }

.picture{
  margin-left:-45px;
  margin-top:50px

}
.content{
  margin:30px;

  margin-left:-2.5%;
  width:650px;
  height:500px;
  left:600px;
  bottom:200px;
   overflow:hidden;

}
body{
  width:200px

}
$fontColor = #02cbff
$bdw = 2px
$bdh = 2px
.green-font
  color #05f2e4

[flex~="space:around"] {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-around;
  -ms-flex-pack: justify;
  justify-content: space-around
}

.summary
  height: 1000px
  padding 20px 0
  box-sizing border-box

  > div
    &:nth-child(1)
      width 460px
      padding-right: 0

    &:nth-child(2)
      width calc(100% - 920px)

    &:nth-child(3)
      width 460px
      padding-left: 0

  .panel:nth-child(2)
    >>> .light-bg
      display none
      flex none
      width: 50%

    .outer-wrapper
      width: 100%
      height: 100px
      position relative
      &:nth-child(2)
        height: 860px
        background-image: url('~@/assets/images/map/map_bg.png')
        background-repeat: no-repeat
        background-position: center bottom
        position relative
    #map
      width: 100%
      height: 100%
      position relative
      z-index 5
    .tip-wrapper
      position absolute
      top: 0
      left: 0
      width: 100%

      .tip-item
        width: 28%
        height: 100px
        background-image: url('~@/assets/images/summary/data_bg.png')
        position relative

        .light-corner
          content: ''
          display block
          position absolute
          width 8px
          height: 8px

          &:nth-of-type(1)
            top: 0
            left: 0
            border-top: $bdh solid $fontColor
            border-left: $bdw solid $fontColor
            -webkit-border-radius: 2px 0 0 0
            -moz-border-radius: 2px 0 0 0
            border-radius: 2px 0 0 0

          &:nth-of-type(2)
            top: 0
            right: 0
            border-top: $bdh solid $fontColor
            border-right: $bdw solid $fontColor
            -webkit-border-radius: 0 2px 0 0
            -moz-border-radius: 0 2px 0 0
            border-radius: 0 2px 0 0

          &:nth-of-type(3)
            bottom: 0
            left: 0
            border-bottom: $bdh solid $fontColor
            border-left: $bdw solid $fontColor
            -webkit-border-radius: 0 0 0 2px
            -moz-border-radius: 0 0 0 2px
            border-radius: 0 0 0 2px

          &:nth-of-type(4)
            bottom: 0
            right: 0
            border-bottom: $bdh solid $fontColor
            border-right: $bdw solid $fontColor
            -webkit-border-radius: 0 0 2px 0
            -moz-border-radius: 0 0 2px 0
            border-radius: 0 0 2px 0

        .tip-item-inner
          height: 100%
          padding-left: 20px
          line-height: 30px

        &:nth-of-type(1)
          .tip-item-font
            color #17d2e8

            .num
              color inherit

        &:nth-of-type(2)
          .tip-item-font
            color #02fbec

            .num
              color inherit

        &:nth-of-type(3)
          .tip-item-font
            color #065bf7

            .num
              color inherit

    .float-tip-wrapper
      position absolute
      left: 0
      width: 100%

      .float-tip-wrapper-item
        color #fff

        > span
          padding-bottom: 6px
        animation float-tip infinite ease-in-out 6s

      &.float-1
        padding 0 160px
        top: 140px

      &.float-2
        padding 0 60px
        top: 280px

    .tip-wrapper
      position absolute
      top: 0
      left: 0
      width: 100%

      .tip-item
        width: 28%
        height: 100px
        background-image: url('~@/assets/images/summary/data_bg.png')
        position relative

        .light-corner
          content: ''
          display block
          position absolute
          width 8px
          height: 8px

          &:nth-of-type(1)
            top: 0
            left: 0
            border-top: $bdh solid $fontColor
            border-left: $bdw solid $fontColor
            -webkit-border-radius: 2px 0 0 0
            -moz-border-radius: 2px 0 0 0
            border-radius: 2px 0 0 0

          &:nth-of-type(2)
            top: 0
            right: 0
            border-top: $bdh solid $fontColor
            border-right: $bdw solid $fontColor
            -webkit-border-radius: 0 2px 0 0
            -moz-border-radius: 0 2px 0 0
            border-radius: 0 2px 0 0

          &:nth-of-type(3)
            bottom: 0
            left: 0
            border-bottom: $bdh solid $fontColor
            border-left: $bdw solid $fontColor
            -webkit-border-radius: 0 0 0 2px
            -moz-border-radius: 0 0 0 2px
            border-radius: 0 0 0 2px

          &:nth-of-type(4)
            bottom: 0
            right: 0
            border-bottom: $bdh solid $fontColor
            border-right: $bdw solid $fontColor
            -webkit-border-radius: 0 0 2px 0
            -moz-border-radius: 0 0 2px 0
            border-radius: 0 0 2px 0

        .tip-item-inner
          height: 100%
          padding-left: 20px
          line-height: 30px

        &:nth-of-type(1)
          .tip-item-font
            color #17d2e8

            .num
              color inherit

        &:nth-of-type(2)
          .tip-item-font
            color #02fbec

            .num
              color inherit

        &:nth-of-type(3)
          .tip-item-font
            color #065bf7

            .num
              color inherit

  .mid-animation
    position absolute
    top: 50%
    left: 50%
    transform translate(-50%, -50%)
    height: 300px;
    width: 100%;

    img
      &:nth-child(1)
        position absolute
        top: 0
        left: 50%
        transform translateX(-50%)
        z-index 10

      &:nth-child(2)
        position absolute
        top: 200px
        left: 50%
        transform translateX(-50%)

      &:nth-child(3)
        position absolute
        top: 300px
        left: 50%
        transform translateX(-50%)

  .count-wrapper-item
    text-align center
    flex 1
    width 30px
    height 120px
    background-color: #001739
    background-image: url('~@/assets/images/summary/data_bg.png')
    margin: 30px 3px
    padding-top: 10px
    padding-bottom: 10px

    img
      width 40px
      height auto
      margin: 10px auto

    i
      line-height: 26px

  .table
    margin-top: 10px
    padding-bottom: 14px

    .table-row
      line-height: 32px

      &:nth-child(odd)
        background-color: #001739

      span
        flex: 1
        text-align center
        color #ffffff
        padding 0 10px
        &:last-child
          display block
          width 120px
          text-align center
      &:nth-child(n+2)
        span:nth-child(2)
          color #00ccfe

      &:nth-child(n+2)
        span:nth-child(3)
          color #02d8cf

.handle-date
  font-size: 12px
  white-space nowrap

  i, a
    font-size: 12px
    line-height: 28px

  .active
    background-color: #0d1b4d

  .tab
    padding: 0 10px;
    display inline-block
    white-space nowrap
    line-height: 28px
    height: 28px
    margin-right: 4px
    -webkit-border-radius: 14px
    -moz-border-radius: 14px
    border-radius: 14px
    cursor pointer

.handle-date >>> .bin-select-dropdown
  background-color: #051028
  font-size: 12px

.mask-cir-container
  position absolute
  z-index 2
  bottom: 60px
  left: 50%
  transform translateX(-50%)
  width: 800px
  height: 150px
  .mask-inner
    position relative
    // transform scale(10)
    /*
    &::before
      position absolute
      left: 50%;
      transform translateX(-50%)
      bottom: 10px;
      content: '';
      display: inline-block;
      width: 358px;
      height: 90px;
      background-color: rgba(5, 8, 25, 1);
      z-index: 2;
      border-radius: 200px 0 200px 0

     */
    .rotate-cir-1
      position absolute
      z-index 1
      width 80px
      height: 80px
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      border: 1px dashed #11387f
      left: 50%
      animation rotate linear 10s infinite
      text-align center
    .rotate-cir-2

      border-style solid
      animation shadow-light infinite linear 3s
      transform:translate(-50%,15px) rotateX(80deg) rotateZ(0) scale(10)

@keyframes rotate {
  0% {
    transform: translate(-50%, -10px) rotateX(80deg) rotateZ(0) scale(10)
  }
  50% {
    transform: translate(-50%, -10px) rotateX(80deg) rotateZ(0.5turn) scale(10)
  }
  100% {
    transform: translate(-50%, -10px) rotateX(80deg) rotateZ(1turn) scale(10)
  }
}

@keyframes shadow-light {
  0% {
    box-shadow: 0 0 4px rgba(20, 140, 250, 0.2), 0 0 4px rgba(20, 140, 250, 0.2) inset
  }
  50% {
    box-shadow: 0 0 10px rgba(20, 140, 250, 0.5), 0 0 10px rgba(20, 140, 250, 0.5) inset
  }
  100% {
    box-shadow: 0 0 4px rgba(20, 140, 250, 0.2), 0 0 4px rgba(20, 140, 250, 0.2) inset
  }
}
  .execute-status
      margin-top: 10px

      .table
        .row
          padding-left: 10px

          &:nth-child(even)
            background-color: #001739

          .col
            width: 26%
            color #fff
            line-height: 40px
</style>
<style scope>
.page-title-wrapper {
  margin-top: -1%;
  transform: scale(0.7, 0.7);
}
.panel .light-bg {
  top: -20%;
  /* 控制宽 高 */
  transform: scale(0.8, 0.8);
}
.tip-wrapper {
  transform: scale(1.1);
}
.light-bg {
  /* margin-left: 40px; */
}
.rotate-cir-1 {
  bottom: 40%;
}
.list {
}
</style>
<style scoped>
@import "./swiper/css/swiper.css";
</style>
