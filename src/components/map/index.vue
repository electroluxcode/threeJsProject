<template>
	<div class="content">
		<!-- 用来显示地图 -->
        <!-- 可以不写宽度，但一定要有高度 -->
		<div id="Map" style="height: 100vh;">
		</div>
	</div>
</template>

<script>
    //引入高德地图
	import AMapLoader from '@amap/amap-jsapi-loader'
	export default {
		name: 'IndexMap',
		data() {
			return {
                map: null, //地图实例
			}
		},
		mounted() {
			this.initMap()
		},
		methods: {
			initMap() {
				AMapLoader.load({
					key: "97f7c85ab6eef7449537b2b6bd15324c", // 申请好的Web端开发者Key，首次调用 load 时必填
					//2.0版本太卡了 ，所以使用的1.4.0版本  其插件也有不同  如：ToolBar
					version: "1.4.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
					resizeEnable: true,
					plugins: [
						"AMap.ToolBar", //工具条
						"AMap.Scale", // 比例尺
						"AMap.Geolocation", //定位
					], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
				}).then((AMap) => {
					console.log(AMap);
					this.map = new AMap.Map("Map", { //设置地图容器id
                  
						viewMode: "3D", //是否为3D地图模式
						zoom: 130, //初始化地图级别
						center: [113.23490, 23.15600], //初始化地图中心点位置
                        
					});
                    
				}).catch(e => {
					console.log(e);
				})
                console.log()
                window.open("https://m.amap.com/navi/?dest=113.23490,23.15600&destName=世泊科技有限公司&hideRouteIcon=1&key=97f7c85ab6eef7449537b2b6bd15324c")
			}
		}
	}
</script>