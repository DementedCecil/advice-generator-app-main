const adviceNo = document.getElementById('advice-no');
const adviceText = document.getElementById('advice-text');
const dice = document.getElementById('dice');

let min = 1;
let max = 224;

function getRandom() {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

dice.addEventListener("click", getAdvice);

// Advice IDs are from 1 to 224
// Seems to be cached when being called from a site, though via PostMan
// it works fine
// Using a random number within the call instead allows this to work

async function getAdvice() {
    let randomNo = getRandom();

    let response = await fetch(`https://api.adviceslip.com/advice/${randomNo}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    let advice =  await response.json();
    adviceNo.innerHTML = "ADVICE #" + advice.slip.id;
    adviceText.innerHTML = `"${advice.slip.advice}"`;
}

getAdvice();