let Vue;
/**
 * 弹窗插件。待完善 TODO
 */
class Msg {
	constructor({
		template = ''

	} = {}) {
		//      this._options = {
		//          template:  "<div class='weui_dialog_alert' id='info' style='display: none;'><div class='weui_mask'></div><div class='weui_dialog'>"+
		//              "<div class='weui_dialog_hd'>"+
		//              "<strong class='weui_dialog_title'>信息</strong></div><div id='msgContent' class='weui_dialog_bd'></div><div class='weui_dialog_ft'>"+
		//              "<a href='javascript:;' id='hideMsg'  class='weui_btn_dialog primary'>确定</a></div></div></div>",
		//          userInfo: {}
		//      }
		this._options = {
			template: "<div class='weui_dialog_alert' id='info' style='display: none;'><div class='weui_mask'></div><div class='weui_dialog'>" +
				"<div class='weui_dialog_hd'>" +
				"</div><div id='msgContent' class='weui_dialog_bd'></div><div class='weui_dialog_ft'>" +
				"<a href='javascript:;' id='hideMsg'  class='weui_btn_dialog primary'>确定</a></div></div></div>",
			template2: "<div class='weui_dialog_alert' id='info2' style='display: none;'><div class='weui_mask'></div><div class='weui_dialog'>" +
				"<div class='weui_dialog_hd'>" +
				"</div><div id='msgContent2' class='weui_dialog_bd'></div><div class='weui_dialog_ft'>" +
				"<a href='javascript:;' id='hideMsg'  class='weui_btn_dialog primary but1'></a><a href='javascript:;' id='hideMsg2'  class='weui_btn_dialog primary but2'></a></div></div></div>",
			template3: "<div class='weui_dialog_alert' id='info3' style='display: none;'><div class='weui_mask'></div><div class='weui_dialog'>" +
				"<div class='weui_dialog_hd'>" +
				"</div><div id='msgContent3' class='weui_dialog_bd'></div><div class='weui_dialog_ft'>" +
				"<a href='javascript:;' id='hideMsg3'  class='weui_btn_dialog primary'>返回</a></div></div></div>",
			template4: "<div class='weui_dialog_alert' id='info4' style='display: none;'><div class='weui_mask'></div><div class='weui_dialog'>" +
				"<div class='weui_dialog_hd'>" +
				"</div><div class='passTT'>请输入交易密码，以验证身份</div><div id='msgContent' class='weui_dialog_bd'><input type='password' class='inputPass'></div><div class='weui_dialog_ft'>" +
				"<a href='javascript:;' id='hideMsg4'  class='weui_btn_dialog primary but1'>取消</a></div></div></div>",
			userInfo: {},
			}
		var init = Vue.prototype._init;
		var Msg = this
		Vue.prototype._init = function(options) {
			this.$Msg = Msg;
			init.call(this, options);
		}
		Vue.msgOption = this._options
	}

	passWrod(obj) {
		var divEl = document.createElement('div');
			divEl.innerHTML = Vue.msgOption.template4;
			$('#app').append(divEl);
			$('#hideMsg4').click(function() {
				$('#info4').hide();
			})
			$(".inputPass").val('')
			$(".inputPass").on("keyup",function (){
				var vlu = $(this).val();
				if(vlu.length == 6){
					vlu =  $.md5(vlu);
					obj.fn1(vlu, obj.url);
					$('#info4').remove();
				}
			});
			// $('.but2').click(function() {
			// 	if(obj.fn2) {
			// 		obj.fn2();
			// 	}
			// });
//			$('#msgContent').html(obj.msg)
			$('#info4').show();
	}
	//	实例中的例子用法  this.$Msg.passWrod({'fn1':function(){alert('fn1');},'fn2':function(){alert('fn2');}}); || this.$Msg.passWrod({});

	backAlert(obj) {
		var divEl = document.createElement('div');
		divEl.innerHTML = Vue.msgOption.template3;
		$('#app').append(divEl);
		if(obj && obj.but1 ){
			$('#hideMsg3').text(obj.but1);
		}
		$('#hideMsg3').click(function() {
			if(obj.fn) {
				obj.fn(obj.urls);
			} else {
				$('#info3').hide();
			}
			$('#info3').hide();
		})
		$('#msgContent3').html(obj.msg || obj.toString())
		$('#info3').show();
	}

	msg(obj) {
			var divEl = document.createElement('div');
			divEl.innerHTML = Vue.msgOption.template2;
			$('#app').append(divEl);
			$('.but1').text(obj.but1);
			$('.but2').text(obj.but2 || '确定');
			$('#hideMsg').click(function() {
				$('#info2').remove();
			})
			$('#hideMsg2').click(function() {
				$('#info2').remove();
			})
			$('.but1').click(function() {
				$('#info2').remove();
				if(obj.fn1) {
					if(obj.link) {
						obj.fn1(obj.link);
					} else {
						obj.fn1();
					}
				}
				
			});
			$('.but2').click(function() {
				if(obj.fn2) {
					if(obj.link2) {
						obj.fn2(obj.link2);
					} else {
						obj.fn2();
					}
					// obj.fn2();
				}
				$('#info2').remove();
			});
			$('#msgContent2').html(obj.msg)
			$('#info2').show();
		}

	info2(obj) {
			var divEl = document.createElement('div');
			divEl.innerHTML = Vue.msgOption.template2;
			$('#app').append(divEl);
			$('.but1').text(obj.but1);
			$('.but2').text(obj.but2 || '确定');
			$('#hideMsg').click(function() {
				$('#info2').remove();
			})
			$('#hideMsg2').click(function() {
				$('#info2').remove();
			})
			$('.but1').click(function() {
				if(obj.fn1) {
					obj.fn1();
				}
			});
			$('.but2').click(function() {
				if(obj.fn2) {
					obj.fn2();
				}
			});
			$('#msgContent2').html(obj.msg)
			$('#info2').show();
		}
		//	实例中的例子用法  this.$Msg.info2({'msg':'暂无相关处理','but1':'qu','but2':'ding','fn1':function(){alert('fn1');},'fn2':function(){alert('fn2');}});

	info1(titile, message) {
		var divEl = document.createElement('div');
		divEl.innerHTML = Vue.msgOption.template;
		$('#app').append(divEl);
		$('#hideMsg').click(function() {
			$('#info').hide();
		})
		$('#msgContent').html(message)
		$('.weui_dialog_title').html(titile)
		$('#info').show();
	}

	info(message) {
		var divEl = document.createElement('div');
		divEl.innerHTML = Vue.msgOption.template;
		$('#app').append(divEl);
		$('#hideMsg').click(function() {
			$('#info').hide();
		})
		$('#msgContent').html(message)
		$('#info').show();
	}
	

}

Msg.install = function(externalVue) {
	Vue = externalVue;
	if(typeof window !== 'undefined' && window.$) {
		Vue.$ = $;
		Vue.prototype.$ = $;
	}
}

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Msg)
}

export default Msg