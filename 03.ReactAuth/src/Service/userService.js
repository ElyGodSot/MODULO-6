import axios from "axios"
const BASE_URL='http://localhost:3000'
//sign up
const registerUserService = (data)=> axios.post(`${BASE_URL}/register`, data) //se manda en json

const loginUserService = (data)=> axios.post(`${BASE_URL}/login`, data)

export {registerUserService, loginUserService}