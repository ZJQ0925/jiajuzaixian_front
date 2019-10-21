<template>
    <div class="app-case mui-content">
        <!-- navbar -->
        <!-- 固定标题页 -->
        <div class="My-fixed">
            <h3 class="My-header-title t-black">案例</h3>
            <div class="case d-flex-row b-bottom-1">
                <div class="d-flex-row" id="tabBar">
                    <div class="caseTitle f-14 fw-5 active" @click="getCase">案例</div>
                    <div class="caseTitle f-14 fw-5" @click="getPic">图库</div>
                </div>
                <a class="mui-icon mui-icon-image"></a>
            </div>
        </div>
        <!-- 案例列表页 -->
    <div class="case-content">
        <my-caseBox :caseList="caseList" v-if="isShow1"></my-caseBox>
        <my-picBox :picList="picList" v-if="isShow2"></my-picBox>
    </div>
    </div>
</template>
<script>
import myCase from './sub/CaseList.vue'
import myPic from './sub/PicList.vue'
export default {
    data(){
        return {
            caseList:null,
            picList:null,
            isShow1:true,
            isShow2:false
            }
    },
    methods: {
        //创建案例列表-getCase
        getCase(){
            var url="http://127.0.0.1:3000/caselist"
            this.$axios.get(url).then(result=>{
                //console.log(result.data)
                this.caseList=result.data
                this.isShow1=true
                this.isShow2=false
                if(this.isShow1){
                    $("#tabBar>div").removeClass("active")
                    $("#tabBar>div:eq(0)").addClass("active")
                }
            })
        },
        //获取图库列表-getPic
        getPic(){
            var url="http://127.0.0.1:3000/caselist"
            this.$axios.get(url).then(result=>{
                //console.log(result.data)
                this.picList=result.data
                this.isShow1=false
                this.isShow2=true
                if(this.isShow2){
                    $("#tabBar>div").removeClass("active")
                    $("#tabBar>div:eq(1)").addClass("active")
                }
            })
        },
},
    created() {
        this.getCase()
    },
    components:{
        "my-caseBox":myCase,
        "my-picBox":myPic,
    }
}
</script>
<style scoped>
/* 装修公司、设计师、装修楼盘 */
.case-content{
    margin-top:110px;
}
.case div{
       height:30px;
   }
.case .caseTitle{
    padding-left:10px;
    color:black;
}
#tabBar>div{
    padding:0 20px 0 15px;
}
.mui-icon.mui-icon-image{
    padding-right: 10px;
    color: #d8515a
}
.case.d-flex-row.b-bottom-1 .caseTitle.active{
    border-bottom: 1px solid #d8515a;
     color:#d8515a;
}

</style>
