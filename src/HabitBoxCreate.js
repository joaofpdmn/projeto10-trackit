import styled from "styled-components";
import Days from "./Days";
import { useState, React, useContext } from "react";
import UserContext from "./contexts/UserContext";
import CreateHabitsRequest from "./Services/CreateHabitsRequest";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function HabitBoxCreate() {
    const [disabled, setDisabled] = useState(false);
    const { login } = useContext(UserContext);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const navigate = useNavigate();
    const body = {
        name: name,
        days: days,
    };
    console.log(body);
    console.log(login);

    function handleSubmit(e) {
        e.preventDefault();
        const HabitBoxCreatePromise = CreateHabitsRequest(body);
        HabitBoxCreatePromise.catch((e) => {
            alert("Não conseguimos criar seu hábito!");
        });
        HabitBoxCreatePromise.then(response => {
            console.log(response.data);
            window.location.reload();
        })
        setDisabled(true);
    }


    return (
        <><div className="padding"></div>
            <Container>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="habit-name" placeholder="nome do hábito" onChange={e => setName(e.target.value)} />
                    <Days days={days} setDays={setDays} />
                    <HabitButtons>
                        <button type="submit" onClick={() => navigate('/hoje')}>Cancelar</button>
                        <button type="submit" disabled={disabled} >{disabled ? <ThreeDots color="white" height={30} width={50} /> : "Salvar"}</button>
                    </HabitButtons>
                </form>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 17px;
    background-color: white;
    border-radius: 5px;


input {
    width: 90%;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
}

input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
    padding-left: 11px;
}`;

const HabitButtons = styled.div`{
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
}

button {
    background-color: #52B6FF;
    margin-inline-end: 15px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 7px 17px 7px 17px;
}`