// import Home from './views/Home.vue';
import Settings from '@/components/settings/Settings.vue';
import Signin from '@/components/authentication/Signin.vue';
import Register from '@/components/authentication/Register.vue';
import Home from '@/components/home/Home.vue';


const getRoutes = () => {
    return [
      {
        path: '/settings',
        name: 'settings',
        component: Settings
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/signin',
        name: 'signin',
        component: Signin
      },
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      },
    ] as Array<{
        name?: string;
        path: string;
        component: any
    }>;
  };

export default getRoutes;
