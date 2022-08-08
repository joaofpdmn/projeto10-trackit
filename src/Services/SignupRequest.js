import axios from "axios";

export default function SignUpRequest(body) {
    const signUpRequisition = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, body);
    return signUpRequisition;
}