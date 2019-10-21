<template>
    <div class="app-register mui-content">
        <!--  -->
        <mt-header title="注册" slot="center">
            <mt-button slot="left" icon='back' @click="handleBack"></mt-button>
        </mt-header>
        <div class="register">
            <div class="register-item">
                <input type='tel' placeholder="请输入11位手机号" v-model="phone"><label class="phoneClass">获取验证码</label>
            </div>
            <mt-field type='text' placeholder="输入验证码" v-model="uToken"></mt-field>
            <mt-field type='text' placeholder="输入昵称" v-model="uname"></mt-field>
            <mt-field type='password' placeholder="请设置6-12位登录密码" v-model="upwd"></mt-field>
        </div>
        <mt-button class="mt-btn" size='large' type='danger' @click="signUp" id='RegBtn'>注册</mt-button>
        <div class="agreement">
            <input type="checkbox" :value="agreement" :checked='isChecked' @click="isRegBtnAbled">
            我已阅读并同意<span>《用户注册协议》</span>
        </div> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            phone:'',
            uToken:'',
            uname:'',
            upwd:'',
            agreement:null,
            isChecked:true,
        }
    },
    methods: {
        //注册页面验证是否为空、注册格式是否正确
        signUp(){
            //判断表单不能为空
            if(this.uname===''){
                Toast('请输入用户名');
            }
            else if(this.upwd===''){
                Toast('请输入密码');
            }
            else{
                //正则表达式判断注册值是否符合
                var unameReg=/^[a-zA-Z0-9]{6,12}$/
                var upwdReg=/^[a-zA-Z0-9]{6,12}$/
                if(!unameReg.test(this.uname)){
                    Toast("用户名由6-12位数字或字母组合")
                }
                else if(!upwdReg.test(this.upwd)){
                    Toast("密码由6-12数字+数字组合")
                }
                else{
                    let uname=this.uname;
                    let upwd=this.upwd; 
                    let url='http://127.0.0.1:3000/register?uname='+uname+'&upwd='+upwd
                    this.$axios.get(url).then(result=>{
                        console.log(result.data)
                        if(result.data.code==1){
                            Toast('注册成功')
                            this.$router.push('/login')
                        }
                        else if(result.data.code==2){
                            Toast("该用户名已占用")
                        }
                        else{
                            Toast("注册失败")
                        }
                    })
                }
            }
        },
        //点击返回上一页
        handleBack(){
            this.$router.go(-1)
        },
        //若协议未勾选，注册按钮禁用;反之启用
        isRegBtnAbled(){
            //console.log(this.isChecked)
            this.isChecked=!this.isChecked
            if(this.isChecked){
                $("#RegBtn").removeProp('disabled')
            }
            else{
                Toast("GG/MM~请勾选协议哟~")
                $("#RegBtn").prop({disabled:true})
            }
        }
    },
    created() {

},
}
</script>
<style scoped>
.register{
    margin-top:15px;
}
.register .register-item{
    width: 100%;
    padding:0 10px;
}
.register .register-item input[type='tel']{
    width:80%;
}
.register>div label.phoneClass{
    display: inline-block;
    width:19%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, .2);
    margin-left:1%;
    border-radius:3px;
    color: #E1463C;
}
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
</style>
