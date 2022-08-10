import * as THREE from 'three';
import JoyStick from '../../../js/toon3d'
import {Sky} from 'three/examples/jsm/objects/Sky'
import {OBB} from 'three/examples/jsm/math/OBB'

import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const clock = new THREE.Clock();

let player = new THREE.Group()//角色
let ball = new THREE.Vector3()//保存点击坐标
let distVec; //距离
let targetVecNorm;
let colliders = []

//动画
let mixers = []
let action

let labelRenderer


export default class PlayerController {
  constructor(scene, camera, renderer, playerModel, socket) {
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.player = playerModel
    this.socket = socket

    this.target = new THREE.Vector3()
    this.radius = 3;
    this.theta = 0;
    this.phi = 0;
    //控制方式
    this.stateInt = 0

    this.playerAnimationsState = "idle"
    this.playerAnimationsArr = []
    this.planeArr=[]

    this.init()
    this.initScenario(this.scene)
    this.initSky()
  }

  init() {
    let that = this
    that.initPlayer()
    this.scene.add(player)

    this.createCameras()
    window.addEventListener('click', function (ev) {
      that.rayPlane(ev)
    }, false)

    that.setState(this.stateInt)
    that.socketMessage()
    that.initCSS2DRenderer()
  }

  //挂载传入角色与响应动画
  initPlayer() {
    let model = SkeletonUtils.clone(this.player.scene)
    const mixer = new THREE.AnimationMixer(model)
    let walking = mixer.clipAction(this.player.animations[0])
    let idle = mixer.clipAction(this.player.animations[1])
    let run = mixer.clipAction(this.player.animations[2])

    action = {
      walking: walking,
      idle: idle,
      run: run
    }

    mixers.push(mixer)
    player.name = model.name
    player.add(model)
    player.layers.enableAll();

    this.create2DObject(model.name,player)
  }
  create2DObject(name,model){
    const moonDiv = document.createElement( 'div' );
    moonDiv.className = 'label';
    moonDiv.textContent = name;
    moonDiv.style.marginTop = '-1em';
    const moonLabel = new CSS2DObject( moonDiv );
    moonLabel.position.set( 0, 2, 0 );
    model.add( moonLabel );
    moonLabel.layers.set( 0 );
  }
  initCSS2DRenderer(){
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement );
  }

  initScenario(scene) {
    //创建一个地板，如果只有网格，不能得到点击位置的坐标
    let geometry = new THREE.PlaneGeometry(80, 80)
    geometry.rotateX(-Math.PI / 2)
    let mail = new THREE.MeshBasicMaterial({color: 0x696969})
    let plane = new THREE.Mesh(geometry, mail)
    plane.name = 'Plane'
    plane.receiveShadow = true
    scene.add(plane)
    this.planeArr.push(plane)
  }

  rayPlane(ev) {
    ev.preventDefault()
    let getBoundingClientRect = container.getBoundingClientRect()
    // 屏幕坐标转标准设备坐标
    let x = ((event.clientX - getBoundingClientRect.left) / container.offsetWidth) * 2 - 1// 标准设备横坐标
    let y = -((event.clientY - getBoundingClientRect.top) / container.offsetHeight) * 2 + 1// 标准设备纵坐标
    let standardVector = new THREE.Vector3(x, y, 1)// 标准设备坐标
    // 标准设备坐标转世界坐标
    let worldVector = standardVector.unproject(this.camera)
    // 射线投射方向单位向量(worldVector坐标减相机位置坐标)
    let ray = worldVector.sub(this.camera.position).normalize()
    // 创建射线投射器对象
    let rayCaster = new THREE.Raycaster(this.camera.position, ray)
    // 返回射线选中的对象 第二个参数如果不填 默认是false
    let intersects = rayCaster.intersectObjects(this.planeArr, true)

    if (intersects.length > 0) {
      // console.log(intersects)
      if (intersects[0].object.name == "Plane") {
        let targetVec = intersects[0].point
        ball = targetVec.clone()
        distVec = ball.distanceTo(player.position)
        targetVecNorm = new THREE.Vector3().subVectors(targetVec, player.position).normalize();
        action.idle.stop()
        action.run.play()
        this.playerAnimationsState = "run"
      }
    }
  }

  createCameras() {
    let childNode = new THREE.Object3D()
    let playerNode = childNode.clone()
    childNode.name = "childNode"
    playerNode.name = "playerNode"
    player.add(playerNode)
  }

  //天空盒
  initSky() {
    const sky = new Sky()
    sky.scale.setScalar(10000)
    sky.name = "Sky"
    this.scene.add(sky)

    const skyUniforms = sky.material.uniforms;

    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    const parameters = {
      elevation: 2,
      azimuth: 180
    };
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

    let sun = new THREE.Vector3();

    function updateSun() {

      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);

      sun.setFromSphericalCoords(1, phi, theta);

      sky.material.uniforms['sunPosition'].value.copy(sun);
      // water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

      // this.scene.environment = pmremGenerator.fromScene( sky ).texture;
    }

    updateSun();
  }

  move(deltaX, deltaY) {
    this.theta -= deltaX * (0.3 / 2);
    this.theta %= 360;
    this.phi += deltaY * (0.24 / 2);
    this.phi = Math.min(85, Math.max(-85, this.phi));
  }

  handleMouseMove(event, deltaX, deltaY) {
    this.move(deltaX, deltaY);
  }

  setState(state) {
    this.stateInt = state
  }

  thirdPersonCameraControl() {
    let playerNode = this.scene.getObjectByName("playerNode")
    //鼠标右键控制旋转相机
    if (playerNode) {
      let positonCopy = playerNode.getWorldPosition(new THREE.Vector3())
      this.radius = 7
      this.camera.position.x = positonCopy.x + this.radius * Math.sin(this.theta * Math.PI / 180) * Math.cos(this.phi * Math.PI / 180);
      this.camera.position.y = positonCopy.y + this.radius * Math.sin(this.phi * Math.PI / 180);
      this.camera.position.z = positonCopy.z + this.radius * Math.cos(this.theta * Math.PI / 180) * Math.cos(this.phi * Math.PI / 180);
      this.camera.updateMatrix();
      this.camera.lookAt(positonCopy);
    }
  }

  //角色移动
  roleClickMove() {
    if (distVec > 0) {
      distVec -= 0.08;
      player.translateOnAxis(targetVecNorm, 0.08);
      player.rotation.z = 0
    }
    if (distVec == 0 || distVec < 0) {
      action.run.stop()
      action.idle.play()
      this.playerAnimationsState = 'idle'
    }
  }

  //相机旋转
  roleRotation() {
    let actor = this.scene.getObjectByName("Actor")
    let playerNode = this.scene.getObjectByName('playerNode')
    //旋转
    if (distVec > 0.05) {
      playerNode.lookAt(ball.x, 0, ball.z)
      let playerNodeClone = playerNode.quaternion.clone()
      actor.quaternion.slerp(playerNodeClone, 0.1)
    }
  }


  selectController(delta) {
    switch (this.stateInt) {
      case 0:
        //点击地面移动
        this.thirdPersonCameraControl()
        this.roleClickMove()
        this.roleRotation()
        break
      default:
    }
  }

  socketMessage() {
    this.socket.on('message', (message) => {
      let walking
      let idle
      let run
      if (message.id) {
        let model = this.scene.getObjectByName(message.id)
        if (model) {
          model.position.set(message.playerPosition.x, message.playerPosition.y, message.playerPosition.z)
          if (message.playerQuaternion) {
            model.quaternion.set(message.playerQuaternion._x,message.playerQuaternion._y,message.playerQuaternion._z,message.playerQuaternion._w)
          }
      if(this.playerAnimationsArr.length>0){
        this.playerAnimationsArr.forEach(item=>{
          if(item.name==model.name){
            switch (message.state) {
              case "idle":
                item.action.run.stop()
                item.action.idle.play()
                break
              case "run":
                item.action.idle.stop()
                item.action.run.play()
                break
            }
          }
        })
      }
        } else {
          let model = SkeletonUtils.clone(this.player.scene)
          model.name = message.id
          let mixer = new THREE.AnimationMixer(model)
          console.log(mixer)
          walking = mixer.clipAction(this.player.animations[0])
          idle = mixer.clipAction(this.player.animations[1])
          run = mixer.clipAction(this.player.animations[2])
          let obj={
            name:message.id,
            action : {
              walking: walking,
              idle: idle,
              run: run
            }
          }
          this.playerAnimationsArr.push(obj)
          this.scene.add(model)
          this.create2DObject(message.id,model)
          mixers.push(mixer)
        }
      }
    });
  }

  update=()=> {
    const delta = clock.getDelta();
    labelRenderer.render( this.scene, this.camera );
    //动画
    if (mixers) {
      for (const mixer of mixers) mixer.update(delta);
    }
    this.selectController(delta)
    let playerNode = this.scene.getObjectByName('playerNode')
    let obj = {
      playerPosition: player.position,
      playerQuaternion: playerNode.quaternion,
      state: this.playerAnimationsState,
      id: this.player.scene.name,
    }
    this.socket.emit('message', obj);
  }
}
