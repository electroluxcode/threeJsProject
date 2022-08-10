import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
export  function LoadResources(config) {
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(config.url, gltf => {
      gltf.scene.name = 'Actor'
      //阴影
      gltf.scene.traverse(function (object) {
        if (object.isMesh) object.castShadow = true;
      });
      gltf.scene.name = config.name
      resolve(gltf)
    })
  })
}
