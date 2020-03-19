import { IProfilesClient } from './ProfileService';

export class ProfilesClientMock implements IProfilesClient {

    public constructor() {
        // Instancier des fake data
    }
    
    public getUserProfile(): Promise<any | null> {
        const value = {} as any;
        value.profileId = 'xxx';
        const profile = {} as any;
        value.profile = profile;
        return Promise.resolve(value);
    }
}
