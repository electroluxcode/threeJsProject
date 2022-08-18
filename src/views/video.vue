<template>
    <div>
       11 <canvas id='canvas' style="height:500px"></canvas>11
    </div>
</template>

<script defer src='https://cdn.jsdelivr.net/gh/phoboslab/jsmpeg@9cf21d3/jsmpeg.min.js'></script>
<script>
    // import JSMpeg from '@/utils/jsmpeg.min';
    export default {
        name:"video_",
        mounted(){
                    new JSMpeg.Player('ws://localhost:2000/api/stream2', {
                        canvas: document.getElementById('canvas')
                    })
        
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>