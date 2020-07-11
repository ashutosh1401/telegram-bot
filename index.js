const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const telegram = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/start")) {
    telegram.sendMessage(
      message.chat.id,
      "This bot is Created by Ashutosh Thakur.\n Please type the following commands available : \n\n\n" +
        "/syllabus :- to get link to download the course syllabus\n\n" +
        "/memes  :-link to the official memes page\n\n" +
        "/movies  :-provides link to telegram movie channels\n\n" +
        "/music  :-provides audio songs available\n\n" +
        "/poll  :-Click here for daily Polls\n\n" +
        "/institute  :-To know about IIIT Surat"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("hi")) {
    telegram.sendMessage(message.chat.id, "Hello " + message.chat.first_name);
  } else if (
    message.text &&
    message.text.toLowerCase().includes("show creator")
  ) {
    telegram.sendMessage(message.chat.id, "Ashutosh Thakur");
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("pic")) {
    telegram.sendPhoto(
      message.chat.id,
      "https://upload.wikimedia.org/wikipedia/en/7/79/Marine_Commandos_%28MARCOS%29_logo.jpg"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/syllabus")) {
    telegram.sendMessage(
      message.chat.id,
      " Download Syllabus from this link  \n" +
        "http://www.iiitsurat.ac.in/B-Tech.html"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/movies")) {
    telegram.sendMessage(
      message.chat.id,
      "These are the links of some movie channels of telegram\n\n" +
        "https://t.me/HindiHDmovies \n\n" +
        "https://t.me/HollywoodCineplex \n\n" +
        "https://t.me/hindi_new_movie \n\n"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/memes")) {
    telegram.sendMessage(
      message.chat.id,
      " This are links to instagrams best memes channel . \n\n" +
        "https://www.instagram.com/iiit.surat.memes/  \n" +
        "https://www.instagram.com/brahmeme_sena/ \n" +
        "https://www.instagram.com/brahminmemebhog/ \n" +
        "https://www.instagram.com/truly.feminist/ \n"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/music")) {
    telegram.sendMessage(
      message.chat.id,
      "Follow this bot for clssical music  " + "@music"
    );
  }
});
telegram.on("InlineKeyboardButton", (message) => {
  if (message.text && message.text.toLowerCase().includes("/game")) {
    //telegram.text("Block Breaker");
    telegram.url("https://ashutosh1401.github.io/BlockBreaker/");
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/game")) {
    telegram.sendGame(message.chat.id, "BlockBreaker");
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/institute")) {
    telegram.sendPhoto(
      message.chat.id,
      "https://upload.wikimedia.org/wikipedia/en/5/52/IIIT_Surat_logo.jpg"
    );
    telegram.sendMessage(
      message.chat.id,
      "Indian Institute of Information Technology, Surat was Established in year 2017 is an institute of national importance provides Bachelor's in Technology in 2 streams CSE and ECE.\n" +
        "This institute looks forward in achieving excellence and innovation\n" +
        "This is the link of the Website :- http://www.iiitsurat.ac.in/"
    );
  }
});
telegram.on("text", (message) => {
  if (message.text && message.text.toLowerCase().includes("/poll")) {
    telegram.sendPoll(message.chat.id, "How do to you rate this bot ?", [
      "Very Good",
      "Good",
      "Average",
      "need Improvement",
      "Very Bad",
    ]);
    telegram.sendDice(message.chat.id);
  }
});
telegram.on("polling_error", (msg) => console.log(msg));
