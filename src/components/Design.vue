<template>
    <div class="app-FreeDesign mui-content">
        <mt-header fixed>
            <mt-button slot="left" icon='back' class="t-back" @click="goBack"></mt-button>
        </mt-header>
        <!-- 背景海报图 -->
        <div class="app-FreeDesign-item-bg">
        </div>
        <div class="app-FreeDesign-item">
            <mt-field type='tel' placeholder='您的手机号' v-model="phone"></mt-field>
            <mt-field type='text' placeholder='您的称呼' v-model="uname"></mt-field>
            <!-- 选择地址 -->
            <mt-field type='text' placeholder='选择地址'></mt-field>
            <div class="agreement">
                <input type="checkbox" :checked='isChecked' @click="isBtnAbled">
                我已阅读并同意<span>《用户注册协议》</span>
            </div> 
            <div class="toYuYue">
                <mt-button type='danger' size='large' @click="handleYuyue" id="YuYueBtn">立即预约</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            phone:null,
            uname:'',
            isChecked:true,
        }
    },
    methods:{
        isBtnAbled(){
            /* console.log("勾选协议") */
            this.isChecked=!this.isChecked;
            if(this.isChecked){
                $("#YuYueBtn").removeProp("disabled")
            }
            else{
                $("#YuYueBtn").prop({"disabled":true})
            }
        },
        //点击返回上一页
        goBack(){
			this.$router.go(-1)
        },
        //点击按钮提交预约
        handleYuyue(){
            Toast("预约成功~")
        }
    },
    created() {
        
    },
}
</script>
<style scoped>
/* 头部换背景 */
.app-FreeDesign .mint-header{
    background-color:rgba(125, 125, 125, .2);
}
.app-FreeDesign>div.app-FreeDesign-item-bg{
    width: 100%;
    height:40vh;
    background:url("../../static/原型/bg-banner.jpg");
    background-size: 100% 100%;
}
.app-FreeDesign>div.app-FreeDesign-item:last-child{
    width:100%;
    height:50vh;
    background: black;
    padding-top:15px;
}
div.app-FreeDesign-item:last-child>a:first-child{
    margin-top:15px;
}
.app-FreeDesign .mint-cell{
    background-color: black;
}
/* 勾选协议 */
.agreement{
    width:100%;
    padding:15px 5px;
    margin:0 auto;
}
.agreement>input{
    display: inline-block;
    width:15px;
    height: 15px;
    vertical-align:middle;
}
.agreement>span{
    color: #E1463C;
}
.toYuYue{
    width:90%;
    margin: 0 auto;
}
</style>