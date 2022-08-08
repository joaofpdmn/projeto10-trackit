import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import styled from "styled-components";
import Days from "./Days";
import DayHabitsRequest from "./Services/DayHabitsRequest";

export default function HabitBoxList() {
    
    const habits = [];

    const habitsPromise = DayHabitsRequest(habits);
    console.log(habits);

    return (
        <><><div className="padding"></div></>
            <Container>
                <Title>
                    <p>Ler 1 capítulo de livro</p>
                    <ion-icon name="trash-outline"></ion-icon>
                </Title>
                <Days />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 7px 10px 7px 13px;
    background-color: white;
    border-radius: 5px;

    p{
        color: #666666;
        font-size: 20px;
    }

    
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`