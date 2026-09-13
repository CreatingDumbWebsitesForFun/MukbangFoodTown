function checkBalance() {

    const cardNumber =
        document.getElementById("cardNumber").value.trim();

    const message =
        document.getElementById("balanceMessage");


    if (cardNumber === "0 00 000 0001") {

        message.textContent =
            "💳 Card found! Balance: 1,000 Matcha 🍵";

    } else if (cardNumber === "") {

        message.textContent =
            "Please enter a card number.";

    } else {

        message.textContent =
            "yk what bro idk if this exists try again or smth";
    }
}


function showHelp() {

    const message =
        document.getElementById("helpMessage");

    message.textContent =
        "🚇 Try the menu above! More MFT help is coming soon.";
    /* MFT MAP */

.map-container {
    width: 100%;
    overflow-x: auto;
    margin-top: 30px;
}

#mftMap {
    width: 100%;
    min-width: 700px;
    height: auto;
}

.line1 {
    stroke: #0057b8;
    stroke-width: 12;
}

.line2 {
    stroke: #20a040;
    stroke-width: 12;
}

.line3 {
    stroke: #d62828;
    stroke-width: 12;
}

.station {
    fill: white;
    stroke: #222;
    stroke-width: 5;
    cursor: pointer;
}

.station:hover {
    fill: #ffe066;
    transform-box: fill-box;
    transform-origin: center;
    transform: scale(1.25);
}

.transfer {
    stroke-width: 7;
}

#stationInfo {
    margin-top: 20px;
    padding: 15px;
    border-radius: 15px;
    background: #ffe066;
    font-weight: bold;
}
}
