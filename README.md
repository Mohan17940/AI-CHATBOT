<html>
    <head>
         <title>AI CHAT-BOT</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
       <link rel="icon" type="image/jpeg" href="Spiderman-in-Full-Moon-Wallpaper-Mural-710x488.jpg">
       *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#2563eb);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.chat-container{
    width:400px;
    max-width:95%;
    height:600px;
    background:#fff;
    border-radius:20px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,.3);
    display:flex;
    flex-direction:column;
}

.header{
    background:#2563eb;
    height:70px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.header h1{
    margin:0;
    font-size:30px;
    font-weight:700;
    color:white;
}

.chatbot{
    flex:1;
    padding:15px;
    overflow-y:auto;
    background:#f4f4f4;
}

.message{
    margin:10px 0;
    padding:10px 15px;
    border-radius:15px;
    width:fit-content;
    max-width:80%;
    word-wrap:break-word;
}

.user{
    background:#2563eb;
    color:#fff;
    margin-left:auto;
}

.bot{
    background:#ddd;
    color:#000;
}

#input-area{
    display:flex;
    border-top:1px solid #ccc;
}

input{
    flex:1;
    padding:15px;
    border:none;
    outline:none;
    font-size:16px;
}

button{
    padding:15px 20px;
    border:none;
    background:#2563eb;
    color:#fff;
    cursor:pointer;
    font-size:16px;
}

button:hover{
    background:#1d4ed8;
}
    </head>
    <body>
         <div id="chat-container" class="chat-container">

      
         
        <div id="header" class="header"> 
            <h1>🤖AI CHAT BOT</h1>

            </div>

        <div id="chat-bot" class="chatbot">
           <div class=""message bot"> HELLO!👋ASK ME ANYTHING</div>
        </div>
       <div id="input-area">
        <input id="textmessage" type="text"  placeholder="type your message">
        <button id="send" type="submit" onclick="sendmessage()">send</button>
          </div>
        </div>
       
    <script>
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
   </script>
    </body>
        </html>

</html>
}
