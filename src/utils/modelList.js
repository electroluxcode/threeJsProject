import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";


// 加载医院
// export const initHosiptal = (scene) => {
//   return new GLTFLoader()
//     .setPath("/static/obj/hospital/")
//     .load("scene.gltf", (gltf) => {
//       const hospitalobj = gltf.scene;
//       hospitalobj.scale.set(200, 200, 200);
//       hospitalobj.traverse((res) => {
//         res.name = "hospital";
//         if (res.type === "Mesh") {
//           res.material.emissive = res.material.color;
//           res.material.emissiveMap = res.material.map;
//         }
//       });
//       hospitalobj.rotateY(Math.PI / 2);
//       hospitalobj.position.set(-2300, 0, -1200);
//       scene.add(hospitalobj);
//     });
// };

//可以看到这些东西基本就是设置位置，旋转
//通过 traverse 遍历子节点

// 加载消防局
export const initFirestation = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/fire_station/")
    .load("scene.gltf", (gltf) => {
      const fireStation = gltf.scene;
      fireStation.scale.set(60, 60, 60);
      fireStation.traverse((res) => {
        res.name = "fireStation";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      fireStation.rotateY(-Math.PI / 2);
      fireStation.position.set(1100, 10, 850);
      scene.add(fireStation);
    });
};
// 加载消防车
export const initFirecar = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/fire_truck_toy_model/")
    .load("scene.gltf", (gltf) => {
      const fireStation = gltf.scene;
      fireStation.scale.set(2, 2, 2);
      fireStation.traverse((res) => {
        res.name = "fireCar";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      fireStation.position.set(1100, 10, 400);
      scene.add(fireStation, fireStation.clone().translateZ(1300));
    });
};
// 加载救护车
export const initAmbulance = (scene) => {
  return new GLTFLoader()
    .setPath("/static/obj/ambulance/")
    .load("scene.gltf", (gltf) => {
      const ambulance = gltf.scene;
      ambulance.scale.set(60, 60, 60);
      ambulance.traverse((res) => {
        res.name = "ambulance";
        if (res.type === "Mesh") {
          res.material.emissive = res.material.color;
          res.material.emissiveMap = res.material.map;
        }
      });
      ambulance.rotateY(-Math.PI / 2);
      ambulance.position.set(-1800, 10, -500);
      scene.add(ambulance, ambulance.clone().translateX(-1400));
    });
};
// 加载无人机
export const initFly = (scene, mixer) => {
  return new GLTFLoader().setPath("/static/obj/").load("fly.glb", (gltf) => {
    const flyObj = gltf.scene;
    flyObj.scale.set(8, 8, 8);
    flyObj.position.set(0, 650, 0);
    scene.add(flyObj);
    flyObj.rotateY(Math.PI / 2);
    flyObj.traverse(function (child) {
      if (child.type === "Mesh") {
        child.material.emissive = child.material.color;
        child.material.emissiveMap = child.material.map;
      }
    });
    mixer = new THREE.AnimationMixer(flyObj);
    const AnimationAction = mixer.clipAction(gltf.animations[0]);
    AnimationAction.timeScale = 2;
    AnimationAction.play();
  });
};







