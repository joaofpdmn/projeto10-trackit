import axios from "axios";

export default function DeleteHabitsRequest(id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const DeleteHabitsRequesition = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
    return DeleteHabitsRequesition;
}