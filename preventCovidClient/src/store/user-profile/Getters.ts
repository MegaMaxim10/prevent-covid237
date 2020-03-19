import { GetterTree } from 'vuex';
import { RootState } from './../store';
import * as types from './../ActionsTypes';
import { UserProfileModuleState } from './UserProfileModuleState';


export const getters: GetterTree<UserProfileModuleState, RootState> = {
  [types.GET_USER_PROFILE](state: UserProfileModuleState) {
    return state.userProfileViewData;
  },

  [types.GET_USER_PROFILE_LOADING_STATE](state: UserProfileModuleState) {
    return state.userProfileLoaded;
  },
};
