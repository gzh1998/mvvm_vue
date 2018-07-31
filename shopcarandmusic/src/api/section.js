import axios from 'axios';
export default function ajax() {
    return axios.get("http://192.168.155.1:8080/list")
}