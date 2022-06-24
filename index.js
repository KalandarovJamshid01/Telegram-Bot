const TelegramApi = require("node-telegram-bot-api");

const TOKEN = "5440357190:AAHddlTxAKG_mCh9q-LEg1kfMyMlC9cvN1w";

const bot = new TelegramApi(TOKEN, { polling: true });
let step = 0;
bot.setMyCommands([
  { command: "/start", description: "Initial" },
  { command: "/info", description: "Ma'lumot" },
]);

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (step === 0) {
      step++;
      return await bot.sendMessage(
        chatId,
        `Salom ${msg.from.first_name}!Botimizga xush kelibsiz. To'liq ismingizni kiriting`
      );
    } else if (step === 1) {
      step++;
      return await bot.sendMessage(chatId, "Telefon raqamingizni kiriting");
    } else if (step == 2) {
      step++;
      return await bot.sendMessage(chatId, "Universitetingizni kiriting");
    }
  });
};
start();
