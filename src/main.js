// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
import $ from 'jquery'
import fs from  'fs'

Vue.config.productionTip = false;

//路由跳转完成回到顶部
router.afterEach(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    $,
    fs,
    store,
    components: {App},
    template: '<App/>'
});
