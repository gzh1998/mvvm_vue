import axios from 'axios';
export default function func() {
    return axios.get('http://localhost:8080/detail')
}