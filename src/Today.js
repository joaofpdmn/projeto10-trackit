import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import HabitsTodayRequest from "./Services/HabitsTodayRequest";
import 'dayjs/locale/pt-br';
import { IconContext } from "react-icons";
import { BsCheckSquareFill } from 'react-icons/bs';
import DoneHabitRequest from "./Services/DoneHabitRequest";
import UndoneHabitRequest from './Services/UndoneHabitRequest';


export default function Today() {
    const [todayHabits, setTodayHabits] = useState([]);
    const [done, setDone] = useState([]);
    const [check, setCheck] = useState(false);
    const dayjs = require('dayjs');
    let count = 0;
    dayjs.locale('pt-br');

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
            count++;
        }
    })
    count = count / todayHabits.length * 100;

    function isDone(index) {
        const idCheck = todayHabits[index].id;
        if (todayHabits[index].done === false) {
            
            console.log(idCheck);
            DoneHabitRequest(idCheck).catch((res) => {
                console.log(res);
            })
                .then((res) => {
                    setDone(res.data);
                    console.log(res.data);
                    setCheck(true);
                })
        }
        else {
            console.log(idCheck);
            UndoneHabitRequest(idCheck).catch((res) => {
                console.log(res);
            })
                .then((res) => {
                    setDone(res.data);
                    console.log(res.data);
                    setCheck(false);
                })
        }

    }



    return (
        <><div className="padding"></div>
            <Container>
                <Title>
                    <h2>{dayjs().format('dddd')}, {dayjs().format('DD/MM')}</h2>
                    <p>{count === 0 ? 'Nenhum hábito concluído ainda' : `${Math.round(count)}% dos hábitos concluídos`}</p>
                </Title>

                {todayHabits.map((habitos, index) =>
                    <Checkbox>
                        <div key={habitos}>
                            <h2>{habitos.name}</h2>
                            <h3>Sequencia atual: {habitos.currentSequence} dias</h3>
                            <h3>Seu recorde atual: {habitos.highestSequence} dias</h3>
                        </div>
                        <IconContext.Provider value={{ color: check ? ('#8FC549') : ('#E7E7E7'), size: '74px' }}>
                            <BsCheckSquareFill onClick={() => isDone(index)} />
                        </IconContext.Provider>
                    </Checkbox>
                )}
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