<template>
  <div style="width: 100%;height: 100%;">
    <three ref="three"/>
  </div>
</template>

<script>

  import Three from './PersonChat.vue'
  export default {
    name: "Index.vue",
    components:{
      Three,
    },
    data(){
      return{
      }
    },
    mounted() {
    },
    methods:{
    }

  }
</script>

<style scoped>

</style>
