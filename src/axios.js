import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend1a.herokuapp.com/',
})

export default instance;