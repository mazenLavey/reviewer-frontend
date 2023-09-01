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