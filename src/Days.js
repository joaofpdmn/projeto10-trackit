import React from "react";
import styled from "styled-components";

export default function Days() {
    return (
        <Container>
            <p>D</p>
            <p>S</p>
            <p>T</p>
            <p>Q</p>
            <p>Q</p>
            <p>S</p>
            <p>S</p>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 10px;
    display: flex;


p {
    font-size: 20px;
    color: #DBDBDB;
    border: 1px solid #d4d4d4;
    margin-inline-end: 4px;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 5px;
}`