import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useState } from "react"
import { Tenis } from "../components/Tenis"


export default function Home() {
    const [tenis,setTenis] = useState([{
    id:1,    
    link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6NtLl0mtoOZRB4pmA7ojpE5m0pasKegAog&usqp=CAU',
    name:'Nike SB dunk low club 58',
    size:'43',
    price: 120000,
    color: 'vermelho'},
    {id:2,    
    link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L31-yDpSy827xLzhd8bGczBDy1djb9xNLcYNQ04M4dbSSu6Tfq6rSN-hZYpaFqbHxDk&usqp=CAU',
    name:'Nike dunk low "black & white panda"',
    size:'40',
    price: 15000,
    color: 'preto e branco'},
    {id:3,    
        link:'https://thegamecollective.com.br/cdn/shop/products/nike-dunk-low-unc-sneaker-the-game-906029.jpg?v=1678739393&width=1445',
        name:'Nike dunk low "UNC" ',
        size:'41',
        price: 150000,
        color: 'azul e branco'},
        {id:4,    
            link:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/02f8959e-927a-40c0-8ed6-366574f302d0/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png',
            name:"Nike air force 1 '07 ",
            size:'39',
            price: 2000,
            color: 'azul e branco'},{
                id:5,    
                link:'https://cdn.dooca.store/3005/products/jdfrpdlfyalhowzznqg60gc2rjmvf2ifpfuk.jpg?v=1680010098',
                name:"NIke air force 1 '07 ",
                size:'38',
                price: 1200000,
                color: 'Branco'},
                {id:6,    
                link:'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20201027151624_2697997303_DZ.jpg',
                name:'Adidas yeezy boost 350 V2 lundmark bege',
                size:'40',
                price: 15000,
                color: 'bege'},
                {id:7,    
                    link:'https://thegamecollective.com.br/cdn/shop/products/nike-dunk-low-unc-sneaker-the-game-906029.jpg?v=1678739393&width=1445',
                    name:'Nike dunk low "UNC" ',
                    size:'41',
                    price: 150000,
                    color: 'azul e branco'},
                    {id:8,    
                        link:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/02f8959e-927a-40c0-8ed6-366574f302d0/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png',
                        name:"Nike air force 1 '07 ",
                        size:'39',
                        price: 2000,
                        color: 'azul e branco'},{
                            id:1,    
                            link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6NtLl0mtoOZRB4pmA7ojpE5m0pasKegAog&usqp=CAU',
                            name:'Nike SB dunk low club 58',
                            size:'43',
                            price: 120000,
                            color: 'vermelho'},
                            {id:2,    
                            link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L31-yDpSy827xLzhd8bGczBDy1djb9xNLcYNQ04M4dbSSu6Tfq6rSN-hZYpaFqbHxDk&usqp=CAU',
                            name:'Nike dunk low "black & white panda"',
                            size:'40',
                            price: 15000,
                            color: 'preto e branco'},
                            {id:3,    
                                link:'https://thegamecollective.com.br/cdn/shop/products/nike-dunk-low-unc-sneaker-the-game-906029.jpg?v=1678739393&width=1445',
                                name:'Nike dunk low "UNC" ',
                                size:'41',
                                price: 150000,
                                color: 'azul e branco'},
                                {id:4,    
                                    link:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/02f8959e-927a-40c0-8ed6-366574f302d0/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png',
                                    name:"Nike air force 1 '07 ",
                                    size:'39',
                                    price: 2000,
                                    color: 'azul e branco'},{
                                        id:5,    
                                        link:'https://cdn.dooca.store/3005/products/jdfrpdlfyalhowzznqg60gc2rjmvf2ifpfuk.jpg?v=1680010098',
                                        name:"NIke air force 1 '07 ",
                                        size:'38',
                                        price: 1200000,
                                        color: 'Branco'},
                                        {id:6,    
                                        link:'https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20201027151624_2697997303_DZ.jpg',
                                        name:'Adidas yeezy boost 350 V2 lundmark bege',
                                        size:'40',
                                        price: 15000,
                                        color: 'bege'},
                                        {id:7,    
                                            link:'https://thegamecollective.com.br/cdn/shop/products/nike-dunk-low-unc-sneaker-the-game-906029.jpg?v=1678739393&width=1445',
                                            name:'Nike dunk low "UNC" ',
                                            size:'41',
                                            price: 150000,
                                            color: 'azul e branco'},
                                            {id:8,    
                                                link:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/02f8959e-927a-40c0-8ed6-366574f302d0/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png',
                                                name:"Nike air force 1 '07 ",
                                                size:'39',
                                                price: 2000,
                                                color: 'azul e branco'}])
    
    

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

