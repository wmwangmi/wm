<template>
<div class="selfpage">
	<self-head></self-head>
	<div class="tonglan">
		<div class="leftson">
			<div class="ttline">
				<div class="inlineblock ttls">发布种类   <span>19</span></div>
				<div class="inlineblock ttls">点击量   <span>1111</span></div>
				<div class="inlineblock ttls">排名   <span>1</span></div>

				<div class="search">
					<input placeholder="请输入您要搜索的内容">
					<button>GO</button>
				</div>

			</div>
			<div class="paixuset">
				<div class="settyp">
					种类
				</div>
				<div class="settyp">
					时间
				</div>
				<div class="settyp">
					点击量
				</div>
				<div class="inlineblock paixotp">
					<a>升序</a>
					|
					<a>降序</a>
				</div>
			</div>
			<div class="listdiv">
				<div class="inlineblock spanleft">
					您的第一篇文章您的第一篇文章您的
				</div>
				<div class="inlineblock spanright">
					<span>js篇</span>  <span>2016/6/1</span>  <span>点击量：100</span>
					<img src="../static/images/bianji.png">
					<img src="../static/images/del.png">
				</div>
			</div>

			<div class="listdiv">
				<div class="inlineblock spanleft">
					您的第一篇文章您的第一篇文章您的
				</div>
				<div class="inlineblock spanright">
					<span>js篇</span>  <span>2016/6/1</span>  <span>点击量：100</span>
					<img src="../static/images/bianji.png">
					<img src="../static/images/del.png">
				</div>
			</div>
			<div class="selffy">
				<div class="prev">上一篇</div>
				<div class="fyt">
					<div class="son active">1</div>
					<div class="son">2</div>
				</div>
				<div class="next">下一篇</div>
				<div class="jumpfa">
					跳转到
						<select class="son">
							<option>1</option>
							<option>2</option>
							<option>3</option>
						</select>
					篇
				</div>
			</div>
		</div>
		<div class="self-right">
			<self-right></self-right>
		</div>
	</div>
	<Footers></Footers>

</div>
</template>
<script>
import SelfHead from "./contain/selfhead.vue";
import SelfRight from "./contain/selfright.vue";
import Footers from "./contain/foot.vue";

export default{
	components:{
		SelfHead,
		SelfRight,
		Footers
	}
}
</script>
<style lang="less">
.selfpage{
	width:100%;
	height:auto;
	overflow:hidden;
	.leftson{
		width:736px;
		height:auto;
		float:left;
		.ttline{
			width:100%;
			height:45px;
			line-height:45px;
			border-bottom:1px solid #edecec;
			.ttls{
				color:#333;
				font-size:16px;
				span{
					color:#ec0000;
					padding:0 20px;
				}
			}
			.search{
				margin-top:5px;
			}
		}
		.paixuset{
			width:100%;
			height:auto;
			overflow:hidden;
			padding:10px 0;
			.settyp{
				width:117px;
				height:36px;
				border:1px solid #f9f9f9;
				text-align:center;
				line-height:36px;
				color:#616161;
				float:left;
				margin-right:10px;
				selection:none;
				-webkit-selection:none;
				-o-selection:none;
				-ms-selection:none;
				cursor:pointer;
			}
			.paixotp{
				float:right;
				padding-top:10px;
				font-size:14px;
				cursor:pointer;
				a{
					color:#616161;
				}
			}
		}
		.listdiv{
			width:96%;
			height:50px;
			padding:0 2%;
			display:block;
			line-height:50px;
			background:#f9f9f9;
			margin:10px auto;
			.spanleft{
				float:left;
				color:#555454;
			}
			.spanright{
				float:right;
				color:#818080;
				span{
					padding:0 5px;
					font-size:12px;
				}
				img{
					vertical-align:middle;
					padding:0 5px;
					cursor:pointer;
				}
			}
		}
	}
}
</style>