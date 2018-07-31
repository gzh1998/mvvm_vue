import axios from 'axios';
export default function hans() {
    return axios.get('http://localhost:8080/list')
}