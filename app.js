const adviceNo = document.getElementById('advice-no');
const adviceText = document.getElementById('advice-text');
const dice = document.getElementById('dice');

dice.addEventListener("click", getAdvice);

async function getAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice');

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

    let advice =  await response.json();
    adviceNo.innerHTML = "ADVICE #" + advice.slip.id;
    adviceText.innerHTML = `"${advice.slip.advice}"`;
}

getAdvice();