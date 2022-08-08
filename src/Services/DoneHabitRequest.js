import axios from "axios";

export default function DoneHabitRequest(id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const DoneHabitRequisition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config);
    return DoneHabitRequisition;
}