import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as coreTypes from './ActionsTypes';
import * as otherActionsTypes from './OtherActionsTypes';
import { CreateUserProfileModule } from './UserProfileModule';
import { login, register} from '../services/SupplierService';

Vue.use(Vuex);


export interface RootState {
  logged_in?: boolean;
  navigation_drawer: boolean;
  authenticated: boolean;
  registerState: boolean;
  useAuthentication: boolean;
  accessToken: string;
  createAccount: boolean;
}
export const getters: GetterTree<RootState, any> = {
  [coreTypes.GET_CREATE_ACCOUNT](state: RootState) {
    return state.createAccount;
  },
  [coreTypes.GET_USE_AUTHENTICATION](state: RootState) {
    return state.useAuthentication;
  },
  [coreTypes.GET_ACCESS_TOKEN](state: RootState) {
    return state.accessToken;
  }
};

export const actions: ActionTree<RootState, any> = {
  
  [coreTypes.ACTION_CREATE_ACCOUNT]({commit, state}, createAccount: boolean) {
    commit(coreTypes.MU_CREATE_ACCOUNT, createAccount);
  },
  [coreTypes.ACTION_REGISTER]({commit, state}, data: any) {
    register(data.name, data.email, data.password, data.cpassword, state.accessToken).then( (response) => {
        commit(coreTypes.MU_REGISTER_STATUS, response.data.success.status);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_LOGIN]({commit, state}, data: any) {
    login(data.email, data.password, state.accessToken).then( (response) => {
        commit(coreTypes.MU_SET_AUTH_STATUS, response.data.success.status);
        commit(coreTypes.MU_SET_AUTH_ACCESS_TOKEN, response.data.success.token);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  

  [coreTypes.ACTION_NOT_DEFINED]({commit, state}, data: any) {
    commit(coreTypes.NO_ACTION_DEFINED);
  },
};

export const mutations: MutationTree<RootState> = {
  [coreTypes.NO_ACTION_DEFINED](state, actionKey: string) {
  // EMPTY 
  },

  [coreTypes.MU_TOOGLE_NAV_DRAWER](state) {
    state.navigation_drawer = !state.navigation_drawer;
  },

  [coreTypes.MU_CREATE_ACCOUNT](state, response) {
    state.createAccount = response; 
  },

  [coreTypes.MU_SET_AUTH_STATUS](state, useAuthentication) {
    state.useAuthentication = useAuthentication;
  },

  [coreTypes.MU_SET_AUTH_ACCESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken;
  },

  [coreTypes.MU_REGISTER_STATUS](state, registerStatus) {
    state.registerState = registerStatus;
  },
};

/**
 * Method used to create store with a subset of modules
 */
export const  buildStore = (services: any, 
                            useAuth: boolean) => {
  const UserProfileModule = CreateUserProfileModule(services.profilesClient);
  const store: StoreOptions<RootState> = {
    state: {
      logged_in: useAuth ? true : false,
      navigation_drawer: false,
      authenticated: useAuth ? true : false,
      useAuthentication : false, // useAuth,
      registerState: false,
      accessToken: '',
      createAccount: false,
    },
    modules: {
      UserProfileModule
    },
    actions,
    mutations,
    getters
  };

  return new Vuex.Store<RootState>(store);
};

 // export default new Vuex.Store<RootState>(store);
