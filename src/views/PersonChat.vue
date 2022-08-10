<template>
  <div id="blocker" style="width:100%;height: 100%;">
    <div v-if="hideCanvas" style="width:100%;height: 100%;background-color: black">
      <input v-model="name"/>
      <button @click="confirmClick">确认</button>
    </div>
    <div v-else style="width: 100%;height: 100%;"
         id="container">
    </div>

  </div>
</template>

<script type="module">
  // import * as THREE from 'three'
  // import JoyStick from './js/toon3d'
  import {renderAPI} from "./socketChat/js/renderAPI";
  import io from 'socket.io-client'
  const socket = io('http://localhost:3002');

  //工具
  let container
  // let main


  export default {
    name: 'three',
    data() {
      return {
        name:null,
        hideCanvas:true,
        hotZoneData: null
      }
    },
    components: {},
    mounted() {
      let that = this
      window.addEventListener('DOMContentLoaded', function () {
        that.socketIo()
      })
    },
    methods: {
      initData(){
        let that=this
        this.$axios.get('http://localhost:3002/hotZone').then(function (response) {
          console.log(response);
          that.hotZoneData=response.data
        }).catch(function (error) {
          console.log(error);
        });
      },
      socketIo(){
        socket.on('connect',function(){
          console.log('连接成功');
          //客户端连接成功后发送消息'welcome'
          // socket.send('welcome');
        });
      },
      initThree() {
        container = document.getElementById('container')

        let config={
          playerName:this.name,
          socket:socket,
          hotZoneData:this.hotZoneData
        }
        if (container) {
          renderAPI()
            .initialize(container,config)
            .then((apiInstance) => {
              apiInstance.startRender();
            })
            .catch();
        }
      },
      confirmClick(){
        this.hideCanvas=false
        this.initData()
        setTimeout(()=>{
          this.initThree()
        },100)
        this.$forceUpdate()
      }

    },
    destroyed() {

    },
  }
</script>
<style scoped>
</style>

