const { Markup, Composer } = require("telegraf");
const bot = require("../../core/bot");
const composer = new Composer();
const { admin, confession } = require("../../config");
composer.on("text", (ctx) => {
  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Confirm ✅", "true_" + ctx.message.text),
    Markup.button.callback("Cancel ❌", "false_" + ctx.message.text),
  ]);
  ctx.reply("Text: " + ctx.message.text, keyboard).then();
});
composer.action(/true_(.+)/gi, (ctx) => {
  let match = ctx.match[1];
  ctx.telegram.sendMessage(confession, match).then();
  ctx.editMessageText("Accepted");
});
composer.action(/false_(.+)/gi, (ctx) => {
  let match = ctx.match[1];
  ctx.editMessageText(`The message: <b>${match}</b>. has been rejected`, {
    parse_mode: "HTML",
  });
});
bot.use(composer.middleware());
