import BaseCamera from './BaseCamera'
import BaseScene from './BaseScene'
import BaseRenderer from './BaseRenderer'


class BaseMain {
  // 静态回调方法
  static onInitSuccess = () => {};
  static onStart = () => {};
  static onStop = () => {};
  static onExit = () => {};
  static onLoop = () => {};

  constructor(container) {
    console.log(container)
    this.container=container
    this.render=new BaseRenderer(container)
    this.baseScene = new BaseScene(container);
    this.baseCamera = new BaseCamera(container,this.render);
    this.screenAdaptationMonitoring()
  }
  screenAdaptationMonitoring(){
    let that=this
    window.addEventListener('click', function () {
      that.onWindowResize()
    }, false)//屏幕适应监听
    window.addEventListener('resize', function () {
      that.onWindowResize()
    }, false)//屏幕适应监听

  }

  //屏幕自适应
  onWindowResize() {
    this.baseCamera.camera.aspect = this.container.clientWidth / this.container.clientHeight
    this.baseCamera.camera.updateProjectionMatrix()
    this.render.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.render.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

  }
}

export { BaseMain };
