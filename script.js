var chatbot = document.getElementById("chat-bot");

function sendmessage() {

   var input = document.getElementById("textmessage");
   var text = input.value.trim();

   if (text == "") {
     return;
   }

   addmessage(text, "user");

   input.value = "";
   
   // setTimeout(() => {
  var reply = getReply(text);
  addmessage(reply, "bot");
   // }, 700);

}

// add function
function addmessage(text, type) {

   var div = document.createElement("div");

   div.className = "message " + type;   

   div.innerText = text;

   chatbot.appendChild(div);

   chatbot.scrollTop = chatbot.scrollHeight;
}
function getReply(msg) {

   msg = msg.toLowerCase();

   if (msg.includes("hello") || msg.includes("hi"))
      return "HELLO 👋 NICE TO MEET YOU!!";

   if (msg.includes("how are you"))
      return "I'm doing great 😊";

   if (msg.includes("your name"))
      return "I'm AI Chat Bot 🤖";

   if (msg.includes("nijitha"))
      return `💖 Nijitha is the most precious person in my life. 🌸✨
She is beautiful, kind-hearted, caring, and loving. ❤️
Her smile lights up my world 😊☀️
She is my happiness and peace 🥹💞
I will always care for her 💖`;

   if (msg.includes("mohan"))
      return "Mohan is the most handsome 😎🔥 and a very smart guy 👨‍💻✨";

   if (msg.includes("good morning"))
      return "Good Morning ☀️ Have a great day!";

   if (msg.includes("good night"))
      return "Good Night 🌙 Sweet dreams!";

   if (msg.includes("bye"))
      return "Goodbye 👋 See you soon!";

   return "🤖 I don't understand yet";
}
