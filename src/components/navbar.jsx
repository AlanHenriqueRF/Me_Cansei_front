import styled from "styled-components"
import Logo from '../assets/WhatsApp Image 2023-08-13 at 18.25.46.png'
import { Link } from "react-router-dom"
import { ChevronDownOutline } from 'react-ionicons'
import { SearchSharp } from 'react-ionicons'
import { PersonSharp } from 'react-ionicons'


export default function Navbar() {
   
    return (
        <Navbarstyle>
            <Link to='/home'><img src={Logo} alt="Logo" /></Link>
            {/* <ChevronDownOutline
            color={'#000000'} 
            title={'filtro'}
            height="25px"
            width="25px"/> */}
           
                
            {/* <SearchSharp
            color={'#000000'} 
            title={'Buscar'}
            height="25px"
            width="25px"
            /> */}
            
            <PersonSharp
            color={'#000000'} 
            title={'perfil'}
            height="25px"
            width="25px"/>

            
        </Navbarstyle>
    )
}

const Navbarstyle = styled.div`
    display: flex;
    flex-wrap:wrap;
    width:100%;
    height:70px;
    position:fixed;
    top:0;
    background-color:#ffffff;
    box-shadow: 0px 4px 4px 0px #00000026;
    align-items:center;
    justify-content:space-between; /**/

    img{
        width:87px;
        height: 70px;
        padding-left:7px;
        position: relative;
        /* padding-right: calc(100vw - 178px); */

    }

    :nth-child(2){
        padding-right:11px;
    }
    /* :nth-child(2){
        padding-top:34px;
        position: absolute;
        left: 72px;
    }

    :nth-child(3){
        padding:11px;
    } */

`