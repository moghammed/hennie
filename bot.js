var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/^.*kleur.*$/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'In een volgende versie krijg je nu een IP-adres met een filmpje').then(function () {
  });
});

bot.onText(/(hallo|hennie|hoi|hai|hey|hi|help])/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Wat is je antwoord?').then(function () {
  });
});

bot.onText(/(rood|zwart|blauw|grijs|game|spel)/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Je moet iets beter je best doen.').then(function () {
  });
});

bot.onText(/^This is not a game$/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'In een volgende versie krijg je nu een IP-adres met een audiofragment').then(function () {
  });
});

bot.onText(/^test$/i, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Je bent zelf een test').then(function () {
  });
});

module.exports = bot;
