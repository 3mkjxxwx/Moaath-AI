const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const token = process.env.TOKEN;

client.once("ready", () => {
  console.log("Moaath AI Ready 👑🔥");
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Moaath AI شغال 🔥");
  }
});

client.login(token);
