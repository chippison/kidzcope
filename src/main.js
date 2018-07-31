import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './bootsraps/bootstrap';

import './scss/site.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
