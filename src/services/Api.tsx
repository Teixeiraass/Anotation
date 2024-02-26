import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080"
})

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // Trate erros de solicitação aqui, se necessário
    console.log(error);
    return Promise.reject(error);
});


export default api;