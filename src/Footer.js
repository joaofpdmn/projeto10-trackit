import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <p>Hábitos</p>
            <Hoje>Hoje</Hoje>
            <p>Histórico</p>
        </Container>
    );
}

const Container = styled.div`{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
    font-size: 18px;
}

p{
    color: #52B6FF;
}`

const Hoje = styled.button`
    background-color: #52B6FF;
    border-radius: 50%;
    color: white;
    margin-bottom: 50px;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

