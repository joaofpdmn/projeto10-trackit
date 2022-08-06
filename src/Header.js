import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <><Container>
            <p>TrackIt</p>
            <img src="./assets/img/Rectangle 14.png" alt="pic" />
        </Container>
        <div className="padding-header"></div></>
    )
}

const Container = styled.div`
    font-family: 'Playball';
    display: flex;
    width: 100%;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    color: white;
    font-size: 39px;
    font-weight: 400;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 18px;
    position: fixed;
    top: 0;
    z-index: 1;
}`;