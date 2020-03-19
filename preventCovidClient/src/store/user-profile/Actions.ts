import { ActionTree} from 'vuex';
import { RootState } from './../store';
import * as types from './../ActionsTypes';
import { UserProfileModuleState } from './UserProfileModuleState';

export const actions: ActionTree<UserProfileModuleState, RootState> = {
  async [types.ACTION_LOAD_USER_PROFILE](context) {
    // Charger le profil
  }
};
