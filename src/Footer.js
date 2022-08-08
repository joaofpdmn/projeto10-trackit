import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HabitsTodayRequest from "./Services/HabitsTodayRequest";

export default function Footer() {
    const [todayHabits, setTodayHabits] = useState([]);
    let percentage = 0;
    useEffect(() => {
        HabitsTodayRequest()
            .catch((res) => {
                console.log(res);
            })
            .then((res) => {
                setTodayHabits(res.data);
                console.log(res.data);
            })

    }, []);
    todayHabits.map((value, index) => {
        if (value.done === true) {
            percentage++;
        }
    })
    percentage = percentage / todayHabits.length;
    console.log(percentage);

    return (
        <Container>
            <Link to='/habitos' ><p>Hábitos</p></Link>
            <Link to='/hoje' >
                <Hoje>
                    <CircularProgressbar value={percentage} text="Hoje" styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#ffffff',
    trailColor: '#ffffff',
    backgroundColor: '#52B6FF',
  })} />
                </Hoje>
            </Link>
            <Link to='/historico' ><p>Histórico</p></Link>
        </Container>
    );
}

const Container = styled.div`{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
    font-size: 18px;
}

p{
    color: #52B6FF;
}

a{
    text-decoration:none;
}

`

const Hoje = styled.button`
    background-color: #52B6FF;
    border-radius: 50%;
    color: white;
    margin-bottom: 50px;
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
`;

