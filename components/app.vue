<template>
	<div class="app-index">
		<headers></headers>
		<div class="tonglan">
			<div class="indexleft">
				<div class="lineblockdiv">
					<div class="imgdiv">
						<img src="../static/images/wenimg.jpg">
					</div>
					<div class="contentwen">
						<div class="tit">
							<div class="left">标题标题</div>
							<div class="right">发布人：王秘   分类：JavaScript   时间：2016/1/1</div>
						</div>
						<div class="conte">
							内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
内容内容内容内容内容内容内容内容内容内容内容内容
						</div>
					</div>
				</div>

				<div class="lineblockdiv">
					<div class="imgdiv">
						<img src="../static/images/wenimg.jpg">
					</div>
					<div class="contentwen">
						<div class="tit">
							<div class="left">标题标题</div>
							<div class="right">发布人：王秘   分类：JavaScript   时间：2016/1/1</div>
						</div>
						<div class="conte">
							内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
内容内容内容内容内容内容内容内容内容内容内容内容
						</div>
					</div>
				</div>

				<div class="typeoneFy">
					<div class="fenynum">
						<img class="middle" src="../static/images/fyleft.png">
					</div>
					<div class="fenynum addred">1</div>
					<div class="fenynum">2</div>
					<div class="fenynum">3</div>
					<div class="fenynum">
						<img class="middle" src="../static/images/fyright.png">
					</div>
				</div>
				
			</div>
			<div class="indexright">
				<div class="blocks">
					<div class="tt">
						热点关注 <span><img src="../static/images/more.png" class="imgauto"></span>
					</div>
					<a>热点文章热点文章热点文章热点文章</a>
					<a>热点文章热点文章热点文章热点文章</a>
					<a>热点文章热点文章热点文章热点文章</a>
				</div>
			</div>
		</div>
		<footers></footers>
	</div>
</template>
<script>
    import Headers from "./contain/head.vue";
    import Footers from "./contain/foot.vue";
	export default {
	    ready:function (){
	    },
		components: {
		       Headers,
		       Footers
		}
	}
</script>
<style lang="less">
	.app-index {
		width:100%;
		height:auto;
		overflow:hidden;
		.indexleft{
			width:703px;
			height:auto;
			overflow:hidden;
			text-align:center;
			float:left;
			.lineblockdiv{
				width:100%;
				height:108px;
				display:block;
				text-decoration:none;
				border-bottom:1px solid #f9f9f9;
				&:nth-last-child(1){
					border:0;
				}
				margin-bottom:10px;
				.imgdiv{
					width:116px;
					height:106px;
					float:left;
					img{
						width:100%;
						height:auto;
					}
				}
				.contentwen{
					width:576px;
					height:108px;
					float:right;
					border-right:5px solid #ec0000;
					.tit{
						width:100%;
						height:35px;
						line-height:35px;
						.left{
							display:inline-block;
							*display:inline;
							*zoom:1;
							float:left;
							color:#626161;
							font-size:16px;
						}
						.right{
							display:inline-block;
							*display:inline;
							*zoom:1;
							float:right;
							color:#d1cfcf;
							font-size:12px;
							padding-right:10px;
						}
					}
					.conte{
						width:90%;
						height:65px;
						text-align:left;
						color:#626161;
						font-size:14px;
						line-height:20px;
					}
				}
			}
		}
		.indexright{
			width:285px;
			height:auto;
			overflow:hidden;
			float:right;
			.blocks{
				width:284px;
				height:auto;
				overflow:hidden;
				.tt{
					width:100%;
					height:45px;
					line-height:45px;
					text-align:left;
					color:#626161;
					font-size:16px;
					border-bottom:1px solid #f9f9f9;
					span{
						float:right;
						line-height:45px;
						img{
							vertical-align:middle;
						}
					}
				}
				a{
					text-decoration:none;
					width:100%;
					height:30px;
					line-height:30px;
					text-align:left;
					font-size:14px;
					color:#626161;
					display:block;
				}
			}
		}
	}
</style>