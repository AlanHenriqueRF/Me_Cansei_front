import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ChevronForwardSharp } from 'react-ionicons'


export default function Footer() {
    const navigate = useNavigate();

    function vai_para_cadastro(){
        navigate('/home/newShoe')
    }
   
    return (
        <Footerstyle>
            <Container onClick={()=>{vai_para_cadastro()}} >
                
                    <h1>FAÇA AGORA O SEU ANÚNCIO</h1>
                    <ChevronForwardSharp
                    color={'#ffffff'} 
                    title={'fazer anúcio'}
                    height="20px"
                    width="20px"
                    />

            </Container>
        </Footerstyle>
    )
}

const Footerstyle = styled.div`
    display: flex;
    position: fixed;
    bottom:0;
    width:100vw;
    height:70px;
    align-items: center;
    justify-content:center;
    background-color:#FFFFFF;
    box-shadow: 0px -2px 3px 2px #00000026;

`
const Container = styled.button`
    display: flex;
    flex-wrap:wrap;
    height: 42px;
    width:calc(100vw - 39px);/* 100vw; */
    justify-content: center;
    align-items: center;
    background-color:black;
    border-radius:23px;
    border-style:none;
    

    h1{
        color: #ffffff;
        font-size:18px;
        font-weight:400;
        margin-left: 9px;
    }
    span{
        padding: 2px 0px 0px 7px;
    }

`

