import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Signup() {

    return (
        <Container>
            <img src="./assets/img/Group 8.png" alt="" className="logo" />
            <LoginContent>
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="senha" placeholder="senha" />
                <input type="text" name="nome" placeholder="nome" />
                <input type="text" name="foto" placeholder="foto" />
                <div className="button">Cadastrar</div>
                <Link to={`/`} >
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </LoginContent>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    flex-direction: column;
`;

const LoginContent = styled.div`width: 303px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
input {
    margin-bottom: 6px;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #D4D4D4;
}

input::placeholder {
    padding-left: 11px;
    color: #dbdbdb;
    font-size: 19px;
    font-weight: 400;
}
p{
    text-decoration: underline;
    color: #52B6FF;
}`;