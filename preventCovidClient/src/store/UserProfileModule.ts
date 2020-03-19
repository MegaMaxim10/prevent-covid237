import { Module } from 'vuex';
import { RootState } from './store';
import { IProfilesClient } from '@/services/ProfileService';

import { getters } from './user-profile/Getters';
import { mutations } from './user-profile/Mutations';
import { actions } from './user-profile/Actions';
import { UserProfileModuleState } from './user-profile/UserProfileModuleState';

export * from './user-profile/UserProfileModuleState';
export * from './user-profile/Actions';
export * from './user-profile/Getters';
export * from './user-profile/Mutations';

export const CreateUserProfileModule = (profilesClient: IProfilesClient) => {
  const resp: Module<UserProfileModuleState, RootState> = {
    namespaced: true,
    state: new UserProfileModuleState(profilesClient),
    getters,
    mutations,
    actions
  };
  return resp;
};
