<template>
<div class="selfpage">
	<self-head></self-head>
	<div class="tonglan">
		<div class="leftson">
			<div class="ttline">
				发布文章
			</div>
			<div class="epiceditors" id="example-1"></div>
			<div class="wenxinTS">温馨提示：这是markdown编辑器，请用markdown语言</div>
			<div class="upimgbutton">上传图片<input type="file" multiple @change="preview()" />  </div>
			<div class="preview" id="preview"></div>  
			
			<button class="gitup">好</button>

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
	data(){
		return {}
	},
	ready(){
		var opts =
		      { container: 'example-1', 
			      file: { defaultContent: "#welcome" }, 
			      focusOnLoad: true, 
			      autogrow: {
			          minHeight: 350
			      },
			      basePath: 'shellstatic/epiceditor',
				  theme: {
				    base: '/themes/base/epiceditor.css',
				    preview: '/themes/preview/preview-dark.css',
				    editor: '/themes/editor/epic-dark.css'
				  }
		      }
		    , editor = new EpicEditor(opts).load();
	},
	route:{
		data(transition){
			
		}
	},
	components:{
		SelfHead,
		SelfRight,
		Footers
	},
	methods:{
		preview()  
		 {
		 	  var preview = document.querySelector('#preview');
			  var files   = document.querySelector('input[type=file]').files;

			  function readAndPreview(file) {

			    // Make sure `file.name` matches our extensions criteria
			    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
			      var reader = new FileReader();

			      reader.addEventListener("load", function () {
			        var image = new Image();
			        image.height = 100;
			        image.title = file.name;
			        image.src = this.result;
			        preview.appendChild( image );
			      }, false);

			      reader.readAsDataURL(file);
			    }

			  }

			  if (files) {
			    [].forEach.call(files, readAndPreview);
			  }

			  console.log(JSON.stringify(document.querySelector('input[type=file]').files[0].value));
  
		}
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
		text-align:center;
		.ttline{
			width:100%;
			height:45px;
			line-height:45px;
			border-bottom:1px solid #edecec;
			text-align:left;
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
	.epiceditors{
		margin:10px auto;
	}
	.wenxinTS{
		width:100%;
		height:35px;
		line-height:35px;
		color:#ec0000;
		font-size:16px;
		text-align:left;
	}
	.preview{
		width:100%;
		height:auto;
		overflow:hidden;
		margin:5px auto;
		img{
			width:24%;
			height:auto;
			object-fit:contain;
			object-position:center;
			float:left;
			margin:10px auto;
			margin-top:0;
			margin-left:1%;
		}
	}
	.upimgbutton{
		width:125px;
		height:40px;
		line-height:40px;
		background:#ec0000;
		color:#ffffff;
		text-align:center;
		border-radius:5px;
		user-select:none;
		-webkit-user-select:none;
		cursor:pointer;
		position:relative;
	}
	input[type='file']{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		appearance:none;
		opacity:0;
	}
	.gitup{
		width:60px;
		height:60px;
		line-height:60px;
		text-align:center;
		border-radius:100%;
		background:#ec0000;
		color:#ffffff;
		font-size:20px;
		margin:10px auto;
	}
}
</style>