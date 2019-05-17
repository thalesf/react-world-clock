import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api"
});

const getAllTimezones = async () => {
  const response = await api.get("/timezone");
  const { data } = response;
  return data;
};

const getTimeZone = async timezone => {
  const response = await api.get(timezone);
  const { data } = response;
  return data;
};

export { getAllTimezones, getTimeZone };
