
import axios from "axios";



const axiosInstance = axios.create();

interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}

interface ITodoWithoutId {
   label: string;
   complete: boolean;
}


export const todoAPI = {
    async getAll() {
      const response =  await axiosInstance.get('/api/todos')
      
      return response.data.todos as ITodo[];
    },
    
    async create(data: ITodoWithoutId) {
      const response =  await axiosInstance.post('/api/todos', data);
      
      return response.data.todos as ITodo;
    }
};