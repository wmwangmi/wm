"use strict"

exports.RegBool=function (value,reg){
	var regBool;
	if(reg){
		regBool=reg.test(value);
	}else {
		regBool=/^1[3|4|5|7|8]\d{9}$/.test(value);
	}
	return regBool;
}
exports.rePutFalse=function (classdiv,time){
	var time = time || 3000;
	$("."+classdiv).attr("disabled",true);
							
	setTimeout(function (){
		$("."+classdiv).removeAttr("disabled");
	},time);
}
