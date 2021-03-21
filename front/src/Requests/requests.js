import apiClient from '../Settings/axios'

//post requests
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



//user requests
export const updateProfile = async ({id,data}) => {
    return apiClient.put(`/users/${id}`, data)
}
export const updateImage = async ({id,data}) => {
    return apiClient.post(`/users/${id}/avatar`, data)
}
export const getUserImage = async ({id}) => {
    return apiClient.get(`/users/${id}/avatar`)
}