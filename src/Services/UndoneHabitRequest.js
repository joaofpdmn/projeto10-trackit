import axios from "axios";

export default function UndoneHabitRequest(id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const UndoneHabitRequesition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config);
    return UndoneHabitRequesition;
}