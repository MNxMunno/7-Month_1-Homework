import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66361b4e415f4e1a5e264953.mockapi.io/api",
});

export default mainUrl;
