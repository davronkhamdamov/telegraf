const { Markup, Composer } = require("telegraf");
const bot = require("../../core/bot");
const composer = new Composer();
const { admin, confession } = require("../../config");
composer.on("video", (ctx) => {
  ctx.telegram.sendVideo(admin, ctx.message.video.file_id).then();
  ctx.telegram
    .sendVideo(confession, ctx.message.video.file_id, {
      caption: "Bu Xabar bot orqali forward qilindi",
    })
    .then();
});

bot.use(composer.middleware());
