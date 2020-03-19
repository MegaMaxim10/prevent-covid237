import { MutationTree } from 'vuex';
import * as types from './../ActionsTypes';
import { UserProfileModuleState } from './UserProfileModuleState';
import { UserProfileViewData } from '@/models/UserProfileViewData';

export const mutations: MutationTree<UserProfileModuleState> = {

  [types.SET_ACTIVE_USER_PROFILE](state: UserProfileModuleState, userProfile: UserProfileViewData) {
    if (userProfile !== undefined) {
      state.userProfileViewData = userProfile;
    } else {
      throw new Error('userProfileViewData is undefined');
    }
  }
};
