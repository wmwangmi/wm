<template>
	<div class="contentP">
		<Headers></Headers>
		<div class="tonglan">
			<div class="title">文章标题</div>
			<div class="ttneck">
				<div class="inlinebk fl">
					<span class="tt">分类：</span>
					<span class="cont">JavaScript</span>
					<span class="tt">时间：</span>
					<span class="cont">2016/1/1</span>
				</div>
				<div class="inlinebk fr">
					<span class="tt">作者：</span>
					<span class="cont">王秘</span>
				</div>
			</div>
		</div>
		<div class="tonglan">
			<div class="hot-tt">热点文章</div>
		</div>
		<div class="tonglan">
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
			<div class="hot-tt-tt">热点文章热点文章热点文章</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
    import Headers from "./contain/head.vue";
    import Footers from "./contain/foot.vue";
	export default {
	    ready:function (){
	    },
	    methods:{
	    },
		components: {
		       Headers,
		       Footers
		}
	}
</script>
<style lang="less">
	.contentP{
		.title{
			width:100%;
			height:60px;
			line-height:60px;
			color:#5e5d5d;
			text-align:center;
			font-size:30px;
		}
		.ttneck{
			width:100%;
			height:60px;
			line-height:60px;
			border-bottom:dashed 1px #f9f9f9;
			.fl{
				float:left;
			}
			.fr{
				float:right;
			}
			.inlinebk{
				display:inline-block;
				*display:inline;
				*zoom:1;
				.tt{
					color:#5e5d5d;
				}
				.cont{
					color:#ec0000;
				}		
			}
		}
		.hot-tt{
			width:100%;
			height:30px;
			line-height:30px;
			background:#ec0000;
			color:#fff;
			text-align:left;
			text-indent:15px;
		}
		.hot-tt-tt{
			width:25%;
			height:40px;
			line-height:40px;
			float:left;
			color:#939292;
			text-align:center;
			font-size:16px;
		}
	}
</style>