import React from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import { useContext } from "react";

export default function Header() {
    const { login } = useContext(UserContext);
    const img = localStorage.getItem('myImg');

    console.log(login);
    console.log(img)
    return (
        <><Container>
            <p>TrackIt</p>
            <img src={img}/>
        </Container>
            <div className="padding-header"></div></>
    )
}

const Container = styled.div`
    font-family: 'Playball';
    display: flex;
    width: 100%;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    color: white;
    font-size: 39px;
    font-weight: 400;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 18px;
    position: fixed;
    top: 0;
    z-index: 1;
}
img{
    display:flex;
    width:50px;
    height: 50px;
    border-radius:50%;
}

`;
