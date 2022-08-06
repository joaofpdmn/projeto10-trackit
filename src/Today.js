import React from "react";
import styled from "styled-components";

export default function Today() {
    return (
        <><div className="padding"></div>
            <Container>
                <Title>
                    <h2>Segunda, 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </Title>
                <Checkbox>
                    <div>
                        <h2>Ler 1 capítulo de livro</h2>
                        <h3>Sequencia atual: 3 dias</h3>
                        <h3>Seu recorde atual: 5 dias</h3>
                    </div>
                    <ion-icon name="checkbox"></ion-icon>
                </Checkbox>
            </Container>
        </>
    )
}

const Container = styled.div`padding-bottom: 30px;`

const Title = styled.div` h2{
    color: #126BA5;
    font-size: 23px;
    padding-bottom: 8px;
}

p{
    font-size: 18px;
    color: #a5a5a5;
}`


const Checkbox = styled.div`{
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 13px;
    margin-top: 30px;
}

h2{
    font-size: 20px;
    color: #666666;
    padding-bottom: 7px;
}

h3{
    color: #666666;
    font-size: 14px;
}`