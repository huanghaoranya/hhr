import Nav from '../components/Nav.vue'
import productExcel from "../components/productExcel.vue";
import contact from "../components/contact.vue";
import projectDetail from "../components/projectDetail.vue";
import Case from "../components/Case.vue";
import use from "../components/use.vue";
import aboutBanner from "../components/aboutBanner.vue";
import product from "../components/product.vue";
import indexItem from "../components/indexItem.vue";
import indexIntroduce from "../components/indexIntroduce.vue";
import indexCarousel from "../components/indexCarousel.vue";
import index from "../components/index.vue"
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    // mode:history,
    routes: [
        {
            path: '/',
            component:index,
            children:[
                {
                    path: '/',
                    components: {
                        indexIntroduce: indexIntroduce,
                        indexCarousel: indexCarousel,
                        indexItem: indexItem,
                    }
                }
            ]
        },
        {
            path: '/product',
            component: product,
        },
        {
            path: '/about',
            component: aboutBanner,
        },
        {
            path: '/use',
            component: use,
        },
        {
            path: '/case',
            component: Case,
        },
        //产品系列
        {
            path:'/projectD',
            component:projectDetail
        },
        {
            path:'/contact',
            component:contact
        },
        {
            path:'/productExcel',
            component:productExcel
        },
        {
            path:'/Nav',
            component:Nav
        }
    ]
});
