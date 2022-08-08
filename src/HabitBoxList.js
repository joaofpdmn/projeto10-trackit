import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Days from "./Days";
import DayHabitsRequest from "./Services/DayHabitsRequest";
import DeleteHabitsRequest from "./Services/DeleteHabitsRequest";

export default function HabitBoxList() {
    const [days, setDays] = useState([]);
    const [habits, setHabits] = useState([]);
    useEffect(() => {
        DayHabitsRequest().catch((res) => {
                console.log(res);
            })
            .then((res) => {
                setHabits(res.data);
                console.log(res.data);
            })

    }, []);

    function deleteHabit(index){
        if(window.confirm('Você realmente deseja apagar esse hábito? ')){
            const idDelete = habits[index].id;
            DeleteHabitsRequest(idDelete).catch((res) => {
                console.log(res);
            }).then((res) => {
                setHabits(res.data);
                console.log(res.data);
                window.location.reload();
            })
        }
    }


    return (
        <><><div className="padding"></div></>
            <Container>
                {(habits.length === 0) ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> :
                    habits.map((habitos, index) => <><Title>
                       <> <p key={habitos}>{habitos.name}</p> <ion-icon name="trash-outline" onClick={() => deleteHabit(index)}></ion-icon> </>
                    </Title>
                        <Days days={days} setDays={setDays}/></>)
                }
                
            </Container>
            <div className="padding"></div>
            <div className="padding"></div>
            <div className="padding"></div>
            <div className="padding"></div>
            <div className="padding"></div>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 7px 10px 7px 13px;
    background-color: #E5E5E5;
    border-radius: 5px;

    p{
        color: #666666;
        font-size: 20px;
        background-color: white;
    }

    
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:20px;
    background-color: white;

`