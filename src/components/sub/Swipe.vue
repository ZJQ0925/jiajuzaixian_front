<template>
    <div class="app">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in imgList" :key="item.id">
                    <img :src="item.img_url">
                </mt-swipe-item>
            </mt-swipe>
		</div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:['imgList']
}
</script>
<style>
    .app{
        height:180px;
        width:100%;
    }
    .app img{
        width:100%;
        height: 100%;
       /*  border-radius:2%; */
    }
</style>
