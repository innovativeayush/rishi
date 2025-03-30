let currentQuestion = 1;
let responses = [];

// Move to the next question
function nextQuestion(answer) {
    responses.push(`Q${currentQuestion}: ${answer}`);
    document.getElementById(`q${currentQuestion}`).style.display = "none";
    currentQuestion++;
    if (document.getElementById(`q${currentQuestion}`)) {
        document.getElementById(`q${currentQuestion}`).style.display = "block";
    } else {
        document.getElementById('response').style.display = "block";
    }
}

// Final Response
function finalResponse(answer) {
    responses.push(`Q${currentQuestion}: ${answer}`);
    document.getElementById('response').style.display = "block";
}

// Send Message + Show Final Full-Screen Message
function sendMessage() {
    let message = document.getElementById('messageBox').value;
    if (message.trim() !== '') {
        responses.push(`Final Message: ${message}`);
        sendEmail();
        showFinalMessage(); // Full Screen Message Show + Close
    } else {
        alert("Please write something! 😊");
    }
}

// Send Answers to Email
function sendEmail() {
    let messageBody = responses.join("<br>");

    Email.send({
        SecureToken: "YOUR_SMTP_TOKEN_HERE", // SMTP Token
        To: "your-email@example.com", // Apni Email Yahan Dal
        From: "noreply@example.com",
        Subject: "Tumhare Answers Aagaye! ❤️",
        Body: messageBody
    }).then(
        message => console.log("✅ Answers Sent to Your Email! 🎉")
    );
}

// Show Final Full-Screen Message
function showFinalMessage() {
    let finalMessage = document.createElement('div');
    finalMessage.className = 'full-screen-msg';
    finalMessage.innerHTML = `
        <p>💖 You are my butter cup... <br> मेरे साथ रहना हमेशा... 😊</p>
    `;
    document.body.appendChild(finalMessage);

    // Auto Close after 4 seconds
    setTimeout(() => {
        window.close();
    }, 4000);
}

// Move No Button
function moveNo() {
    let noBtn = document.getElementById('noBtn');
    let x = Math.random() * 300;
    let y = Math.random() * 300;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
