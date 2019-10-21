<template>
    <div class="app-companny">
        <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="item in companyList" :key="item.id">
                            <router-link to="/products">
                                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                                <div class="mui-media-body">
                                    <p class="f-14 t-black">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                    <p class='mui-ellipsis f-12'>
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
    props:["companyList"]
}
</script>
<style scope>
    
</style>