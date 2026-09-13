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
}
