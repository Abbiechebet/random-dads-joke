import axios from "axios";
import apiKey from "../apikey/apikey.js";

const getJoke = (req, res) => {
  axios.get("https://dad-jokes.p.rapidapi.com/random/joke", apiKey) 
    .then((response) => {
      res.json(response.data.body[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
export default getJoke;