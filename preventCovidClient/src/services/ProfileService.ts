import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IProfilesClient {
    getUserProfile(): Promise<any | null>;
}

export class ProfilesClient implements IProfilesClient {
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    private instance: AxiosInstance;
    private baseUrl: string;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : 'http://localhost:5004';
    }

    public getUserProfile(): Promise<any | null> {
        let url = this.baseUrl + '/api/Profiles/get_user_profile';
        url = url.replace(/[?&]$/, '');

        const options = {
            method: 'GET',
            url,
            headers: {
                Accept: 'application/json'
            }
        } as AxiosRequestConfig;

        return this.instance.request(options).then((response: AxiosResponse) => {
            return {};
        });
    }
}
