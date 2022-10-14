import * as axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000'

const instance = axios.default.create({
    baseURL: baseUrl,
    withCredentials: true,
})

export const shopApi = {
    upload(formData) {
        return instance.post('/api/upload/', formData)
    },
    list(page) {
        return instance.get('/api/product/?page=' + page
        ).then(response => {
            return response.data
        })
    },
}