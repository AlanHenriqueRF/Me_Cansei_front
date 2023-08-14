import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import Apiperfil from "../service/perfil";

export default function SingInPage(){
    const [email,setEmail] = useState();
    const [password,setPasword]= useState();
    const [active,setActive] = useState(false);
    const navigate = useNavigate();
    

    const [menssage,setMessage] = useState();
    const token = localStorage.getItem('token')
    useEffect(()=>{
        if (token){
            navigate('/shoes')
            return 
        }
    },[])
    

    function signin(e){
        e.preventDefault();
        setActive(true)
        
        Apiperfil.login({email,password})
            .then((res)=>{
                const {token} = res.data
                setMessage('')
                navigate('/shoes')
                localStorage.setItem("token",(token))

            })
            .catch((err)=>{
                console.log(err.response)
                setActive(false)
                if (err.response.status === 404){
                    setMessage('Email não cadastrado!')
                }
                if (err.response.status === 401){
                    setMessage('Senha incorreta!')
                }
                if (err.response.status === 422){
                    setMessage('Email e/ou senha devem ser validos!')
                }
            })
    }

    return (
        <>
            <Container>
                
                <Container_filho>
                    <h1>Login</h1>
                    <Forms onSubmit={(e)=>{signin(e)}}>
                        <label htmlFor="email">Digite seu email</label>
                        <input type="email" id="email" disabled={active} placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete="false" required/>
                        <label htmlFor="password">Digite sua senha</label>
                        <input type="password" id="password" disabled={active} placeholder='password' value={password} onChange={(e)=>{setPasword(e.target.value)}} autoComplete='false' required />
                        <Button type='submit' disabled={active} >{'Entrar'}</Button>
                    </Forms>
                    <Link to='/SignUp'>
                        Não tem uma conta? Cadastre-se!
                    </Link><br/>
                    <h2>{menssage}</h2>
                </Container_filho>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    height:100vh;
    align-items:center;
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