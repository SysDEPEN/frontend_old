import axios from "axios";

const secret_key = process.env.REACT_APP_SECRET_KEY;


const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "secret-key": secret_key,
  },
});

//  const api = axios.get("http://localhost:8080/", {
//    headers: {
//      "secret-key": secret_key,
//    },
//  });

export default api;
