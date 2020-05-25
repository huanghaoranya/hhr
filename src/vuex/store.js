import Vue from 'vue'
import Vuex from 'vuex'
import product from'./modulles/product.js'
import index from './modulles/index.js'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        index
        ,product
    }
})