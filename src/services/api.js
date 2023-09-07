import axios from "axios";

export const api = axios.create({
    baseURL: 'https://apifoodexplorer-s9lw.onrender.com'
});