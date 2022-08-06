import React from "react";
import styled from "styled-components";
import Days from "./Days";

export default function HabitBoxCreate() {
    return (
        <><div className="padding"></div>
            <Container>
                <input type="text" name="habit-name" placeholder="nome do hábito" />
                <Days />
                <HabitButtons>
                    <div>Cancelar</div>
                    <div>Salvar</div>
                </HabitButtons>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 17px;
    background-color: white;
    border-radius: 5px;


input {
    width: 90%;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
}

input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    padding-left: 11px;
}`;

const HabitButtons = styled.div`{
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
}

div {
    background-color: #52B6FF;
    margin-inline-end: 15px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 7px 17px 7px 17px;
}`