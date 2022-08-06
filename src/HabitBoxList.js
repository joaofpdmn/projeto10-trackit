import React from "react";
import styled from "styled-components";
import Days from "./Days";

export default function HabitBoxList() {
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