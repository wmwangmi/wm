<template>
<div class="selfpage">
	<self-head></self-head>
	<div class="tonglan">
		<div class="leftson">
			<div class="toper">
				<div class="touxiang"></div>
				<div class="touxiangR">
					<div class="topwen">座右铭：我要努力我要努力我要努力我要努力我要成功
					</div>
					<div class="biaoqian">
						<span>趣径星级：******</span>
						<span>趣径排名：1</span>
						<span>入住时间：2016/1/1</span>
						<span>推送次数：1</span>
					</div>
				</div>
			</div>
			<div class="jianjiefa">
			<div class="jianjie">
				<div>姓名：
					<span>王秘</span>
				</div>
				<div>性别： 
					<span>女</span>
				</div>
				<div>工作年限：
					<span>3</span>
				</div>
				<div>籍贯：
					<span>邯郸</span>
				</div>
				<div>手机号：
					<span>11122233344</span>
				</div>
				<div>宗教信仰：
					<span>佛教</span>
				</div>
				<div>邮箱：
					<span>111111@qq.com</span>
				</div>
				<div>职业：
					<span>前端工程师</span>
				</div>
				<div>工作地点：
					<span>深圳</span>
				</div>
				<div>公司类型：
					<span>金融</span>
				</div>
				<div>公司名称：
					<span>大福源金融</span>
				</div>
			</div>
			<a class="jianjieanniu">
				<span>修改</span>
			</a>
			</div>
			<div class="setTT"> 功能设置</div>
			<div class="setOptions">
				<div class="setOpt">
					是否有求职意愿：<span>有/没有</span>
				</div>
				<div class="setOpt">
					是否有浏览新职位的意愿：<span>有/没有</span>
				</div>
			</div>
			<div class="wenxinTS">温馨提示：如果有求职意向，在求职单中比没有求职意向的排名靠前。浏览新职位同理。</div>
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
		.toper{
			width:100%;
			height:auto;
			overflow:hidden;
		}
		.touxiang{
			width:204px;
			height:135px;
			float:left;
			margin:10px auto;
			border-radius:10px;
			border:1px solid #eee;
		}
		.touxiangR{
			width:498px;
			height:135px;
			float:right;
			margin-top:10px;
			.topwen{
				width:100%;
				height:72px;
				text-align:left;
				color:#333;
			}
			.biaoqian{
				width:100%;
				height:60px;
				span{
					display:inline-block;
					*display:inline;
					*zoom:1;
					width:50%;
					height:30px;
					line-height:30px;
					float:left;
					color:#ec0000;
					text-align:left;
				}
			}
		}
		.jianjiefa{
			width:100%;
			height:auto;
			overflow:hidden;
			position:relative;
			margin:30px auto;
			clear:both;
		}
		.jianjie{
			width:613px;
			height:auto;
			overflow:hidden;
			background:#f4f4f4;
			float:left;
			text-align:left;
			padding:10px 0 10px 20px;
			div{
				width:50%;
				height:30px;
				line-height:30px;
				color:#333;
				float:left;
				span{
					color:#a29f9f;
				}
			}
		}
		.jianjieanniu{
			width:103px;
			height:100%;
			margin-top:0;
			margin-bottom:0;
			position:absolute;
			display:block;
			top:0;
			right:0;
			text-decoration:none;
			span{
				position:absolute;
				display:block;
				width:103px;
				margin-left:-51.5px;
				left:50%;
				margin-top:90%;
			}
			text-align:center;
			background:#ec0000;
			color:#fff;
		}
		.setTT{
			width:100%;
			height:45px;
			line-height:45px;
			border-bottom:1px solid #f9f9f9;
			text-align:left;
			font-size:18px;
			color:#ec0000;
			margin-bottom:10px;
		}
		.setOptions{
			width:100%;
			height:auto;
			margin:10px auto;
			margin-bottom:5%;
			text-align:left;
			.setOpt{
				display:inline-block;
				*display:inline;
				*zoom:1;
				color:#333;
				padding-right:20px;
				span{
					color:#ec0000;
				}
			}
		}
	}
	.self-right{
		
	}
}
</style>