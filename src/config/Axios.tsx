import axios from "axios";


const Axios = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        ...axios.AxiosHeaders
    }
});

export default Axios;
