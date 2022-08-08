import { useState , useEffect} from "react";
import React from "react";
import styled from "styled-components";


export default function Days({days, setDays}) {
    const daysArray = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [color, setColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
    const [clicked, setClicked] = useState(false);
    const handleClick = (event, key) => {
        console.log(event.target);
        setDays([...days, key]);
        setClicked(state => !state);
      };

      useEffect(() => {
        setColor((state) => clicked ? '#a5a5a5' : '#D4D4D4');
        setBackgroundColor((state) => clicked ? '#DBDBDB' : '#FFFFFF');
    }, [clicked]);
    
    return (
        <Container color={color} backgroundColor = {backgroundColor}>
            { daysArray.map( (dias, index) => <p onClick={event => handleClick(event, index)} key={index}>{ dias }</p>) }
        </Container>
    );
}

const Container = styled.div`
    padding-top: 10px;
    display: flex;


p {
    font-size: 20px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color}
    border: 1px solid red;
    margin-inline-end: 4px;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 5px;
}`