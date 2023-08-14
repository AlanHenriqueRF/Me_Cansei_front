import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import Apiperfil from "../service/perfil";

export default function SingUpPage(){
    const [email,setEmail] = useState();
    const [password,setPasword]= useState();
    const [active,setActive] = useState(false);
    const [name, setName] = useState();
    const [cellnumber,setCellnumber]= useState();
    const [confir, setConfir]=useState();
    const [cpf,setCpf]=useState();
    const navigate = useNavigate();

    const [menssage,setMessage] = useState();

    const token = localStorage.getItem('token')
    useEffect(()=>{
        if (token){
            navigate('/home')
            return 
        }
    },[])

    function signin(e){
        e.preventDefault();

        setActive(true)
        if (password !=confir){
            setActive(false)
            setMessage('A senha e a confirmação de senha devem ser iguais!')
            return 
        }
        if (cpf.includes('.') || cpf.includes('-')){
            setActive(false)
            setMessage('Por favor digitar o cpf sem nenhum caracter especial, APENAS NÚMEROS!')
            return 
        }

        Apiperfil.cadastro({email,password,name,cellnumber,cpf})
            .then((res)=>{
                setMessage('')
                navigate('/')
            })
            .catch((err)=>{
                console.log(err.response)
                setActive(false)
                if (err.response.status === 401){
                    setMessage('Senha incorreta!')
                }
                if (err.response.status === 422){
                    setMessage('Verifique se os campos foram preenchidos de maneira correta!')
                }
            }) 
    }

    return (
        <>
            <Container>
                
                <Container_filho>
                    <h1>Cadastro</h1>
                    <Forms onSubmit={(e)=>{signin(e)}}>
                        <label htmlFor="nome">Digite seu nome</label>
                        <input type="text" id="nome" disabled={active} placeholder='nome' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                        
                        <label htmlFor="cpf">Digite seu CPF</label>
                        <input type="text" id="cpf" disabled={active} placeholder='cpf' value={cpf} onChange={(e)=>{setCpf(e.target.value)}} required/>

                        <label htmlFor="telefone">Digite seu némero de telefone</label>
                        <input type="tel" id="telefone" placeholder="(xx) xxxxx-xxxx" value={cellnumber} onChange={(e)=>{setCellnumber(e.target.value)}} required/>
                        
                        <label htmlFor="email">Digite seu email</label>
                        <input type="email" id="email" disabled={active} placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                        
                        <label htmlFor="password">Digite uma senha</label>
                        <input type="password" id="password" disabled={active} placeholder='Senha' value={password} onChange={(e)=>{setPasword(e.target.value)}} required />
                        
                        <label htmlFor="confirm_password">Digite uma senha</label>
                        <input type="password" id="confirm_password" disabled={active} placeholder='confirme a senha' value={confir} onChange={(e)=>{setConfir(e.target.value)}} required />
                        <Button type='submit' disabled={active} >{'Entrar'}</Button>
                    </Forms>
                    <Link to='/'>
                        Já tem uma conta? Clique aqui e faça o seu login!
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