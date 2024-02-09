const TelegramBot = require('node-telegram-bot-api');
const token = 'Telegram_Token';
const bot = new TelegramBot(token, {polling: true});

//Telegrma buyruqlari:
bot.setMyCommands([
    {
        command: '/start',
        description: "Botni faollashtirish",
    },
    {
        command: '/info',
        description: "Dasturchi",
    },
]);


//Javob qaytaruvchi buyruqlar
bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
  
    if (text == '/start') {
        return bot.sendMessage(
            chatId, 
            `Assalamu Aleykum hurmatli ${msg.from?.first_name} siz userload botiga kirdingiz.
Sizing telegramdagi ma'lumotlaringiz: 

Username: @${msg.from?.username} 
ID: ${msg.from?.id}
Foydalanuvchi ismingiz: ${msg.from?.first_name}
Dasturiy ta'minot tili: ${msg.from?.language_code}`
        );
    }
    if (text == '/info') {
        return bot.sendMessage(
            chatId, 
            `

 

Dasturchi: @PMurod 
Dasturiy ta'minot tili: JavaScript`
        );
    }


    bot.sendMessage(
        chatId,
        `Uzur men sizni tushunmayapman. Sizga qanday yordam bera olishim mumkin?`
    );
});
