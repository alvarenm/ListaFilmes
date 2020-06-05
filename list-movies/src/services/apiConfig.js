import axios from 'axios'

export const api_key = '7af5ad82a7dff227d936293923111806'
export const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})