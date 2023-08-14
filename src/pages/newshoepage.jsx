import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Apishoes from "../service/shoes";

export default function Newshoepage(){
    const [price_cents,setPrice_cents] = useState();
    const [url_shoes,setUrl_shoes]= useState();
    const [descricao,setDescricao] = useState();
    const [shoesname, setShoesname] = useState();
    const [size,setSize]= useState();
    const [color,setColor]=useState();
    const [marca,setMarca]=useState();
    const [active,setActive] = useState(false);
    const navigate = useNavigate();

    const [menssage,setMessage] = useState();

    const token = localStorage.getItem('token')

    function signin(e){
        e.preventDefault();

        if (!token){
            navigate('/')
            return
        }

        /* setActive(true) */
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const body = {color,size,price_cents,url_shoes,shoesname,descricao,marca,jaVendido:false }

        Apishoes.post_shoe(config,body)
            .then((res)=>{
                setMessage('')
                navigate('/shoe')
            })
            .catch((err)=>{
                console.log(err.response)
                setActive(false)
                
                if (err.response.status === 422){
                    setMessage('Verifique se os campos foram preenchidos de maneira correta!')
                }
            }) 
    }

    return (
        <>
        <Navbar/>
            <Container>
                
                <Container_filho>
                    <h1>Cadatre seu tênis </h1>
                    <Forms onSubmit={(e)=>{signin(e)}}>
                        <label htmlFor="tenisnome">Digite o nome do tênis</label>
                        <input type="text" id="tenisnome" disabled={active} placeholder='nome' value={shoesname} onChange={(e)=>{setShoesname(e.target.value)}} required/>
                        
                        <label htmlFor="cor">Digite a Cor do tênis</label>
                        <input type="text" id="cor" disabled={active} placeholder='cor' value={color} onChange={(e)=>{setColor(e.target.value)}} required/>

                        <label htmlFor="tamanho">Digite o tamnho do tênis</label>
                        <input type="text" id="tamanho" placeholder="tamanho" value={size} onChange={(e)=>{setSize(e.target.value)}} required/>
                        
                        <label htmlFor="price_cents">Digite o valor</label>
                        <input type="number" id="price_cents" disabled={active} placeholder='Preço em centavos' value={price_cents} onChange={(e)=>{setPrice_cents(e.target.value)}} required/>
                        
                        <label htmlFor="url_shoes">Digite o link da imagem do tênis</label>
                        <input type="url" id="url_shoes" disabled={active} placeholder='Url da imgem do tênis' value={url_shoes} onChange={(e)=>{setUrl_shoes(e.target.value)}} required />

                        <label htmlFor="marca">Digite a marca</label>
                        <input type="text" id="marca" disabled={active} placeholder='Marca do produto' value={marca} onChange={(e)=>{setMarca(e.target.value)}} required />

                        <label htmlFor="descricao">Descrição do produto</label>
                        <input type="text" id="descricao" disabled={active} placeholder='De uma descrição do produto' value={descricao} onChange={(e)=>{setDescricao(e.target.value)}} required />
                        <Button type='submit' disabled={active} >{'Cadastrar produto'}</Button>
                    </Forms>
                    <h2>{menssage}</h2>
                </Container_filho>
            </Container>

        <Footer/>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    height:100vh;
    align-items:center;
    /* margin-top:15px;
    margin-bottom: 15px; */
`

const Container_filho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    h1{
        font-size:26px;
        padding:25px 25px 13px 25px;        
    }

    h2 {
        color: red;
        
        /* padding:25px 25px 13px 25px; */
    }

    a {
        color: #52B6FF;
        font-weight:400;
        font-size:14px;
        text-align:center;
        text-decoration-color:#52B6FF;
    }
`
const Forms=styled.form`
    display: flex;
    flex-direction: column;
    justify-content:center;
    /* padding:20px; */
    label{
        padding:12px 4px 7px 4px;
    }
    input{
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius:5px;
        padding:0px 11px;
        height:39px; 
        font-size:20px;
        margin:0px 4px;
        
        &::placeholder{
            color: #DBDBDB;
        }
    }
`


const Button = styled.button`
    background-color:#52B6FF;
    /* opacity:${props=>props.opacity}; */
    display:flex;
    justify-content:center;
    align-items:center;
    height:42px;
    border-radius:5px;
    margin: 15px 4px;
    border:none;
    color:#FFFFFF;
    font-size:21px;
    text-align:center;
    div{
        svg{
        width:51px;
        height: 13px;
        fill:#FFFFFF;}
    }`