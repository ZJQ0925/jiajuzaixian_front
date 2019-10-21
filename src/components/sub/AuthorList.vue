<template>
    <div class="app-author">
        <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="item in authorList" :key="item.id">
                            <router-link to="/products">
                                <img class="mui-media-object mui-pull-left myAuthor" :src="item.img_url">
                                <div class="mui-media-body d-flex-col">
                                    <div class="d-flex-row">
                                        <p class="f-14 t-black">{{item.name}}<span class="t-pri">{{item.case}}</span></p>
                                        <p class="f-14 t-pink">{{item.price}}</p>
                                    </div>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                </div>
                            </router-link>
                        </li>
		</ul>
    </div>
</template>
<script>
export default {
    props:["authorList"]
}
</script>
<style scoped>
.mui-table-view li.mui-table-view-cell{
    padding:15px 11px;
}
.mui-table-view .mui-media-object{
    max-width: 80px;
}
.mui-table-view li.mui-table-view-cell a img{
    width:50px;
    height:50px;
}
.mui-table-view li.mui-table-view-cell .mui-media-body{
    height: 50px;
}
</style>