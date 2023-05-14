import axios from "axios";

const BaseUrl = axios.create({
    baseURL: 'https://localhost:7053/api/',
  });

  export {
    BaseUrl
  }