import { useParams } from "react-router-dom"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Apishoes from "../service/shoes";

export default function Shoespage() {
    const { id } = useParams();
    const [tenis, setTenis] = useState([])

    useEffect(() => {
        Apishoes.getid(id)
            .then((res) => {
                setTenis(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Navbar />
            <Container>
                <Primeiradiv>
                    <ImageTenis>

                        <img src={tenis.url_shoes} alt={tenis.shoesname} />

                    </ImageTenis>
                    <Informacoes>
                        <h2>{tenis.shoesname}</h2>
                        <h3>Tamanho: {tenis.size}</h3>
                        <h3>Cor: {tenis.color}</h3>
                        <h3>Nome do proprietário: {tenis.name}</h3>
                        <h3>Telefone para contato: {tenis.cellnumber}</h3>
                        <Price>
                            
                            <h6>R$ {tenis.price_cents / 100},00</h6>
                        </Price>
                    </Informacoes>

                </Primeiradiv>

                <Descricao>
                    <h1>Marca: {tenis.marca}</h1><br/>
                    <h2>Descrição:</h2><br/>
                    <p>{tenis.descricao}</p>
                </Descricao>

            </Container>
            <Footer />
        </>)
}


const Container = styled.div`
    margin: 75px 5% 70px 5%; 

    border: 0.8px solid black;
    /* display: flex;
    justify-content: space-between; */
    
    width:90%;

    box-shadow: gray 0px 3px 4px -1px, gray 2px 3px 4px -1px;

    height:calc(100vh - 150px);

`

const Primeiradiv = styled.div`
    display:flex;
`

const ImageTenis = styled.div`

    border: 2.4px solid black;
    margin: 5px 7px;
    min-width: 50vw;
    max-width:50vw;
    max-height:50vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
`

const Informacoes = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left:14px;
    h2{
        font-size:22px;
        font-weight:800;
        padding-bottom:7px;
    }

    h3 {
        font-size:14px;
        padding-bottom:2px;
    }
`

const Price = styled.div`
    min-width:85px;
    margin:18vh 0px 0px 0px;
    
    h6{
        padding-top:15px;
        font-size:28px;
        font-weight:900;
        color: red;
    }

`

const Descricao = styled.div`
    padding:7px;
    h1{
        font-size:28px;
        font-weight:700;
    }

    h2{
        font-size:20px;
        font-weight:400;
    }

    p{
        font-size:14px;
        font-weight:100;
    }

`