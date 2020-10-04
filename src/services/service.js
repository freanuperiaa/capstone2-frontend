import axios from "axios";

/**
 * An axios instance that will be reused by other services to make API calls
 */
export default axios.create({

    // baseURL: "http://localhost:4000/",
    baseURL: "https://tranquil-eyrie-36014.herokuapp.com/",

    // baseURL: "https://tranquil-eyrie-36014.herokuapp.com/",

    withCredentials: true,

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

});
