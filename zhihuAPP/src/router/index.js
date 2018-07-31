import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Navone from '@/components/navone'
import Navtwo from '@/components/navtwo'
import Navtheer from '@/components/navtheer'
import Navfor from '@/components/navfor'
import Navfive from '@/components/navfive'
import Listone from '@/components/listone'
import Listtwo from '@/components/listtwo'
import Listtheer from '@/components/listtheer'
import Detail from '@/components/Detail'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        children: [{
            path: '/',
            name: 'navone',
            component: Navone,
            children: [{
                path: '/',
                name: 'listone',
                component: Listone
            }, {
                path: '/listone',
                name: 'listone',
                component: Listone
            }, {
                path: '/listtwo',
                name: 'listtwo',
                component: Listtwo
            }, {
                path: '/listtheer',
                name: 'listtheer',
                component: Listtheer
            }]
        }, {
            path: '/navone',
            name: 'navone',
            component: Navone,
            children: [{
                path: '/',
                name: 'listone',
                component: Listone
            }, {
                path: '/listone',
                name: 'listone',
                component: Listone
            }, {
                path: '/listtwo',
                name: 'listtwo',
                component: Listtwo
            }, {
                path: '/listtheer',
                name: 'listtheer',
                component: Listtheer
            }]
        }, {
            path: '/navtwo',
            name: 'navtwo',
            component: Navtwo
        }, {
            path: '/navtheer',
            name: 'navtheer',
            component: Navtheer
        }, {
            path: '/navfor',
            name: 'navfor',
            component: Navfor
        }, {
            path: '/navfive',
            name: 'navfive',
            component: Navfive
        }, {
            path: '/detail',
            name: 'detail',
            component: Detail
        }]
    }]
})