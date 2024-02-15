import { instance } from "../axios"

export const adminRegister = (data)=>{
    try {
        return instance.post('/admin/register',data)
    } catch (error) {
        return error
    }
} 

export const adminLogin = (data)=>{
    try {
        return instance.post('/admin/login',data)
    } catch (error) {
        return error
    }
} 


export const addProducts = (data)=>{
    try {
        return instance.post('/products',data)
    } catch (error) {
        return error
    }
} 

export const fetchProducts = (data)=>{
    try {
        return instance.get('/products',data)
    } catch (error) {
        return error
    }
} 

export const deleteProduct = (id)=>{
    try {
        return instance.delete(`/products/${id}`)
    } catch (error) {
        return error
    }
} 

export const EditProduct = (id)=>{
    try {
        return instance.put(`/products/${id}`)
    } catch (error) {
        return error
    }
} 