import { styled } from "styled-components";

export function Tenis(props) {
    const { link, name, size, price, color } = props.tenis_obj;
    return (
        <li>
            <Container>
                <Primeiradiv>
                    <ImageTenis>

                        <img src={link} alt={name} />

                    </ImageTenis>
                    <Informacoes>
                        <h2>{name}</h2>
                        <h3>Tamanho: {size}</h3>
                        <h3>Cor: {color}</h3>
                    </Informacoes>
                </Primeiradiv>
                <Price>
                    <h6>R$ {price / 100},00</h6>
                </Price>
            </Container>
        </li>
    )
}

const Container = styled.div`
    margin-top: 12px;

    border: 0.8px solid black;
    display: flex;
    justify-content: space-between;
    min-width:320px;
    max-width: 1300px;

    height:92px;

`

const Primeiradiv = styled.div`
    display:flex;
`

const ImageTenis = styled.div`

    border: 2.4px solid black;
    margin: 3px 5px;
    min-width: 125px;
    max-width:125px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Ajuste para suas necessidades */
    }
    
`

const Informacoes = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:12px;
    /* min-width: 120px; */
    h2{
        font-size:16px;
        font-weight:800;

    }

    h3 {
        font-size:12px;}
`

const Price = styled.div`
    min-width:85px;
    margin:12px 5px 0px 5px;
    

    h6{
        font-size:18px;
        font-weight:800;
        color: red;
    }

`