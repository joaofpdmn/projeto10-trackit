import axios from "axios";

export default function loginRequest(body) {
    console.log(body);
    const loginRequisition = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
    console.log(body);
    return loginRequisition;
}