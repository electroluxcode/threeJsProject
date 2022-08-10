import { BaseMain } from './baseFrame/BaseMain'
import PlayerController from './modules/controller/PlayerController'
import { LoadResources } from './modules/loadResources/LoadResources'

export default class ModuleMain extends BaseMain {
  constructor(container, config) {
    super(container)
    //模型url地址
    // this.fileUrl = "http://10.10.0.99:8000/api/file/getFile/";
    this.domElement = this.render.renderer.domElement
    this.config = config
    this.init()
  }

  init() {
    this.initMouseMove()
  }

  async initControlRole() {
    let configPlayer = {
      name: this.config.playerName,
      url: "Model/Actor/Actor.gltf"
    }
    this.playerModel = await LoadResources(configPlayer)
    this.controlRole = new PlayerController(this.baseScene.scene, this.baseCamera.camera, this.render.renderer, this.playerModel, this.config.socket)

  }
  //右键旋转摄像机
  initMouseMove() {
    let that = this
    document.documentElement.oncontextmenu = () => {
      return false;
    };
    window.onmousedown = function (ev) {
      if (ev.button == 2) {
        ev.cancelBubble = true
        ev.returnvalue = false;
        document.onmousemove = (ev) => {
          that.controlRole.handleMouseMove(ev, ev.movementX, ev.movementY);
        }
        document.onmouseup = (ev) => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }
  
  initAnimate = () => {

    requestAnimationFrame(this.initAnimate); //请求再次执行渲染函数render
    this.render.renderer.render(this.baseScene.scene, this.baseCamera.camera);//执行渲染操作
    this.controlRole.update()

  }
}
