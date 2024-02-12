import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/main/DashboardView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
