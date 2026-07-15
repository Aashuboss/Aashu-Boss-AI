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
