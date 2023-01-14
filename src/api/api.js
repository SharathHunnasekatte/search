import axios from "axios"

export const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5ba8efb23100007200c2750c'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}