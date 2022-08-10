import * as THREE from 'three';

export default class BaseRenderer {
  constructor(container) {
    this.container = container;
    this.initRenderer(container)
  }

  /**
   * 初始化场景
   */
  initRenderer(container) {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);//设置渲染区域尺寸
    //this.renderer.setClearColor(0x3f504b, 1); //设置背景颜色
    this.renderer.toneMapping = THREE.ReinhardToneMapping
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);//body元素中插入canvas对象
    this.renderer.shadowMap.enabled = true

    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

    container.appendChild(this.renderer.domElement)

  }
}

