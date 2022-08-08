import axios from "axios";

export default function HistoricHabitsRequest(id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const HistoricHabitsRequesition = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config);
    return HistoricHabitsRequesition;
}