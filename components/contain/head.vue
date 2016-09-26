<template>
    <div>
		<div class="top">
		     <div class="tonglan">
				<div class="DlZcright">
					<a v-link="{path:'/signin'}">登陆</a>
						|
					<a v-link="{path:'/regist'}">注册</a>
				</div>     	
		     </div>
		</div>
		<div class="neck">
      		<div class="tonglan">
   				<div class="logo">趣径</div>
   				<div class="right">
					<div class="topson">
						<div class="search">
							<input placeholder="请输入您要搜索的内容">
							<button>GO</button>
						</div>
					</div>
					<div class="bottomson">
						<a class="navdiv addBorb">领域知识</a>
						<a class="navdiv">商业信息</a>
					</div>
   				</div>
      		</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
		}
	}
</script>
<style lang="less">
	.DlZcright{
		display:inline-block;
		*display:inline;
		*zoom:1;
		float:right;
		font-size:14px;
		a{
			text-decoration:none;
		}
	}
	.neck{
		width:100%;
		height:auto;
		text-align:center;
		border-bottom:1px solid #f9f9f9;
		.logo{
			width:20%;
			height:133px;
			float:left;
		}
		.right{
			width:80%;
			height:auto;
			float:left;
			.topson{
				width:100%;
				height:70px;
			}
			.bottomson{
				width:100%;
				height:63px;
				a.navdiv{
					width:12%;
					height:60px;
					display:block;
					float:left;
					margin-left:1%;
					text-decoration:none;
					border-top:3px solid transparent;
					&.addBorb{
						border-top:3px solid #ec0000;
					}
					line-height:60px;
					text-align:center;
					&:hover{
						background:#fdfdfd;
						cursor:pointer;
					}
				}
			}
		}
	}
</style>