import axios from "axios";

const BASE_URL =`${import.meta.env.VITE_API_URL}`

function getall(){
    const promise = axios.get(BASE_URL+'/shoes')
    return promise
}

function getid(id){
    const promise = axios.get(BASE_URL+`/shoes/${id}`)
    return promise
} 

function post_shoe(config,body){
    const promise = axios.post(BASE_URL+`/shoes/new`,body,config)
    return promise
}
const Apishoes = {getall,getid,post_shoe}
export default Apishoes