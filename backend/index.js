const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io",
      {
        username: username,
        secert: username,
        first_name: username,
      },
      { headers: { "private-key": "<Your API Key from chatengine.io>" } }
    );
  } catch (e) {}
  return res.json({ username: username, secret: "sha256..." });
});

console.log("App started ...");
app.listen(3001);
