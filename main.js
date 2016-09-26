import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {App,Content,SelfPage,SelfPageCK,SelfPageFB,Signin,Regist} from './components/index.js';
import Msg from './plugins/message.js';
import localConfig from './configer/config.js';
import Ajaxapi from './httpapi/Ajaxapi.js';
import filters from './plugins/filter.js';

import "./static/less/tongyong.less";
// alert(JSON.stringify(ht));
var env = process.env.NODE_ENV;
var isDebug = true
var config = localConfig.dev
if(env == 'prod' || env == 'production') {
  isDebug = false
  config = localConfig.prod
} else if(env === 'uat') {
  config = localConfig.uat
  isDebug = false
  // document.write('<script src=./static/vendors/eruda.min.js></scr' + 'ipt>');
}
//实例化filter
Object.keys(filters).forEach(k=>Vue.filter(k,filters[k]));
// alert(JSON.stringify(env));
Vue.use(VueResource);
Vue.http.options.credentials = true;//跨域
Vue.config.debug = true //debug模式
Vue.config.silent = false

Vue.use(Msg);
let msg = new Msg({})

Vue.use(Ajaxapi);
let ajaxapi = new Ajaxapi({
	config : config
});

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/': {
    component: App
  },
  '/content': {
    component: Content
  },
  '/selfpage': {
  	component: SelfPage
  },
  '/selfpageck': {
  	component: SelfPageCK
  },
  '/selfpagefb': {
  	component: SelfPageFB
  },
  '/signin': {
  	component: Signin
  },
  '/regist': {
  	component: Regist
  }
});

router.start(Vue.extend({}), '#container');

// fastclick.attach(document.body);
