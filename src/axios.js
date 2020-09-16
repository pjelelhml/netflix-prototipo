import axios from "axios";

/** melhora os nomes da url */
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});

export default instance;