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
export const saveProduct = (name: string, price: string, locality: string, desc: string, largeDesc: string, file: any, 
                            accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('locality', locality);
  formData.append('description', desc);
  formData.append('large_description', largeDesc);
  formData.append('file', file);
  return api.axios.post('api/saveProduct', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};

export const loadProductFile = (file: any, accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('file', file);
  return api.axios.post('api/loadProductImage', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};

export const getProducts = (accessToken: string) => {
  const api = Api();
  const access = accessToken;
  return api.axios.get('api/allProducts', {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};

export const getAllUsers = (accessToken: string) => {
  const api = Api();
  const access = accessToken;
  return api.axios.get('api/allUsers', {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};

export const makeDonation = (donateurEmail: string, productList: string, locality: string, rue: string,   
                             town: string, country: string, receiverName: string, receiverEmail: string, 
                             desc: string, accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('donateurEmail', donateurEmail);
  formData.append('productList', productList);
  formData.append('locality', locality);
  formData.append('rue', rue);
  formData.append('town', town);
  formData.append('country', country);
  formData.append('receiverName', receiverName);
  formData.append('receiverEmail', receiverEmail);
  formData.append('desc', desc);
  return api.axios.post('api/makeDonation', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};

export const sendEmailToHealthPersonnel = (prodId: string, valId: string,  accessToken: string) => {
  const api = Api();
  const access = accessToken;
  const formData = new FormData();
  formData.append('product_id', prodId);
  formData.append('validator_id', valId);
  return api.axios.post('api/sendEmailToHealthPersonnel', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'multipart/form-data',
      'Authorization': 'Bearer ' + access
    }
  });
};


