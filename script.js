function sendMessage() {

    let input = document.getElementById("userInput").value.toLowerCase();

    let reply = "";

    if (input === "") {
        alert("कृपया अपना सवाल लिखें");
        return;
    }

    if (input.includes("hello") || input.includes("hi")) {
        reply = "नमस्ते 👋 मैं Aashu Boss AI हूँ। मैं आपकी Business और Trading में मदद कर सकता हूँ।";
    }

    else if (input.includes("trading")) {
        reply = "📈 Trading Assistant Active है। Market analysis module जल्द जुड़ेगा।";
    }

    else if (input.includes("business")) {
        reply = "💼 Business Assistant तैयार है। Lead, CRM और Automation tools जल्द उपलब्ध होंगे।";
    }

    else if (input.includes("help")) {
        reply = "🤖 मैं आपकी Website, Business, Trading और AI Automation में सहायता कर सकता हूँ।";
    }

    else {
        reply = "🤖 आपका सवाल प्राप्त हुआ। Aashu Boss AI इसे analyze कर रहा है...";
    }


    document.getElementById("chatbox").innerHTML =
    "👤 You: " + input +
    "<br><br>" +
    "🤖 AI: " + reply;


    document.getElementById("userInput").value = "";

}
function testVoice(){

    let style = document.getElementById("voiceStyle").value;

    let message = "";

    if(style == "boss"){
        message = "Yes Boss, Astra AI आपके आदेश के लिए तैयार है।";
    }

    else if(style == "deep"){
        message = "Boss, मैं आपकी सहायता के लिए हमेशा तैयार हूँ।";
    }

    else if(style == "friendly"){
        message = "Hello Boss, आज का दिन शानदार बनाने के लिए तैयार हैं।";
    }

    else{
        message = "Astra AI Voice System Active.";
    }


    let speech = new SpeechSynthesisUtterance(message);

    speech.lang = "hi-IN";

    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);

}
