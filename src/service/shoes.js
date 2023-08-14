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
const Apishoes = {getall,getid}
export default Apishoes