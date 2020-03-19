import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import {configureRoute} from './router';
import {buildStore} from './store/store';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { ProfilesClient } from './services/ProfileService';

const apiUrl = process.env.VUE_APP_API_URL;
let useAuthentication = true;


if (process.env.VUE_APP_USE_AUTHENTICATION === 'false') {
  useAuthentication = false;
}


if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
   
   import('./services/ProfileServiceMock').then(async ({ProfilesClientMock}) => {
    const profileClientMock = new ProfilesClientMock();
    const store = buildStore({profilesClient: profileClientMock}, 
        useAuthentication);
    Vue.config.productionTip = false;
    const router = configureRoute(useAuthentication);
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  });
} else {
  // Production mode
  const profilesClient = new ProfilesClient(apiUrl);
  
  const store = buildStore({profilesClient}, useAuthentication);
  Vue.config.productionTip = true;
  Vue.config.devtools = false;
  const router = configureRoute(true);
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
}


