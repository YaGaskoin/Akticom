import * as axios from 'axios';

const baseUrl = 'https://gaskoin.pythonanywhere.com/'

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