import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/views/main/DashboardView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/notFound/NotFoundView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
