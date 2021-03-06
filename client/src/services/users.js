import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/signup', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/signin', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post('/')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}

export const getWishList = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/wishlist`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const addToWishList = async (userId, productId) => {
  try {
    const response = await api.put(`/users/${userId}/wishlist/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteWishListItem = async (userId, productId) => {
  try {
    const response = await api.delete(`/users/${userId}/wishlist/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
