const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const API_KEY = process.env.API_KEY;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secert: username,
        first_name: username,
      },
      { headers: { "private-key": API_KEY } }
    );
    console.log("App connected to chatengine");
    return res.status(response.status).json(response.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

console.log("App started ...");
app.listen(3001);
