import axios from "axios";

const fetchAxios = axios.create (
    {
        baseURL : "https://69297f749d311cddf34a266c.mockapi.io/",
        headers : {
            "Content-Type" : "application/json"
        }
    }
)

export default fetchAxios