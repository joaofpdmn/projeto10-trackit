import axios from "axios";

export default function CreateHabitsRequest(body){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(token);
    const CreateHabitsRequesition = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, body, config);
    console.log(CreateHabitsRequesition);
    return CreateHabitsRequesition;
}