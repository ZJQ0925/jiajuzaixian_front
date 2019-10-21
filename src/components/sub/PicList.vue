<template>
    <div class="app-picList">
        <div class="mui-content">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in picList" :key="item.id">
		            <router-link to="/home">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
		            </router-link>
                    <a href="javascript:;" class="f-14 fav t-pri">
                        <span class="mui-icon-extra mui-icon-extra-heart-filled f-16" id="heart" @click="handleHeart($event)"></span>
                        {{item.heartCount}}
                    </a>
                </li>
		    </ul>    
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data() {
        return {
            
    }
    },
    methods: {
        handleHeart(e){
           // alert("收藏")
           //点击收藏按钮；改变心得样式
           //判断是否已收藏；若收藏再次点击则取消
        if($(e.currentTarget).hasClass("active"))
        {
               $(e.currentTarget).removeClass("active")
               this.heartCount-=1
               Toast({
                   message:"已取消收藏",
                   duration:500,
                })
        }
        else{
            $(e.currentTarget).addClass("active")
            this.heartCount+=1
            Toast({
                   message:"收藏成功",
                   duration:500,
                })
           }
        }
    },
    props:['picList']
}
</script>
<style scoped>
    .mui-table-view-cell.mui-media.mui-col-xs-6 img{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .mui-table-view-cell.mui-media.mui-col-xs-6 a.fav{
        float: left;  
        padding:8px 5px; 
        margin-left:0;
        margin-top:3px;
    }
    .mui-table-view-cell.mui-media.mui-col-xs-6 a span.active{
        color: #EA4C4D;
    }
    .mui-table-view:after{
        background-color:transparent;
    }
    .mui-table-view:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 0px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
</style>
