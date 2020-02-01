const Dev = require("../models/DevModel");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  // Index is responsable to show more them 1 result.
  async index(_req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },
  // Store is responsable to create a new db register
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    Dev.findOne({ github_username }, (err, user) => {
      if (err) throw err;

      if (user) {
        res.json({ error: "Usuário do github já cadastrado" });
      }
    });

    const githubData = await axios.get(`https://api.github.com/users/${github_username}`);
    const { name = login, avatar_url, bio } = githubData.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    console.log(dev);

    return res.json(dev);
  }
};
