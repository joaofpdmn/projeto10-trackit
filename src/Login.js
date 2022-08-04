import React from "react";

export default function Login() {
    return (
        <>
            <div class="login">
                <img src="./assets/img/Group 8.png" alt="" class="logo" />
                <div class="login-content">
                    <input type="text" name="email" id="" placeholder="email" />
                    <input type="text" name="senha" id="" placeholder="senha" />
                    <div class="button">Entrar</div>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </div>

            </div>
        </>
    )
}