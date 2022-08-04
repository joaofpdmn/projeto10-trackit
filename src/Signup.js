import React from React;
import Login from "./Login";

export default function Signup() {

    return (
        <div className="login">
            <img src="./assets/img/Group 8.png" alt="" class="logo" />
            <div className="login-content">
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="senha" placeholder="senha" />
                <input type="text" name="nome" placeholder="nome" />
                <input type="text" name="foto" placeholder="foto" />
                <div className="button">Cadastrar</div>
                <p>Já tem uma onta? Faça login!</p>
            </div>
        </div>
    )

}