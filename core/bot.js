const { Telegraf } = require("telegraf");
require("dotenv/config");
const bot = new Telegraf(process.env.TOKEN);

bot.launch().then();

module.exports = bot;
