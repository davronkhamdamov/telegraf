const { Markup, Composer } = require("telegraf");
const bot = require("../../core/bot");
const composer = new Composer();
const { admin, confession } = require("../../config");
composer.on("photo", (ctx) => {
  ctx.telegram.sendPhoto(admin, ctx.message.photo[0].file_id).then();
  ctx.telegram.sendPhoto(confession, ctx.message.photo[0].file_id).then();
});

bot.use(composer.middleware());
