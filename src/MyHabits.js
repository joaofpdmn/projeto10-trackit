import styled from "styled-components";
import HabitBoxCreate from "./HabitBoxCreate"
import { useState, React } from "react";

export default function MyHabits() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
      };
    return (
        <Container>
            <h2>Meus hábitos</h2>
            <button onClick={handleClick}>+</button>
            {isShown && <HabitBoxCreate />}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 18px;

h2 {
    font-size: 22px;
    color: #126BA5;
    font-weight: 500;
}

button {
    background-color: #126BA5;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
}`;