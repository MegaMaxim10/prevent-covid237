import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance,
    AxiosAdapter,
    Cancel,
    CancelToken,
    CancelTokenSource,
    Canceler
} from 'axios';

export interface AxiosInstanceWrapper {
    baseUrl: string;
    axios: AxiosInstance;
}

const api = () => {
    // TODO, replace with the address of the API gateway, from a configuration file
    const url = 'http://localhost:8000/';
    // const url = process.env.develoment.VUE_APP_API_URL;
    // const url = 'http://prevent-covid237.org/preventCovidServer/';

    const res: AxiosInstanceWrapper = {
        baseUrl: url,
        axios: axios.create({
            baseURL: url,
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=false'
            }
        })
    };
    return res;
};
export default api;
