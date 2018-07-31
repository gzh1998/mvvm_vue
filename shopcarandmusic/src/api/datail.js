import axios from 'axios';
export default function fun() {
    return axios.get("http://192.168.155.1:8080/datail")
}