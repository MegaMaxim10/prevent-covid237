import { IProfilesClient } from '@/services/ProfileService';
import { UserProfileViewData } from '@/models/UserProfileViewData';

export class UserProfileModuleState {
  public userProfileViewData?: UserProfileViewData = undefined;
  public userProfileLoaded?: boolean = false;
  public constructor(public userProfileService: IProfilesClient) { }
}

