import React from "react";
import styled from "styled-components";

export default function Historic(){
    return (
        <Title>
            <h2>Histórico</h2>
            <p>Em breve você podera ver o histórico dos seus hábitos aqui</p>
        </Title>
    )
}

const Title = styled.div` h2{
    color: #126BA5;
    font-size: 23px;
    padding-bottom: 8px;
}

p{
    font-size: 18px;
    color: #a5a5a5;
}`