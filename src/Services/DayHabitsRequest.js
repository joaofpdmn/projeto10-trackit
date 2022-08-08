import axios from "axios";

export default function DayHabitsRequest(){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const DayHabitsRequisition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config);
    return DayHabitsRequisition;
}