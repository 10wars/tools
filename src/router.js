
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base : "tools",
    scrollBehavior : function() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [
        {
          path: '/',
          alias: '/encoder',
          name : "Encoder",
          meta : { layout: "common" },
          component: () => import(/* webpackChunkName: "main" */ './components/modules/ToolsMain.vue'),
        },
        {
          path: '/trade2',
          redirect : '/trade2/1',
        },
        {
            path : '/trade2/:account',
            name: 'Dashboard',
            meta : { layout: "dashboard" },
            component: () => import(/* webpackChunkName: "dashboard" */ './trade2/Dashboard.vue'),
        },
        {
          path : '/trade2/:account/:symbol',
          name: 'Dashboard_Symbol',
          meta : { layout: "dashboard" },
          component: () => import(/* webpackChunkName: "dashboard" */ './trade2/Dashboard.vue'),
      },
    ]
});