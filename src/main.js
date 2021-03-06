import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastCiclk from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false;

// 解决移动端300ms延时
FastCiclk.attach(document.body);

// 安装懒加载插件
Vue.use(VueLazyLoad,{
	loading:require('./assets/img/common/placeholder.png')
})

// 安装toast插件
Vue.use(toast)

Vue.prototype.$bus=new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
