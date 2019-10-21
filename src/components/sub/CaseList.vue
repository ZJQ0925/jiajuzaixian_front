<template>
    <div class="app-caseList">
        <div class="mui-card mui-control-item" v-for="item in caseList" :key="item.id">
            <div class="mui-card-header mui-card-media">
                <img :src="item.img_url">
                <ul>
                    <li>
                        <span class="mui-icon mui-icon-image f-16 pr-1"></span>  
                        <span class="f-14">5</span> 
                    </li>
                    <li>
                        <span class="mui-icon-extra mui-icon-extra-heart-filled f-16 pr-1"></span>
                        <span class="f-14">{{item.heartCount}}</span>
                    </li>
                </ul>
            </div>
            <div class="mui-card-content d-flex-row">
                <div class="mui-card-content-inner">
                    <p class='text-hidden'>{{item.title}}</p>
                    <p class="letter-spa text-hidden">{{item.sub_title}}</p>
                </div>
                <div>
                    <img :src="item.authorPic">
                    <p>{{item.author}}</p>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
export default {
    props:['caseList']
}
</script>
<style scoped>
    .app-caseList{
        background: #eee;
    }
    /* 装修案例 */
    .mui-card-header.mui-card-media{
        padding: 0px !important;
        height:200px;
    }
    .mui-card-header.mui-card-media img{
        width: 100% !important;
        height:inherit !important;
    }
    .mui-card-header.mui-card-media>ul{
        width:100%;
        position: absolute;
        bottom:0;
        left:0;
        margin:0;
        padding-left:15px;
        background:rgba(0, 0, 0,.6)
    }
    .mui-card-header.mui-card-media>ul>li{
        float: left;
        padding:0 5px;
    }
    .d-flex-row>div:first-child{
        width:70%;
        height: inherit;
    }
    .d-flex-row>div:nth-child(2)>img{
        position: absolute;
        top:-27px;
        right:20px;
        border-radius: 50%;
        border:2px solid white;
        width: 50px;
        height:50px;
    }
    .d-flex-row>div:nth-child(2)>p{
        width:50px;
        height:30px;
        margin-top:31px;
        margin-right:20px;
    }
   .mui-card-content .mui-card-content-inner{
       padding:5px 15px;
   }
   .letter-spa{
       letter-spacing:1px;
   }
</style>