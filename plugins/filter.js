"use strict"
import moment from 'moment';


exports.moment = (value, formatString) => {
    formatString = formatString || 'YYYY-MM-DD';
    if(!!!value) { 
      return '2014-12-12'
    } 
    return moment(value).format(formatString);
}

exports.limitTo = (value, num) => {
    var str='';
	num=Number(num);
	value=String(value);
	str=value.substr(num);
	return str;
}




