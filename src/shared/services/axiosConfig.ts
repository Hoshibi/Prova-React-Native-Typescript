import axios, { AxiosError } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'http://192.168.0.106:3333',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error: AxiosError) {
  if(error.response?.status === 500) {
    throw new Error('Erro no servidor')
  }
  return Promise.reject(error.response);
});

instance.interceptors.request.use(function (config) {
  const isToken = AsyncStorage.getItem('token');
  if( isToken ){
    config.headers!.Authorization = `Bearer ${isToken}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance;