import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SignUpRequest from "./Services/SignupRequest";
import { ThreeDots } from "react-loader-spinner";

export default function Signup() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    function handleSubmit(e) {
        const body = {
            email: email,
            name: name,
            image: image,
            password: password,
        };
        e.preventDefault();
        const SignUpPromise = SignUpRequest(body);
        SignUpPromise.catch(e => {
            alert("Erro, não conseguimos cadastrar sua conta. Insira novamente os dados!");
            setDisabled(false);
        });
        SignUpPromise.then(response => {
            navigate("/");
        });

        setDisabled(true);
        console.log(body);
    }


    return (
        <Container>
            <img src="./assets/img/Group 8.png" alt="" className="logo" />
            <LoginContent>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <input type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
                    <input type="url" name="foto" placeholder="foto" onChange={e => setImage(e.target.value)} />
                    <input type="password" name="senha" placeholder="senha" onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit" disabled={disabled}>
                        {disabled ? <ThreeDots color="white" height={30} width={50} /> : "Cadastrar"}
                    </button>
                </form>
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