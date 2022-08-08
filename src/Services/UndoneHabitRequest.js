import axios from "axios";

export default function UndoneHabitRequest(id){
    const token = localStorage.getItem('myToken');
    const teste = {test: 'espaço para ocupar header'}
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const UndoneHabitRequesition = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, teste, config);
    return UndoneHabitRequesition;
}