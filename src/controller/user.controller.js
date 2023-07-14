import { get } from "axios";
import { apiKey } from "../apikey/apikey";

const getJoke = (req, res) => {
  get("https://dad-jokes.p.rapidapi.com/random/joke", apiKey)
    .then((response) => {
      res.json(response.data.body[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export default { getJoke };
