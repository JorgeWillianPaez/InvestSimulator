import axios from "axios";

/*
  Atribuindo endereço da api fake
  para uma variável, tornando mais fácil
  sua utilização e acesso nas funções.
*/
const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;