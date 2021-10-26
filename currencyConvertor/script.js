let amount = document.getElementById("amount");
let fromValue = document.getElementById("fromValue");
let toValue = document.getElementById("toValue");
let outputText = document.getElementById("outputText");
let convertValue = document.getElementById("convertValue");
let icon = document.getElementById("icon");

convertValue.addEventListener('click', (event) => {
    event.preventDefault();
    calculateValue();
})

icon.addEventListener('click', () => {
    let temp = fromValue.value;
    fromValue.value = toValue.value;
    toValue.value = temp;
    calculateValue();
})

function calculateValue(event) {
    let amountValue = amount.value;

    if (amountValue == "" || amountValue == "0") {
        amount.value = "1";
        amountValue = 1;
    }

    let url = `https://v6.exchangerate-api.com/v6/eaebbf4348367581c9a5d312/latest/${fromValue.value}`;
    fetch(url)
        .then(response =>
            response.json()).then(result => {
            let exchangeRate = result.conversion_rates[toValue.value];
            let totalValue = (amountValue * exchangeRate).toFixed(2);
            console.log(totalValue)
            outputText.textContent = "Converted Value: " + totalValue + " " + toValue.value;
        })
        .catch(() => {
            outputText.textContent = "Something went wrong"
        })
}