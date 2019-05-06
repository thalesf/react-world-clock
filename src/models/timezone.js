import axios from "axios";
import moment from "moment";

const URL = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api";

const getAllTimezones = async () => {
  const response = await axios.get(`${URL}/timezone`);
  const { data } = response;
  return data;
};


const getTimeZone = async timezone => {
  const response = await axios.get(URL + timezone);
  const { data } = response;
  return data;
};

export { getAllTimezones, getTimeZone };
