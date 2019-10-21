<template>
    <div class="app-house">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in houseList" :key="item.id">
                <router-link to="/products">
                    <div class="mui-media-body">
                        <p class="f-16 t-black lp">{{item.name}}</p>
                        <p class='mui-ellipsis letter-spa f-12 subtitle lp'>{{item.title}}</p>
                        <p class="mui-ellipsis f-14 t-pink lp t-pri">
                            <span class="mui-icon mui-icon-location f-16"></span>
                            {{item.addr}}
                        </p>
                    </div>
                </router-link>
            </li>
		</ul>
    </div>
</template>
<script>
export default {
    props:["houseList"]
}
</script>
<style scoped>
       /* 装修楼盘样式 */
.mui-table-view .mui-table-view-cell .mui-media-body>p.lp{
    margin-bottom:5px;
}
.mui-table-view .mui-table-view-cell .mui-media-body p.subtitle{
    width: 25vw;
    text-align: center;
    color:#fff;
    border-radius:3px;
    background: #F1BF4E;
}
</style>