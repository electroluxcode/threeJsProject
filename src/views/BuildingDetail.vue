<template>
  <div class="BuildingDetail">
    <header class="header">
      <h3>停车场信息分析</h3>
      <div class="backBtn" @click="$router.go(-1)">返回</div>
    </header>
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row fill-h box">
          <div class="left fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-1">
              <div class="xpanel no-bg">
                <div class="fill-h" id="vr_container"></div>
              </div>
            </div>
          </div>
          <div class="right fill-h">
            <div class="xpanel-wrapper xpanel-wrapper-1-3">
              <div class="xpanel">
                <div class="fill-h right_Box">
                  <div class="left_top">
                    <div>停车厂名字：{{ infoList.name }}</div>
                    <div style="margin: 10px 0 0 0">
                      <!-- {{ infoList.height }} -->
                      今日收入：1200
                    </div>

                    <div style="margin: 10px 0 10px 0">层数：{{ infoList.floor }}</div>
                    <div>占地面积：{{ infoList.square }}</div>
                  </div>
                  <div class="right_top" id="pieTest"></div>
                </div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-2-3">
              <div class="xpanel">
                <div class="fill-h" id="container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as echarts from "echarts";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { buildingDetail } from "@/requestApi/city";
export default {
  data() {
    return {
      scene: null,
      camera: null,
      mesh: null,
      renderer: null,
      controls: null,
      vr_scene: null,
      vr_camera: null,
      vr_renderer: null,
      vr_controls: null,
      ball_mesh: null,
      step: 0,
      name: this.$route.query.name,
      loading: true,
      sum: 0,
      testdata: [
        { value: 47, name: "20以下" },
        { value: 100, name: "20-30岁" },
        { value: 55, name: "30-40岁" },
        { value: 80, name: "40-50岁" },
        { value: 60, name: "60岁以上" },
      ],
      infoList: {
        name: "",
        height: "",
        floor: 0,
        square: "",
        malecount: 0,
        femalecount: 0,
      },
      ageStructure: {},
      agelst: [],
    };
  },
  mounted() {
    this.container = document.querySelector("#container");
    this.vrContainer = document.querySelector("#vr_container");
    this.init();
    this.initControls();
    this.initLight();
    this.buildingDetailMed();
    this.initBall();
    this.initModel(this.name).then(() => {
      console.log(this.name, "模型名字");
      this.loading = false;
      this.anmiation();
    });
    this.resize();
  },
  methods: {
    goToDetail() {
      this.$router.push({ path: "buildingdetail?name=dep1" });
    },
    init() {
      // 1.创建场景
      this.scene = new THREE.Scene();
      this.vr_scene = new THREE.Scene();
      // 2.创建摄像机
      this.camera = new THREE.PerspectiveCamera(
        70,
        this.container.clientWidth / this.container.clientHeight,
        10,
        10000
      );
      this.vr_camera = new THREE.PerspectiveCamera(
        70,
        this.vrContainer.clientWidth / this.vrContainer.clientHeight,
        0.1,
        1000
      );
      //    3.创建threejs渲染器
      this.renderer = new THREE.WebGLRenderer();
      this.vr_renderer = new THREE.WebGLRenderer();
      // 4.设置渲染器场景的大小
      this.renderer.setClearColor(new THREE.Color("#0f1c30"));
      this.vr_renderer.setClearColor(new THREE.Color("#0f1c30"));
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.vr_renderer.setSize(
        this.vrContainer.clientWidth,
        this.vrContainer.clientHeight
      );
      // 设置渲染物体阴影
      this.renderer.shadowMap.enabled = true;
      this.vr_renderer.shadowMap.enabled = true;
      // 把渲染器添加到页面当中去
      this.container.appendChild(this.renderer.domElement);
      this.vrContainer.appendChild(this.vr_renderer.domElement);
      //  创建控制器
      this.camera.position.set(-200, 200, 370);
      this.camera.lookAt(this.scene.position);
      this.vr_camera.position.set(0, 0, 0.1);
      this.vr_camera.lookAt(this.vr_scene.position);
    },
    initControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = true;
      //是否可以缩放
      this.controls.enableZoom = true;
      //是否自动旋转
      this.controls.autoRotate = false;
      //设置相机距离原点的最近距离
      this.controls.minDistance = 50;
      //设置相机距离原点的最远距离
      this.controls.maxDistance = 5000;
      //是否开启右键拖拽
      this.controls.enablePan = true;
      // 最大角度
      this.controls.maxPolarAngle = Math.PI / 2.2;

      this.vr_controls = new OrbitControls(this.vr_camera, this.vr_renderer.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.vr_controls.enableDamping = true;
      //是否可以缩放
      this.vr_controls.enableZoom = true;
      //是否自动旋转
      this.vr_controls.autoRotate = false;
      //设置相机距离原点的最近距离
      this.vr_controls.minDistance = 5;
      //设置相机距离原点的最远距离
      this.vr_controls.maxDistance = 5000;
      //是否开启右键拖拽
      this.vr_controls.enablePan = true;
      // 最大角度
      this.vr_controls.maxPolarAngle = Math.PI / 2.2;
    },
    initLight() {
      const PointLight = new THREE.PointLight(0xffffff, 0.6);
      const vrPointLight = new THREE.PointLight(0xffffff, 0.6);
      this.scene.add(PointLight);
      this.vr_scene.add(vrPointLight);
      const ambient = new THREE.AmbientLight(0xffffff);
      const vr_ambient = new THREE.AmbientLight(0xffffff);
      this.scene.add(ambient);
      this.vr_scene.add(vr_ambient);
      this.camera.add(PointLight);
      this.vr_camera.add(vr_ambient);
    },
    initModel(name) {
      console.log(name)
      return new Promise((resolve, reject) => {
        new MTLLoader().setPath("/static/obj/").load(`city.mtl`, (materials) => {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .setPath("/static/obj/")
            .load(`city.obj`, (obj) => {
              if (obj) {
                // obj.children.forEach((child) => {
                //   if (child.name != name ) {
                //     console.log(child);
                //     child.geometry.computeBoundingBox();
                //     const centroid = new THREE.Vector3();
                //     centroid.addVectors(
                //       child.geometry.boundingBox.min,
                //       child.geometry.boundingBox.max
                //     );
                //     centroid.multiplyScalar(0.5);
                //     centroid.applyMatrix4(child.matrixWorld);
                //     child.geometry.center(centroid.x, centroid.y, centroid.z);
                //     child.scale.set(0.3, 0.3, 0.3);
                //     child.position.set(0, 20, 0);
                //     child.rotateY(-Math.PI / 2);
                //     this.scene.add(child);
                //   }
                // });
                // obj.geometry.computeBoundingBox();
                // const centroid = new THREE.Vector3();
                // centroid.addVectors(
                //   obj.geometry.boundingBox.min,
                //   obj.geometry.boundingBox.max
                // );
                // centroid.multiplyScalar(0.5);
                // centroid.applyMatrix4(obj.matrixWorld);
                // obj.geometry.center(centroid.x, centroid.y, centroid.z);
                obj.scale.set(0.3, 0.3, 0.3);
                obj.position.set(0, 20, 0);
                obj.rotateY(-Math.PI / 2);
                this.scene.add(obj);
                resolve(obj);
              } else {
                reject("error");
              }
            });
        });
      });
    },
    initBall() {
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const loader = new RGBELoader();
      loader.setPath("static/images/").load("hdr/Living.hdr", (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.geometry.scale(1, 1, -1);
        this.vr_scene.add(sphere);
      });
    },
    initEchart() {
      const chartDom = document.querySelector("#pieTest");
      const pagechart = echarts.init(chartDom);
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: this.infoList.malecount, name: "付费月卡人数" },
              { value: this.infoList.femalecount, name: "普通用户人数" },
            ],
          },
        ],
      };
      pagechart.setOption(option);
    },
    buildingDetailMed() {
      buildingDetail().then((res) => {
        console.log(res.data, "res.data.detail");
        res.data.detail.forEach((item) => {
          if (item.name === this.$route.query.name) {
            this.infoList.name = item.name;
            this.infoList.height = item.height;
            this.infoList.floor = item.floor;
            this.infoList.square = item.square;
            this.infoList.malecount = item.malecount;
            this.infoList.femalecount = item.femalecount;
            this.ageStructure = item.Funnelcharts;
          }
        });
        this.ageStructure.forEach((element) => {
          const { value, name } = element;
          this.agelst.push({ value, name });
        });
        this.initEchart();
      });
    },
    // 动画
    anmiation() {
      requestAnimationFrame(this.anmiation);
      this.controls.update();
      this.vr_controls.update();
      this.renderer.render(this.scene, this.camera);
      this.vr_renderer.render(this.vr_scene, this.vr_camera);
    },
    // 动态设置屏幕宽高占比
    resize() {
      window.addEventListener("resize", () => {
        // 初始化摄像机
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      });
    },
  },
};
</script>

<style src="../assets/css/page/app.css"></style>
