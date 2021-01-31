function getPin() {
	const random = Math.random() * 10000;
	const pin = (random + "").split(".")[0];
	if (pin.length === 4) {
		return pin;
	} else {
		return getPin();
	}
}

//Display Generate Pin
function generatePin() {
	const pinInput = document.getElementById("pin");
	pinInput.value = getPin();
}

//Handle Calculator Button event
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click", function (event) {
	const digit = event.target.innerText;
	if (isNaN(digit)) {
		//digit handler
		if (digit === "C") {
			const typedInput = document.getElementById("typed-pin");
			typedInput.value = "";
		}
	} else {
		const typedInput = document.getElementById("typed-pin");
		typedInput.value = typedInput.value + digit;
	}
});

//MatchPin

function matchPin() {
	const pin = document.getElementById("pin").value;
	const typedPin = document.getElementById("typed-pin").value;
	if (pin === typedPin) {
		displayResult("block", "none");
	} else {
		displayResult("none", "block");
	}
}

function displayResult(correctStatus, incorrectStatus) {
	const correctSms = document.getElementById("correct");
	correctSms.style.display = correctStatus;
	const incorrectSms = document.getElementById("inCorrect");
	incorrectSms.style.display = incorrectStatus;
}
