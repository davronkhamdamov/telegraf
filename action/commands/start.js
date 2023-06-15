const bot = require("../../core/bot");
const { Composer } = require("telegraf");
const composer = new Composer();

bot.command("start", (ctx) => {
  ctx.replyWithHTML(
    `Xurmatli ${ctx.from.first_name}, Confesssionga xush kelibsiz`
  );
});

bot.use(composer.middleware());
