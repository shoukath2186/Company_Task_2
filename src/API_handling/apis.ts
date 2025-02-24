import api from './config';
import axios from 'axios';
import {MenuItem as responsMenuItem} from '../componests/adminComponents/MenuHandling'

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const LoginHandil = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${api}admin/login`, { email, password });
  return response.data;
};

interface MenuItem {
    _id?: string; 
    name: string;
    description: string;
    price: string;
    type: 'food' | 'drinks'; 
  }

export const CrateMenu = async ({name,description,price,type}:MenuItem): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${api}admin/addItem`, { name,description,price,type });
    return response.data;
  };
  export const UpdateMenu = async ({_id,name,description,price,type}:MenuItem): Promise<LoginResponse> => {
    const response = await axios.put<LoginResponse>(`${api}admin/updateItem`,{_id, name,description,price,type });
    return response.data;
  };
  export const TakeAllItems = async (): Promise<responsMenuItem[]> => {
    const response = await axios.get(`${api}user/getAllItems`);
    return response.data;
  };
  export const DeleteItem = async (id:string): Promise<any> => {
    const response = await axios.delete(`${api}admin/deleteItem?id=${id}`);
    return response.data;
  };

