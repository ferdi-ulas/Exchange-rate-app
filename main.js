const amountInput = document.querySelector("#amountInput");
const firstCurrencyOption = document.querySelector("#firstCurrenyOption");
const secondCurrencyOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#resultInput");
const calculateButton = document.querySelector("#Calculate");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
  calculateButton.addEventListener("click", displayResult);
  amountInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      displayResult();
    }
    updateResultInput(); 
  });
}

async function exchange() {
}

async function displayResult() {
  try {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue =
      firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent;
    const secondOptionValue =
      secondCurrencyOption.options[secondCurrencyOption.selectedIndex].textContent;

    const result = await currency.exchangeValue(
      amount,
      firstOptionValue,
      secondOptionValue
    );

    resultInput.value = result.toFixed(2);
  } catch (error) {
    console.error("Hesaplama yapılırken bir hata oluştu:", error.message);
  }
}

function updateResultInput() {
  if (!amountInput.value.trim()) {
    
    resultInput.value = "";
  }
}
