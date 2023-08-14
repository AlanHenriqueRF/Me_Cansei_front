import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useEffect, useState } from "react"
import { Tenis } from "../components/Tenis"
import Apishoes from "../service/shoes"


export default function Home() {
    const [tenis,setTenis] = useState([]);
    
    useEffect(()=>{
        Apishoes.getall()
            .then((res)=>{
                setTenis(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    return (
        <>
            <Navbar />
            <Listartenis>
                {tenis.length === 0 ? 
                    <h1>Ops! Não há nenhum anúncio dispónivel...</h1>:
                    tenis.map((t)=> (<Tenis key={t.id} tenis_obj={t} />))}
            </Listartenis>
            <Footer />

        </>
    )
}

const Listartenis = styled.ul`
    margin-top:82px;
    margin-bottom: 70px;
    padding: 0px 1% 15px 1%;
    h1{
        font-size:24px;
        font-weight:700;
    }

`

