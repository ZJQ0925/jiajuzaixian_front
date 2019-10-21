<template>
    <div class="app-company mui-content">
        <!-- navbar -->
        <div class="My-fixed">
            <h3 class="My-header-title t-black">装修</h3>
            <div class="case d-flex-row b-bottom-1" id="navBar">
                <div class="caseTitle f-14 fw-5 active" @click="getCompany">装修公司</div>
                <div class="caseTitle f-14 fw-5" @click="getAuthor">设计师</div>
                <div class="caseTitle f-14 fw-5" @click="getHouse">装修楼盘</div>
                <router-link to="/search" class="mui-icon mui-icon-search"></router-link>
            </div>
        </div>
        <div class="company-content">
            <my-company :companyList='companyList' v-if="isShow1"></my-company>
            <my-author :authorList="authorList" v-if="isShow2"></my-author>
            <my-house :houseList='houseList' v-if="isShow3"></my-house>
        </div>
    </div>
</template>
<script>
//导入子路由company、author、house
import Company from './sub/CompanyList.vue'
import Author from './sub/AuthorList.vue'
import House from './sub/HouseList.vue'
export default {
    created() {
        this.getCompany()
    },
    data(){
        return{
            companyList:null,
            isShow1:true,
            isShow2:false,
            isShow3:false,
            authorList:null,
            houseList:null,
        }
    },
    methods: {
        //获取装修公司列表
        getCompany(){
            var url="http://127.0.0.1:3000/companylist";
            this.$axios.get(url).then((result)=>{
                console.log(result)
                this.companyList=result.data.data
                this.isShow1=true
                this.isShow2=false
                this.isShow3=false
                if(this.isShow1){
                    $("#navBar>div").removeClass("active")
                    $("#navBar>div:eq(0)").addClass("active")
                }
            })
        },
        //获取设计师列表
        getAuthor(){
            var url="http://127.0.0.1:3000/authorlist";
            this.$axios.get(url).then(result=>{
                this.authorList=result.data.data
                //console.log(authorList)
                this.isShow1=false
                this.isShow2=true
                this.isShow3=false
                if(this.isShow2){
                    $("#navBar>div").removeClass("active")
                    $("#navBar>div:eq(1)").addClass("active")
                }
            })
        },
        getHouse(){
            var url="http://127.0.0.1:3000/houselist";
            this.$axios.get(url).then(result=>{
                //console.log("house"+result.data)
                this.houseList=result.data.data
                this.isShow1=false
                this.isShow2=false
                this.isShow3=true
                if(this.isShow3){
                    $("#navBar>div").removeClass("active")
                    $("#navBar>div:eq(2)").addClass("active")
                }
            })
        },
    },
    components:{
        "my-company":Company,
        "my-author":Author,
        "my-house":House
    }
}
</script>
<style scoped>
    /* 装修公司、设计师、装修楼盘 */
.company-content{
    margin-top:96px;
}
.case div{
       height:30px;
}
.case .caseTitle{
      padding-left:10px;
      color:black;
}
.case.d-flex-row.b-bottom-1 .caseTitle.active{
      border-bottom: 1px solid #d8515a;
      color:#d8515a;
}
.mui-icon.mui-icon-search{
    color:#d8515a;
    padding-right:10px;
}
</style>
