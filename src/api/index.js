import { clientApi } from "./client";


export const register = (data) => {
  return clientApi.post('/register', data)
}

export const logIn = (data) => {
  return clientApi.post('/login', data, { withCredentials: true })
}

export const newPost = (data) => {
  return clientApi.post('/post', data, { withCredentials: true })
}

export const deletePost = (postId) => {
  return clientApi.delete(`/post/${postId}`, { withCredentials: true })
}

export const getAllPosts = () => {
  return clientApi.get('/post')
}

export const getUserPosts = () => {
  return clientApi.get('/post/user_posts', { withCredentials: true })
}

export const getPost = (id) => {
  return clientApi.get(`/post/${id}`)
}

export const addComment = (data) => {
  return clientApi.put(`/post/comments`, data, { withCredentials: true })
}

export const deleteComment = (commentId) => {
  return clientApi.delete(`/post/comments/${commentId}`, { withCredentials: true })
}

export const addLike = (data) => {
  return clientApi.put(`/post/likes`, data, { withCredentials: true })
}

export const deleteLike = (postId) => {
  return clientApi.delete(`/post/likes/${postId}`, { withCredentials: true })
}