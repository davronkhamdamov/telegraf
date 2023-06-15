const bot = require("../../core/bot");
const { Composer, Markup } = require("telegraf");
const composer = new Composer();
bot.help((ctx) => {
  ctx.replyWithHTML(`Ishlatish mumkin bolgan comandalar \n/start - <code>Botni ishla tushirish comandasi</code>
  `);
});

bot.use(composer.middleware());
