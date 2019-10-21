<template>
    <div class="app-Login mui-content">
        <!-- 登录头部 -->
        <mt-header title="登录" slot="center" >
            <mt-button icon='back' slot="left" @click="handleBack"></mt-button>
            <mt-button slot="right" @click="handleRegister">立即注册</mt-button>
        </mt-header>
        <!-- 登录选项（账号登录/快捷登录） -->
        <div class="loginNav d-flex-row f-14">
            <a @click="handleTab1" class="active"><label>账号登录</label></a>
            <a @click="handleTab2"><label>快捷登录</label></a>
        </div>
        <!-- 登录内容/模板(账号登录/快捷登录) -->
        <mt-tab-container v-model="active">
            <!-- 账号登录 -->
            <mt-tab-container-item id='tab1' title="账号登录">
                <mt-field  type='text' placeholder='手机号/邮箱/用户名' v-model="uname"></mt-field>
                <mt-field  type='password' placeholder='输入密码' v-model="upwd"></mt-field >
            </mt-tab-container-item>
            <!-- 快捷登录 -->
            <mt-tab-container-item id='tab2'>
                    <mt-field  type='tel' placeholder='输入手机号' v-model="phone"></mt-field>
                    <mt-button>获取验证码</mt-button>
                <mt-field  type='number' placeholder='输入验证码' v-model="uToken"></mt-field >
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 登录按钮 -->
        <mt-button type='danger' size='large' @click="signIn">登录</mt-button>
        <!-- 忘记密码？ -->
        <div class="forgetPwd">
            <router-link to='/resetPwd'>忘记密码</router-link>
        </div>
        <!-- 其他社交账号登录 -->
        <div class="otherLogin">
            <p>社交账号登录</p>
            <div class="loginTo">
                <div>
                    <a href=""><img src="../../../static/原型/wechat.png" alt=""></a>
                    <p>微信</p>
                    </div>
                <div>
                    <a href=""><img src="../../../static/原型/QQ.png" alt=""></a>
                    <p>QQ</p>
                </div>
                <div>
                    <a href=""><img src="../../../static/原型/sinalogo.png" alt=""></a>
                    <p>新浪</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            uname:'',
            upwd:'',
            phone:'',
            uToken:'',
            active:'tab1',
        }
    },
    created() {
        
    },
    methods: {
        //点击back按钮返回上一个页面
        handleBack(){
            this.$router.go(-1);
        },
        //点击切换账号登录
        handleTab1(){
            //alert(123)
            this.active='tab1';
            $('.loginNav>a').css('background','#F8F8F8');
            $('.loginNav>a:first').css('background','white');
        },
        //点击切换到手机快捷登录页面
        handleTab2(){
            //alert(456)
            this.active='tab2';
            $('.loginNav>a').css('background','#F8F8F8');
            $('.loginNav>a:eq(1)').css('background','white');
        },
        //点击登录按钮 对其表单用户名及密码验证
        signIn(){
            //判断表单不能为空
            if(this.uname===''){
                Toast('请输入用户名');
            }
            else if(this.upwd===''){
                Toast('请输入密码');
            }
           /*  else if(this.phone===''){
                Toast('请输入手机号');
                this.isLogin=false; 
            }
            else if(this.uToken===''){
                Toast('请输入验证密码');
                this.isLogin=false;
            } */
            else{
                //正则表达式判断登录值是否符合
                var unameReg=/^[a-zA-Z0-9]{6,12}$/
                var upwdReg=/^[a-zA-Z0-9]{6,12}$/
                /* let phoneReg=/^[0-9]{11}$/
                let tokenReg=/^[0-9]{6}$/ */
                if(!unameReg.test(this.uname)){
                    Toast("用户名由6-12位数字或字母组合")
                }
                else if(!upwdReg.test(this.upwd)){
                    Toast("密码由6-12数字+数字组合")
                }
                /* else if(!phoneReg.test(this.phone)){
                    Toast("请输入正确手机号")
                    this.isLogin=false;
                }
                else if(!tokenReg.test(this.uToken)){
                    Toast("验证码格式错误")
                    this.isLogin=false; 
                } */
                else{
                    let uname=this.uname;
                    let upwd=this.upwd; 
                    let url='http://127.0.0.1:3000/login';
                    let params=`uname=${uname}&upwd=${upwd}`;
                    this.$axios.post(url,params).then(result=>{
                        //console.log(result.data)
                        if(result.data.code==1){
                            //console.log(result.data[0].uname)
                            Toast('登录成功')
                            this.$store.commit("signin",result.data.uname)
                            this.$router.push('/usercenter')
                        }
                        else{
                            Toast("登录失败")
                        }
                    })
                }
            }
        },
        //点击立即注册--跳转到register组件
        handleRegister(){
            this.$router.push('/register');
        }
    },
}
</script>
<style scoped>
.loginNav{
    width:100%;
    margin:15px auto;
}
.loginNav>a{
    width: 50%;
    height:40px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
    color:#ccc;
    background-color: #F8F8F8;
}
.loginNav>a:first-child{
    background: white;
}
/* 忘记密码 */
.app-Login .forgetPwd{
    width: 100%;
    height:30px;
    position: relative;
}
.app-Login .forgetPwd a{
    color: #999;
    position: absolute;
    right: 0;
    padding:10px 10px;
}
/* 其他方式登录 */
.app-Login .otherLogin{
    width:99%;
    height: 300px;
    margin:0 auto;
    border-top:1px solid #ccc;
    position: relative;
    top:120px;
}
.app-Login .otherLogin>p{
    background: white;
    width:100px;
    height:30px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    left:50%;
    margin-left:-50px;
    top:-15px;
}
.app-Login .loginTo{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap:nowrap;
}
.app-Login .loginTo>div{
    width:100px;
    height:80px;
    padding:40px 0;
    text-align: center;
}
.app-Login .loginTo>div img{
    width:50px;
    height:50px;
    border-radius: 50%;
}
</style>
