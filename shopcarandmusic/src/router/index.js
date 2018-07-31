import Vue from 'vue'
import Router from 'vue-router'
import Shopcar from '@/components/shopcar.vue'
import Toplist from '@/components/toplist.vue'
import Search from '@/components/search.vue'
import Recom from '@/components/recom.vue'
import Music from '@/components/music.vue'
import Datail from '@/components/datail.vue'




Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'shopcar',
        component: Shopcar
    }, {
        path: "/music",
        name: 'music',
        component: Music,
        children: [{
            path: "/",
            name: 'recom',
            component: Recom
        }, {
            path: "/toplist",
            name: 'toplist',
            component: Toplist,
            children: [{
                path: "/datail",
                name: "datail",
                component: Datail
            }]
        }, {
            path: "/search",
            name: 'search',
            component: Search
        }]
    }]
})