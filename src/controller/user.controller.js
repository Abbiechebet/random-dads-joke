const axios = require("axios");

const getJoke = (req, res) => {
  axios
    .get("https://dad-jokes.p.rapidapi.com/random/joke", {
      headers: {
        "X-RapidAPI-Key": "eb6a904ab2msh9709a2af37ee006p129c5bjsn92b4c9cadba0",
      },
    })
    .then((response) => {
      res.json(response.data.body[0]);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = { getJoke };
