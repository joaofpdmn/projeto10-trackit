import { useContext, useEffect, React } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import loginRequest from "./Services/LoginRequest";
import { getUserData, setUserData } from './Services/UserInfo';
import UserContext from "./contexts/UserContext";



export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const { setLogin } = useContext(UserContext);


    function handleSubmit(e) {
        const body = {
            email: email,
            password: password,
        };
        e.preventDefault();
        const loginPromise = loginRequest(body);
        loginPromise.catch(e => {
            alert("Erro, não conseguimos logar sua conta. Insira novamente os dados!");
            setDisabled(false);
        });
        loginPromise.then(response => {
            localStorage.setItem('myToken', response.data.token);
            setUserData(response.data); 
            const user = getUserData();
            setLogin(user);
            navigate("/hoje");
        });

        setDisabled(true);
    }

   

    return (
        <>
            <Container>
                <img src="./assets/img/Group 8.png" alt="" className="logo" />
                <LoginContent>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="senha" placeholder="senha" onChange={e => setPassword(e.target.value)} />
                        <button className="button" type="submit" disabled={disabled}>
                            {disabled ? <ThreeDots color="white" height={30} width={50} /> : "Entrar"}
                        </button>
                        <Link to={`./cadastro`} >
                            <p>Não tem uma conta? Cadastre-se!</p>
                        </Link>
                    </form>
                </LoginContent>

            </Container>
        </>
    )
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