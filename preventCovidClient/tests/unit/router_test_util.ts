import Router from 'vue-router';

import getRoutes from '@/routes';

/**
 * Create a vue router for testing purposes
 */
export const configureRoute = (vue: any) => {

    vue.use(Router);

    const routesData = getRoutes();

    const router = new Router({
        mode: 'history',
        routes: routesData,
    });
    return router;
};
