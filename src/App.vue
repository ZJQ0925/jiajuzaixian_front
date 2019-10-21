<template>
  <div id="app">
	<nav class="mui-bar mui-bar-tab" id="navTab">
		<div v-for="(item,index) in navList" :key="index" @click="handleClick($event,index)" class="mui-tab-item">
			<router-link :to="item.href">
					<span class="mui-icon" :class="item.icon"></span>
					<span class="mui-tab-label">{{item.name}}</span>
			</router-link>
		</div>
	</nav>
    <router-view/>
     <!-- 底部tab -->
  </div>
</template>
<script>
export default {
	name: 'App',
	data(){
		return {
			//tabbar 数据
			navList:[
				{name:"首页",href:"/home",icon:"mui-icon-home"},
				{name:"装修",href:"/products",icon:"mui-icon-extra mui-icon-extra-lamp"},
				{name:"免费设计",href:"/design",icon:"mui-icon-extra mui-icon-extra-computer"},
				{name:"案例",href:"/case",icon:"mui-icon-starhalf"},
				{name:"我的",href:"/usercenter",icon:"mui-icon-contact"},
			],
		}
	},
	methods: {
		//点击tabbar进行跳转
		handleClick(e,i){
			//console.log("当前元素为:"+e.target+i);
			var aDiv=document.querySelectorAll("#navTab>div")
			//console.log(aDiv)
			var targetIndex=e.currentTarget
			//console.log(targetIndex)
			if(targetIndex==aDiv[i]){
				for(var a=0;a<aDiv.length;a++){
				aDiv[a].className='mui-tab-item'
				}
				aDiv[i].className='mui-tab-item active';
			}
		},
		
	},
	
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
     overflow-x:hidden;
}
.mui-content{
        background: white;
    }
#navTab>div span{
	color:#999
}
.mui-bar.mui-bar-tab .active span{
	color:#d8515a !important;
}
</style>
