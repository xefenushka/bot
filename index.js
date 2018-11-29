const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TLGTOKEN

const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/bells/, (msg, match) => {
	bot.sendMessage(`@xefenushkaaa` , `9.15-9.55
10.05-10.45
11.00-11.40
11.55-12.35
12.50-13.30
13.40-14.20
14.35-15.15
15.20-16.00`)
})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `(x(x_(x_x(O_o)x_x)_x)x) `)
})

bot.onText(/\/resend/, (msg, match) => {
	bot.sendMessage(`@xefenushkaaa` , msg.text.match(/\/test(.*)/)[1])
})
