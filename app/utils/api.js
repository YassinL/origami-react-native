import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pote.dev",
});

export default instance;
