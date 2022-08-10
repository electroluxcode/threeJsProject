import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";


export default class BaseCamera {
  constructor(container,renderer) {
    this.container=container
    this.renderer=renderer
    this.initCamera();
    // this.cameraControls(this.renderer)
  }

  /**
   * 初始化场景
   */
  initCamera() {
    let that=this
    that.camera = new THREE.PerspectiveCamera(50, that.container.clientWidth / that.container.clientHeight, 1, 1000 );
    that.camera.position.set(0, 10, 0)//设置相机位置
    // this.camera.lookAt( 0, 0, 0 );

    // that.controls = new PointerLockControls( this.camera, document.body );

  }



  cameraPointerLockControls(){
    // let that=this
    // window.addEventListener( 'click', function () {
    //   that.controls.lock();
    // });
    //
    // this.scene.add(that.controls.getObject() );
  }

  /**
   * 相机控制
   */
  cameraControls(render) {
    this.controls = new OrbitControls(this.camera, render.renderer.domElement)
    //this.controls.target.set(0,30,0)
    //限制最大仰视角和俯视角
    // this.controls.minPolarAngle = 0
    // this.controls.maxPolarAngle = 1.5
    //禁止缩放
    //this.controls.enableZoom=false
    //缩放限制
    // this.controls.minDistance = 0
    // this.controls.maxDistance = 200
    //是否使用键盘
    this.controls.enableKeys = false

    //是否可以平移
    this.controls.enablePan=false

    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE
    }
  }

}
