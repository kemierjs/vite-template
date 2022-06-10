import {createRouter, createWebHistory} from "vue-router";
let routes = [{
    path: '/dog',
    name: 'dog',
    component: () => import('../../pages/dog.vue')
}, {
    path: '/cat',
    name: 'cat',
    component: () => import('../../pages/cat.vue')
},];
let router = createRouter({
    history: createWebHistory(),
    routes,
});
export {router}
