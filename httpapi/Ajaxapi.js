let Vue ;
class Ajaxapi {
    constructor ({
        config = {}
    } = {}) {
        this._options = {
            config : config
        }
        var init = Vue.prototype._init;
        var Ajaxapi = this
        Vue.prototype._init = function (options) {
          this.$Ajaxapi = Ajaxapi;
          init.call(this, options);
        }
        Vue.http.options.root = this._options.config.baseUrl
    }
   
    
    _setStorage(key, value) {
        if(key && value) {
            var jsonStr = JSON.stringify(value);
            sessionStorage.setItem(key, jsonStr);
        }

    }

    _getStorage(key) {
        if(key) {
            var val = sessionStorage.getItem(key)
            return eval("(" + val + ")"); 
           
        }
        return null
    }

    //清除缓存
    _removeStorage(key) {
        sessionStorage.removeItem(key);
    }
    
   
    
}

Ajaxapi.install = function (externalVue) {
    Vue = externalVue;
    if (typeof window !== 'undefined' && window.$) {
        Vue.$ = $;
        Vue.prototype.$ = $;
    }   
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Ajaxapi)
}

export default Ajaxapi