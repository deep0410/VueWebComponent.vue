import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from './App.vue';
import 'document-register-element/build/document-register-element';

Vue.use(vueCustomElement);
Vue.customElement('vue-custom-element-hello-world-example', App);

// Vue.config.productionTip = false;
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app');
