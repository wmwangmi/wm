<template>
<div class="xiangqianright">
	<div class="selfTit">趣径资源共享</div>
	<div class="tuDiv">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
						<img class="imgauto" src="../../static/images/fengjing.jpg" title="fengjing">
				</div>
				<div class="swiper-slide">
						<img class="imgauto" src="../../static/images/fengjing2.jpg" class="" title="hhfengjing">
				</div>
			</div>
			<div class="pagination"></div>
			<!--<div class="swiper-button-prev">
				<img src="../../static/images/lunhuanarrowl.png">
			</div>
    		<div class="swiper-button-next">
				<img src="../../static/images/lunhuanarrowr.png">
			</div>-->
		</div>
	</div>
	<ul>
		<li>大福音公司招聘启事</li>
		<li>大福音公司招聘启事</li>
		<li>大福音公司招聘启事</li>
		<li>大福音公司招聘启事</li>
		<li>大福音公司招聘启事</li>
		<li>大福音公司招聘启事</li>
	</ul>
	<div class="tuDiv"></div>
	<div class="tuDiv"></div>
</div>
</template>
<script>
import Swiper from "../../plugins/idangerous.swiper.min.js";
export default{
	ready:function (){
		var mySwiper = new Swiper('.swiper-container', {
			pagination: '.pagination',
			paginationClickable: true,
			slidesPerView: 1,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			loop: true,
			autoplay: 3000,
			onSlideChangeStart: function(mySwiper) {
				mySwiper.startAutoplay();
			}
		})
	},
	route:{
		data(transition){

		}
	}
}
</script>
<style lang="less">
@import "../../static/css/idangerous.swiper.css";
.xiangqianright{
    .swiper-container{
    	height:100%;
    	position:relative;
    }
	.swiper-wrapper{
		.swiper-slide{
			height:100%;
			overflow:hidden;
		}
		&:hover{
			cursor:move;
		}
	}
	.swiper-button-prev,.swiper-button-next{
		position:absolute;
		width:24px;
		height:35px;
		img{
			width:100%;
			height:auto;
		}
		top:50%;
		margin-top:-17.5px;
	}
	.swiper-button-prev{
		left:0px;
	}
	.swiper-button-next{
		right:0;
	}

	.selfTit{
			width:100%;
			height:45px;
			line-height:45px;
			border-bottom:1px solid #f9f9f9;
			font-size:18px;
			text-align:left;
			color:#333;
		}
		ul{
			width:100%;
			height:auto;
			padding:0;
			margin:15px auto;
			overflow:hidden;
			counter-reset:jishi;
			list-style:none;
			li{
				counter-increment:jishi;
				text-align:left;
				margin:10px auto;
				list-style-position:inside;
				&:before{
					content:counter(jishi);
					width:20px;
					height:20px;
					line-height:20px;
					background:#ec0000;
					display:inline-block;
					*display:inline;
					*zoom:1;
					color:#fff;
					text-align:center;
					margin-right:10px;
				}
				a{
					color:#333;
					text-decoration:none;
				}
			}
		}
		.tuDiv{
			width:100%;
			height:144px;
			overflow:hidden;
			background:#eee;
			margin:10px auto;
		}
}

</style>