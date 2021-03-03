import apiClient from '../Settings/axios'

export const getPosts = async (data) => {
    return apiClient.get(`/posts?limit=${data}`)
}
export const createPost = async (data) => {
    return apiClient.post('/posts',{data})
}
export const getOnePost = async (data) => {
    return apiClient.get(`/posts/${data}`)
}
export const updatePost = async (id,data) => {
    return apiClient.put(`/posts/${id}`,{data})
}