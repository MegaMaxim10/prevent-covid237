import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as coreTypes from './ActionsTypes';
import * as otherActionsTypes from './OtherActionsTypes';
import { CreateUserProfileModule } from './UserProfileModule';
import { login, register, saveProduct, loadProductFile, getProducts, makeDonation,
         getAllUsers, sendEmailToHealthPersonnel } from '../services/SupplierService';

Vue.use(Vuex);


export interface RootState {
  logged_in?: boolean;
  navigation_drawer: boolean;
  authenticated: boolean;
  registerState: boolean;
  useAuthentication: boolean;
  accessToken: any;
  createAccount: boolean;
  saveProductState: string;
  loadProductFileState: string;
  productList: any;
  donationState: any;
  userList: any;
  emailSentState: string;
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
  },
  [coreTypes.GET_SAVE_PRODUCT_STATE](state: RootState) {
    return state.saveProductState;
  },
  [coreTypes.GET_LOAD_PRODUCT_FILE](state: RootState) {
    return state.loadProductFileState;
  },
  [coreTypes.GET_ALL_PRODUCTS](state: RootState) {
    return state.productList;
  },
  [coreTypes.GET_DONATION](state: RootState) {
    return state.donationState;
  },
  [coreTypes.GET_ALL_USERS](state: RootState) {
    return state.userList;
  },
  [coreTypes.GET_SEND_EMAIL_TO_HP](state: RootState) {
    return state.emailSentState;
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
        commit(coreTypes.MU_SET_AUTH_ACCESS_TOKEN, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_SAVE_PRODUCT_STATE]({commit, state}, data: any) {
    saveProduct(data.name, data.price, data.locality, data.description, data.largeDesc, data.file, state.accessToken)
    .then( (response) => {
        commit(coreTypes.MU_SAVE_PRODUCT_STATE, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_LOAD_PRODUCT_FILE]({commit, state}, data: any) {
    loadProductFile(data, state.accessToken).then( (response) => {
        commit(coreTypes.MU_LOAD_PRODUCT_FILE, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_ALL_PRODUCTS]({commit, state}) {
    getProducts(state.accessToken).then( (response) => {
        commit(coreTypes.MU_ALL_PRODUCTS, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_DONATION]({commit, state}, data: any) {
    makeDonation(data.donateurEmail, data.productList, data.locality, data.rue, data.town,  
      data.country, data.receiverName, data.receiverEmail, data.desc, state.accessToken).then( (response) => {
        commit(coreTypes.MU_DONATION, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_ALL_USERS]({commit, state}) {
    getAllUsers(state.accessToken).then( (response) => {
        commit(coreTypes.MU_ALL_USERS, response.data);
    }).catch( (error) => {
      throw new Error('' + error);
    });
  },
  [coreTypes.ACTION_SEND_EMAIL_TO_HP]({commit, state}, data) {
    sendEmailToHealthPersonnel(data.prodId, data.validatorId, state.accessToken).then( (response) => {
        commit(coreTypes.MU_SEND_EMAIL_TO_HP, response.data);
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
  [coreTypes.MU_SAVE_PRODUCT_STATE](state, response) {
    state.saveProductState = response;
  },
  [coreTypes.MU_LOAD_PRODUCT_FILE](state, response) {
    state.loadProductFileState = response;
  },
  [coreTypes.MU_ALL_PRODUCTS](state, response) {
    state.productList = response;
  },
  [coreTypes.MU_DONATION](state, response) {
    state.donationState = response;
  },
  [coreTypes.MU_ALL_USERS](state, response) {
    state.userList = response;
  },
  [coreTypes.MU_SEND_EMAIL_TO_HP](state, response) {
    state.emailSentState = response;
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
      accessToken: {},
      createAccount: false,
      saveProductState: '',
      loadProductFileState: '',
      productList: {},
      donationState: {},
      userList: {},
      emailSentState: ''
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
