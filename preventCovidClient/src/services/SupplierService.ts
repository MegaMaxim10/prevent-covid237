import axios, { AxiosInstance } from 'axios';
import Api from './Api';



export const login = (email: string, password: string, accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return api.axios.post('api/login', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};
export const register = (name: string, email: string, password: string, cpassword: string, accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('c_password', cpassword);
  return api.axios.post('api/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};


