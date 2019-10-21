<template>
    <div class="app-MyCenter">
        <div class="My-fixed">
            <h3 class="My-header-title t-black">我的</h3>
        </div>
        <div class="MyCenter-content">
            <ul class="mui-table-view">
				<li class="mui-table-view-cell d-flex-row">
                    <div>
                        <i class="mui-icon mui-icon-contact f-50"></i>
                    </div>
                    <!-- 未登录状态 -->
                    <div v-if="!this.$store.state.islogin">
                        <router-link to="/login" class="mui-navigate-right f-16">
                            登录
                            <br>
                            <span class="f-12">查看个人主页或编辑信息...</span>
                        </router-link>
                    </div>
                    <!-- 登录成功状态 -->
                    <div v-else>
                        <router-link to="/" class="mui-navigate-right f-16">
                            {{this.$store.state.uname}}
                            <br>
                            <span class="f-12">查看个人主页或编辑信息...</span>
                        </router-link>
                    </div>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right f-14">
						<i class="mui-icon-extra mui-icon-extra-heart"></i>我的收藏
					</a>
				</li>
				<li class="mui-table-view-cell">
                   
					<a class="mui-navigate-right f-14">
						 <i class="mui-icon-extra mui-icon-extra-order"></i>修改资料
					</a>
				</li>
                <li class="mui-table-view-cell">
                    
					<a class="mui-navigate-right f-14">
						<i class="mui-icon mui-icon-phone"></i>联系客服
					</a>
				</li>
                <li class="mui-table-view-cell">
                    
					<a class="mui-navigate-right f-14 t-pri">
						<i class="mui-icon mui-icon-email"></i>意见反馈
					</a>
				</li>
			</ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/*  标题栏*/
.My-header-title{
    font-size:20px;
    font-weight: 600;
    padding:15px 0 20px 15px;
    letter-spacing: 2px;
}
i.f-50{
        font-size: 50px;
}
    /* 内容content部分 */
.MyCenter-content{
        margin-top:60px;
    }
.mui-table-view-cell .mui-navigate-right i{
        vertical-align: middle;
        width:40px;
        height:40px;
        margin-right:15px;
        color: white;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        background: -webkit-linear-gradient(top right, #8E3DD0 , #AA50E3); 
    }
.mui-table-view li:nth-child(2) i{
    background: -webkit-linear-gradient(top right, #F74A4C , #EF7063); 
    }
.mui-table-view li:nth-child(3) i,
.mui-table-view li:nth-child(5) i{
        background: -webkit-linear-gradient(top right, #F3D358 , #ECA538); 
}
li.mui-table-view-cell.d-flex-row>div:first{
    width:15%;
}
li.mui-table-view-cell.d-flex-row>div:nth-child(2){
    width:85%;
}
li.mui-table-view-cell.d-flex-row>div:nth-child(2) a{
    color: #ccc;
}
</style>
