import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000",
  production: "servidor",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] }); //process.env knows in what state of the process we are.

api.interceptors.request.use((config) => {
  const loggedUserJSON = localStorage.getItem("loggedUser"); // gets user in JSON format

  const loggedUserParsed = JSON.parse(loggedUserJSON); // transforms JSON format user in OBJ

  console.logo(config.headers);
  if (loggedUserParsed.token) {
    config.headers = { Authorization: `Bearer ${loggedUserParsed.token}` };
  }
  console.logo(config.headers);
  return config;
});

export { api }; // now all axios requests starts with API.
