import axios from "axios";

const BASE_URL =`https://mecanseiapi.onrender.com`

function login(body){
    const promise = axios.post(BASE_URL+'/Signin',body)
    return promise
}

function cadastro(body){
    const promise = axios.post(BASE_URL+'/Signup',body)
    return promise
}
const Apiperfil = {cadastro,login}
export default Apiperfil