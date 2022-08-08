import axios from "axios";

export default function HabitsTodayRequest(){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const HabitsTodayRequisition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config);
    return HabitsTodayRequisition;
}