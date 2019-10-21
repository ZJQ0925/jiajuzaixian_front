<template>
    <div class="app-home mui-content">
        <!-- 固定头部 -->
        <mt-header title="家居在线" fixed class="header">
            <mt-button class="mui-icon mui-icon-location" slot=left></mt-button>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class="div"></div>
        <!-- 轮播图 -->
        <swipe-box :imgList='imgList'></swipe-box>
        <div class="div"></div>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"
            v-for='item in sukdoList' :key="item.id">
                <router-link :to="item.href">
                    <img :src="item.img_url">
		            <div class="mui-media-body">{{item.title}}</div>
                </router-link>
            </li>
        </ul>

        <div class="div"></div>
        <!-- 装修案例 -->
        <div class="case d-flex-row b-bottom-1">
                <div class="caseTitle f-18 fw-5">装修案例</div>
                <router-link to="/case" class="caseAll arrow" >查看全部</router-link>
        </div>
        <mt-swipe :auto="0" :show-indicators="false" style="height:325px">
            <mt-swipe-item v-for="item in zxCase" :key="item.id">
                <div class="mui-card mui-control-item">
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
            </mt-swipe-item>
        </mt-swipe>

        <!-- 装修公司 -->
        <div class="case d-flex-row b-bottom-1">
            <div class="caseTitle f-18 fw-5">装修公司</div>
            <router-link to='/products' class="caseAll arrow">查看全部</router-link>
        </div>
        <mt-swipe :auto='0' :show-indicators='false' style="height:296px">
            <mt-swipe-item v-for="item in zxCompany" :key="item.id">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                                <div class="mui-media-body">
                                    <p class="f-14 t-black">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                    <p class='mui-ellipsis f-12'>
                                        <span class="mui-icon mui-icon-location f-16"></span>
                                        {{item.addr}}
                                    </p>
                                </div>
                            </a>
                        </li>
			        </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                                <div class="mui-media-body">
                                    <p class="f-14 t-black">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                    <p class='mui-ellipsis f-12'>
                                        <span class="mui-icon mui-icon-location f-16"></span>
                                        {{item.addr}}
                                    </p>
                                </div>
                            </a>
                        </li>
			        </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                                <div class="mui-media-body">
                                    <p class="f-14 t-black">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                    <p class='mui-ellipsis f-12'>
                                        <span class="mui-icon mui-icon-location f-16"></span>
                                        {{item.addr}}
                                    </p>
                                </div>
                            </a>
                        </li>
			        </ul>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 设计师 -->
        <div class="case d-flex-row b-bottom-1">
            <div class="caseTitle f-18 fw-5">设计师</div>
            <router-link to="/products" class="caseAll arrow" >查看全部</router-link>
        </div>
        <mt-swipe :auto='0' :show-indicators='false' style="height:225px">
            <mt-swipe-item v-for="item in zxAuthor" :key="item.id">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left myAuthor" :src="item.img_url">
                                <div class="mui-media-body">
                                    <div class="d-flex-row">
                                        <p class="f-14 t-black">{{item.name}}<span class="t-pri">{{item.case}}</span></p>
                                        <p class="f-14 t-pink">{{item.price}}</p>
                                    </div>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                </div>
                            </a>
                        </li>
			        </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left myAuthor" :src="item.img_url">
                                <div class="mui-media-body">
                                    <div class="d-flex-row">
                                        <p class="f-14 t-black">{{item.name}}<span class="t-pri">{{item.case}}</span></p>
                                        <p class="f-14 t-pink">{{item.price}}</p>
                                    </div>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                </div>
                            </a>
                        </li>
			        </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left myAuthor" :src="item.img_url">
                                <div class="mui-media-body">
                                    <div class="d-flex-row">
                                        <p class="f-14 t-black">{{item.name}}<span class="t-pri">{{item.case}}</span></p>
                                        <p class="f-14 t-pink">{{item.price}}</p>
                                    </div>
                                    <p class='mui-ellipsis letter-spa f-12'>{{item.title}}</p>
                                </div>
                            </a>
                        </li>
			        </ul>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 装修楼盘 -->
        <div class="case d-flex-row b-bottom-1">
            <div class="caseTitle f-18 fw-5">装修楼盘</div>
            <router-link to="/products" class="caseAll arrow" >查看全部</router-link>
        </div>
        <mt-swipe :auto='0' :show-indicators='false' style="height:225px">
            <mt-swipe-item v-for="item in zxHouse" :key="item.id">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <div class="mui-media-body">
                                    <p class="f-16 t-black lp">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12 subtitle lp'>{{item.title}}</p>
                                    <p class="mui-ellipsis f-14 t-pink lp t-pri">
                                        <span class="mui-icon mui-icon-location f-16"></span>
                                        {{item.addr}}
                                    </p>
                                </div>
                            </a>
                        </li>
			        </ul>
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media">
                            <a href="javascript:;">
                                <div class="mui-media-body">
                                    <p class="f-16 t-black lp">{{item.name}}</p>
                                    <p class='mui-ellipsis letter-spa f-12 subtitle lp'>{{item.title}}</p>
                                    <p class="mui-ellipsis f-14 t-pink lp t-pri">
                                        <span class="mui-icon mui-icon-location f-16"></span>
                                        {{item.addr}}
                                    </p>
                                </div>
                            </a>
                        </li>
			        </ul>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 底部分类/装修效果图 -->
        <div class="case d-flex-row b-bottom-1">
            <div class="caseTitle f-18 fw-5">装修效果图</div>
            <a class="caseAll arrow" >查看全部</a>
        </div>
        <div class="mui-content">
		    <div class="mui-slider">
		        <div class="mui-slider-group mui-slider-loop">
		        	<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
		            <div class="mui-slider-item mui-slider-item-duplicate" v-for="item in draw" :key="item.id">
                        <img :src="item.img_url">
                        <p>{{item.title}}</p>
		            </div>
		        </div>
		    </div>
		</div>
    </div>
</template>
<script>
import Swipe from './sub/Swipe.vue'
export default {
    data(){
        return{
         imgList:null   ,
         sukdoList:null,
         zxCase:null,
         zxCompany:null,
         zxAuthor:null,
         zxHouse:null,
         draw:null
        }
    },
    methods: {
        getImage(){
            //console.log(123)
            var url='http://127.0.0.1:3000/imagelist'
            this.$axios.get(url).then((result)=>{
                //console.log(result.data)
                this.imgList=result.data
            })
        },
        sukdo(){
            var url='http://127.0.0.1:3000/sudoku';
            this.$axios.get(url).then((result)=>{
                //console.log(result.data)
                this.sukdoList=result.data;
            })
        },
        //向后台随机请求3条装修案例的数据
        getCase(){
            var url="http://127.0.0.1:3000/getcase"
            this.$axios.get(url).then((result)=>{
                //console.log(result);
                this.zxCase=result.data;
                //console.log(this.zxCase)
            })
        },
        //向后台随机请求装修公司数据
        getCompany(){
            var url='http://127.0.0.1:3000/getcompany';
            this.$axios.get(url).then((result)=>{
                //console.log(result.data)
                this.zxCompany=result.data
            })
        },
        //获取设计师
        getAuthor(){
            var url='http://127.0.0.1:3000/getAuthor';
            this.$axios.get(url).then(result=>{
               // console.log(result.data)
               this.zxAuthor=result.data
            })
        },
        //获取楼盘信息
        getHouse(){
            var url='http://127.0.0.1:3000/gethouse';
            this.$axios.get(url).then(result=>{
                //console.log(result.data)
              this.zxHouse=result.data
            })
        },
        getDraw(){
            var url='http://127.0.0.1:3000/getdraw';
            this.$axios.get(url).then(result=>{
                console.log(result.data)
                this.draw=result.data
            })
        },
        slide(){
            document.querySelector('.mui-slider').addEventListener('slide', function(event) {
            //注意slideNumber是从0开始的；
            document.getElementById("info").innerText = "你正在看第"+(event.detail.slideNumber+1)+"张图片";
            });
        }
    },
    created() {
      this.getImage()
      this.sukdo()
      this.getCase()
      this.getCompany()
      this.getAuthor()
      this.getHouse()
      this.getDraw()
    },
    components:{
        "swipe-box":Swipe,
    }
}
</script>
<style scoped>
    .app-home{
        margin-top:40px;
    }
    .header{
        background:white;
        color:black !important;
        border-bottom: 1px solid #ccc;
        font-size:16px !important;
    }
    /*九宫图片中大小*/
    .app-home .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
    }
    /*九宫格区域背景变为白色*/
    .app-home .mui-grid-view.mui-grid-9{
    background-color:#fff;
    }
    .app-home .mui-grid-view.mui-grid-9 li{
    border:0;
    }
   .mui-table-view.mui-grid-view.mui-grid-9 li .mui-media-body{
        font-size:14px;
   }
   .case div{
       width: 50%;
       height:30px;
   }
   /* 查看全部通用样式 */
  .case .caseTitle{
      font-size:18px;
      padding-left:10px;
      color:black;
  }
  .case .caseAll{
      color:#d8515a;
      padding-right:10px;
  }
    .arrow::after{
        border-top:1px solid #d8515a;
        border-right:1px solid #d8515a;
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
   /* 装修公司 */
   ul.mui-table-view.f-left{
       float: left !important;
   }
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
   /* 底部效果图 */
   .mui-content{
       background:white;
   }
.mui-slider .mui-slider-group .mui-slider-item{
    width:130px;
    height:118px;
    margin:10px 5px;
}
.mui-slider-item.mui-slider-item-duplicate img{
       border-radius:10px;
}
 .mui-slider-item.mui-slider-item-duplicate p{
        width: 100%;
        height:30px;
        position:absolute;
        bottom: 0;
        left: 0;
        background:rgba(0, 0, 0, .8);
        text-align: center;
        line-height: 30px;
        color:white;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
</style>