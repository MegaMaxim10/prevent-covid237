// import Home from './views/Home.vue';
import Settings from '@/components/settings/Settings.vue';
import Signin from '@/components/authentication/Signin.vue';
import Register from '@/components/authentication/Register.vue';
import Home from '@/components/home/Home.vue';
import ProductViewDetails from '@/components/products/ProductViewDetails.vue';
import ProductViewEdit from '@/components/products/ProductViewEdit.vue';
import DeliveryInfoEdit from '@/components/products/DeliveryInfoEdit.vue';
import HandleProducts from '@/components/admin/HandleProducts.vue';
import HandleUsers from '@/components/admin/HandleUsers.vue';

const getRoutes = () => {
    return [
      {
        path: '/handleUsers',
        name: 'handleUsers',
        component: HandleUsers
      },
      {
        path: '/handleProducts',
        name: 'handleProducts',
        component: HandleProducts
      },
      {
        path: '/deliveryInfoEdit',
        name: 'deliveryInfoEdit',
        component: DeliveryInfoEdit
      },
      {
        path: '/productEdit',
        name: 'productEdit',
        component: ProductViewEdit
      },
      {
        path: '/productDetails',
        name: 'productDetails',
        component: ProductViewDetails
      },
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
