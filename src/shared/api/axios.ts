import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://localhost:44377/api',
    headers: {
        'Content-Type': 'application/json'
    }
})