import Vue from 'vue';
import Router, { Route, RawLocation, NavigationGuard } from 'vue-router';

import Auth from '@okta/okta-vue';
import LoginComponent from '@/components/Login.vue';


import oktaConfig from './.okta.config';
import getRoutes from './routes';

export const configureRoute = (useAuth: boolean) => {

  Vue.use(Router);
  /*if (useAuth) {
    Vue.use(Auth, {
      issuer: oktaConfig.oidc.issuer,
      client_id: oktaConfig.oidc.clientId,
      redirect_uri: oktaConfig.oidc.redirectUri,
      scope: oktaConfig.oidc.scope,
    });
  }*/
  const routesData = getRoutes();
  /*if (useAuth) {
    routesData.push(
      {
        path: '/implicit/callback',
        component: Auth.handleCallback()
      }
    ); 
    routesData.push(
      {
        path: '/login',
        component: LoginComponent,
      }
    );
  }*/
  const router = new Router({
    mode: 'history',
    routes: routesData,
  });
  /*if (useAuth) {
    const guard = async (to: Route, from: Route,
                         next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void,
      // tslint:disable-next-line:no-empty
    ) => {
      if (to.path === '/login' || to.path === '/implicit/callback') {
        next();
        return;
      }
      const auth = Vue.prototype.$auth;
      const isAuthenticated = await auth.isAuthenticated();
      if (isAuthenticated === undefined || isAuthenticated === false) {
        // Navigate to custom login page
        next({ path: '/login' });
      } else {
        next();
      }
    };
    router.beforeEach(guard);
  }*/

  return router;
};
