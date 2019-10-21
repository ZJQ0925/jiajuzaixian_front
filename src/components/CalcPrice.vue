<template>
    <div class="app-calc mui-content" >
        <mt-header fixed title="装修报价" class="f-16">
            <mt-button slot="left" icon='back' @click="goBack"></mt-button>s
        </mt-header>
        <!-- 主体内容 -->
        <div class="calc-content">
            <div class="calc-content-item">
                <!-- 装修预算估价 -->
                <div class="calc-item-bg">
                    <h4>装修预算估价</h4>
                    <h2>￥{{Alltotal}}</h2>
                    <p>因材料品牌不同，具体报价以量房实测为准</p>
                    <ul>
                        <li class="text-hidden"><span>客厅</span>￥{{KTtotal}}</li>
                        <li class="text-hidden"><span>卧室</span>￥{{WSTotal}}</li>
                        <li class="text-hidden"><span>厨房</span>￥{{CFTotal}}</li>
                        <li class="text-hidden"><span>卫生间</span>￥{{WSJTotal}}</li>
                        <li class="text-hidden"><span>其他</span>￥{{QTTotal}}</li>
                    </ul>
                </div>
            </div>
            <!-- 获取报价 -->
            <div class="calc-content-item">
                <div class="getPrice-title d-flex-row t-black">
                    <h3>获取报价</h3>
                    <p>已服务<span>605750</span>个业主</p>
                </div>
                <div class="d-flex-row inputBorder">
                    <span class="f-14 desc">房屋面积</span>
                    <input type="number" placeholder="房屋面积" v-model="UArea">
                    <span class="f-14 desc">㎡</span>
                </div>
                <div class="d-flex-row inputBorder">
                    <span class="desc">地区</span>
                    <select name="" id="">
                        <option value="">请选择地址</option>
                    </select>
                </div>
                <div class="inputBorder">
                    <input type="number" placeholder='请输入手机号,接收报价结果' v-model="phone">
                </div>
                <div class="agreement">
                    <input type="checkbox" :checked='isChecked' @click="isTotalBtnAbled">
                    我已阅读并同意<span>《用户协议》</span>
                </div> 
                <div>
                    <mt-button type='danger' size='large' id="TotalBtn" @click="getTotalBtn">免费获取详细报价</mt-button>
                </div>
                <div v-if="isShowGw"><p>装修顾问稍后会与您联系，请注意接听来电</p></div>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            isChecked:true,
            All:Number,
            KT:880,
            WS:680,
            CF:750,
            WSJ:690,
            QT:540,
            UArea:'',
            phone:'',
            isShowGw:false,
        }
    },
    methods: {
        //点击按钮返回上一页
        goBack(){
            this.$router.go(-1)
        },
        //是否勾选协议
        isTotalBtnAbled(){
            //alert("勾选协议")
           this.isChecked=! this.isChecked;
            if(this.isChecked){
                $("#TotalBtn").removeProp("disabled");
            }
            else{
                Toast("请勾选协议")
                $("#TotalBtn").prop({"disabled":true});
            };

        },
        getTotalBtn(){
            //创建正则进行格式验证
            let areaReg=/^[\d]{3}$/;
            let phoneReg=/(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            if(this.UArea==''){
                    Toast("请填写房屋面积哦~")
                    return;
                }
                else if(this.phone==''){
                    Toast("请填写接收手机号~")
                    return;
                }
                else{
                    if(!areaReg.test(this.UArea)){
                        Toast("输入的房屋面积格式不正确哦");
                        return;
                    }
                    else if(!phoneReg.test(this.phone)){
                        Toast("您输入的手机号格式不正确,请重试")
                        return;
                    }
                    else{
                       Toast("详细报价已发送您手机,请注意查收")
                       this.isShowGw=true;
                    }
                }
       }
    },
    //装修的报价计算
    computed: {
        KTtotal(){
            return this.KT*(this.UArea*0.25)
        },
        WSTotal(){
            return this.WS*(this.UArea*0.25)
        },
        CFTotal(){
            return this.CF*(this.UArea*0.25)
        },
       WSJTotal(){
            return this.WSJ*(this.UArea*0.25)
        },
        QTTotal(){
            return this.QT*(this.UArea*0.25)
        },
        Alltotal(){
            return this.KT*(this.UArea*0.25)+this.WS*(this.UArea*0.25)+this.CF*(this.UArea*0.25)+this.WSJ*(this.UArea*0.25)+this.QT*(this.UArea*0.25)
        },
    },
    created() {
        
    },
}
</script>
<style scoped>
/* 调整头部样式 */
.app-calc .mint-header{
    background-color:white;
}
.app-calc .mint-header{
    color: #999;
}
.calc-content{
    width:98%;
    margin:60px auto 0 auto;
}
/* 装修预算估价 */
.calc-content .calc-content-item>div{
    width: 94%;
    margin:0 auto;
}
.calc-content .calc-content-item .calc-item-bg{
    height:25vh;
    background:url("../../static/原型/calc-bg.jpg") no-repeat;
    background-size: 100% 100%;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    color: white;
}
.calc-content .calc-content-item .calc-item-bg p{
    color: white;
}
.calc-content .calc-content-item .calc-item-bg ul{
    width:inherit;
    padding:0 0;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}
.calc-content .calc-content-item .calc-item-bg ul li{
    width: 50px;
}
.calc-content .calc-content-item .calc-item-bg ul span{
    display: block;
}
/* 获取报价 */
/* 获取报价的标题 */
.calc-content .calc-content-item .getPrice-title{
    margin-top:20px;
}
.calc-content .calc-content-item .getPrice-title h3,
.calc-content .calc-content-item .getPrice-title p,{
    width:50%;
    height: 30px;
}
.calc-content .calc-content-item .getPrice-title p{
    margin-top:10px;
}
.calc-content .calc-content-item .getPrice-title p span{
    color: #ff0035;
}
/* 获取报价的表单样式 */
.calc-content .calc-content-item .inputBorder{
    border-top:1px solid rgba(0, 0, 0, .1);
}
/* 去掉mui---input表单样式 */
.calc-content-item>div input{
    border:none;
    font-size:14px;
    margin-bottom: 0;
}
.calc-content-item>div select{
    margin-bottom:0;
}
/* span房屋面积样式 */
.calc-content-item>div  span.desc{
    width:30%;
    height: 40px;
    line-height: 40px;
    color: rgba(0, 0, 0, .6)
}
/* 勾选协议样式 */
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
/* 顾问练习提示 */
.calc-content>div:nth-child(2)>div:last-child{
    margin-top:15px;
    text-align: center;
  }
  .calc-content>div:nth-child(2)>div:last-child p{
      color: #ea4c4d;
  }
</style>
