import axios from "axios";

const api = axios.create({
  baseURL: "https://futebol.homolog.groundsportech.com/samples/campeonatos"
});

export default api;
