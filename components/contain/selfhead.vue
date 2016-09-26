<template>
<div class="selfpagehead">
	<div class="tonglan">
		<div class="lefter">
			<div class="logo">趣径</div>
			<a class="addclass">个人信息</a>
			<a>我的仓库</a>
			<a>我要发布</a>
		</div>
		<div class="righter">
			<div class="tophellow">趣径欢迎王秘登录</div>
			<a>退出</a>
		</div>
	</div>
</div>
</template>
<script>

</script>
<style lang="less">
.selfpagehead{
	width:100%;
	height:145px;
	line-height:145px;
	overflow:hidden;
	background:#f3f3f3;
	.lefter{
		width:736px;
		height:auto;
		overflow:hidden;
		float:left;
		text-align:center;
		.logo{
			width:194px;
			height:auto;
			line-height:145px;
			float:left;
		}
		a{
			display:block;
			text-decoration:none;
			float:left;
			width:128px;
			cursor:pointer;
			height:145px;
			line-height:145px;
			&.addclass{
				background:url(../../static/images/bgredline.jpg) repeat-x;
				color:#fff;
			}
		}
	}
	.righter{
		width:243px;
		height:145px;
		float:right;
		text-align:center;
		background:url(../../static/images/line.png) no-repeat left top;
		.tophellow{
			width:100%;
			height:80px;
			line-height:80px;
			font-weight:600;
			color:#333;
			text-align:center;
			font-size:18px;
		}
		a{
			background:#ec0000;
			color:#fff;
			font-weight:800;
			border-radius:10px;
			display:block;
			margin:0px auto;
			width:100px;
			height:35px;
			line-height:35px;
			font-size:16px;
			cursor:pointer;
		}
	}
}
</style>