import axios from "axios";

const secret_key: any = process.env.REACT_APP_SECRET_KEY;


const api = axios.create({
  baseURL: "http://localhost:8080/",
  auth: {
    username: "secret-key",
    password:
      "BvPHGM8C0ia4uOuxxqPD5DTbWC9F9TWvPStp3pb7ARo0oK2mJ3pd3YG4lxA9i8bj6OTbadwezxgeEByY",
  },
  // headers: {
  //   "secret-key":
  //     "BvPHGM8C0ia4uOuxxqPD5DTbWC9F9TWvPStp3pb7ARo0oK2mJ3pd3YG4lxA9i8bj6OTbadwezxgeEByY",
  // },
});


export default api;
