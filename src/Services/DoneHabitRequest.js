import axios from "axios";

export default function DoneHabitRequest(id){
    const token = localStorage.getItem('myToken');
    console.log(id);
    const teste = {test: 'espaço para ocupar header'}
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const DoneHabitRequisition = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, teste, config);
    return DoneHabitRequisition;
}