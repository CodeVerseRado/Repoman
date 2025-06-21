
require('dotenv').config();

module.exports = {
  TOKEN: process.env.TOKEN,
  language: "en",
  ownerID: ["1004206704994566164"],
  mongodbUri: process.env.MONGODB_URI,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',
  embedColor: "#1db954",
  activityName: "YouTube Music",
  activityType: "LISTENING",
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5,
  errorLog: "",
  nodes: [
    {
      name: "GlaceYT",
      url: "lava.link:80",
      auth: "youshallnotpass",
      secure: false
    }
  ]
};
