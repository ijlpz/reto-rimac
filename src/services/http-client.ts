import axios, { AxiosInstance } from 'axios';
import { apiURL } from '../utils/env-vars';

const axiosInstance: AxiosInstance = axios.create({ baseURL: apiURL });

export { axiosInstance };
