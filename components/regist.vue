<template>
    <div class="registfa">
		<div class="regist">
			<div class="titl">我要注册</div>
			<div class="divsingle">
				<div class="left"></div>
				<div class="right">
					<input type="text" placeholder="请输入您的账号">
				</div>
			</div>
			<div class="divsingle">
				<div class="left"></div>
				<div class="right">
					<input type="text" placeholder="请输入您的密码">
				</div>
			</div>
			<div class="divsingle">
				<div class="left"></div>
				<div class="right">
					<input type="text" placeholder="请输入您的邮箱">
				</div>
			</div>
			<button class="tijiao">我要注册</button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		ready(){},
		route:{
			data(transition){

			}
		},
		methods:{

		}
	}
</script>
<style lang="less">
	.registfa{
		width:100%;
		height:100%;
		min-height:100vh;
		position:fixed;
		left:0;
		top:0;
		background:rgba(0,0,0,.1);
		.regist{
			width:40%;
			height:auto;
			position:absolute;
			text-align:center;
			transform:translate(-50%,-50%);
			left:50%;
			top:50%;
			border:1px solid #dedede;
			border-radius:5px;
			background:#fff;
			.titl{
				width:96%;
				height:45px;
				line-height:45px;
				border-bottom:1px solid #dedede;
				text-align:left;
				text-indent:10px;
				margin:0 auto;
				margin-bottom:5%;
			}
			.divsingle{
				width:80%;
				height:45px;
				line-height:45px;
				margin:0 auto;
				text-align:left;
				overflow:hidden;
				border-bottom:1px solid #f9f9f9;
				.left{
					width:10%;
					height:45px;
					line-height:45px;
					float:left;
				}
				.right{
					width:90%;
					height:45px;
					line-height:45px;
					float:left;
					input{
						width:100%;
						height:100%;
						font-family:"Microsoft Yahei",arial;
					}
				}
				&:nth-child(2){
					.left{
						background:url(../static/images/zhanghao.png) no-repeat;
						background-position:left center;
						background-size:50% auto;
					}
				}
				&:nth-child(3){
					.left{
						background:url(../static/images/mima.png) no-repeat;
						background-position:left center;
						background-size:50% auto;
					}
				}
				&:nth-child(4){
					.left{
						background:url(../static/images/email.png) no-repeat;
						background-position:left center;
						background-size:50% auto;
					}
				}
			}
		}
		.tijiao{
			width:35%;
			height:45px;
			line-height:45px;
			border-radius:5px;
			text-align:center;
			color:#fff;
			background:#ec0000;
			margin:20px auto;
			font-family:"Microsoft Yahei",Arial;
		}
	}
</style>