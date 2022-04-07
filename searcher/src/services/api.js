import axios from 'axios';
// 55495000/json

const api = axios.create({
    baseURL:"http://viacep.com.br/ws/"
})

export default api;
