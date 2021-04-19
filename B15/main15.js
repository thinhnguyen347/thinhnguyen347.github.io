

function Change() {
    let number = document.getElementById("number").value;
    let currencyFr = document.getElementById("from").value;
    let currencyTo = document.getElementById("to").value;
    let result = document.getElementById("result");

    // console.log(number)
    // console.log(currencyFr)
    // console.log(currencyTo)

    if (number >= 0) {

        if (currencyFr === "USD") {
            if (currencyTo === "VND") {
                convertedNumber = number * 23080;
            }

            if (currencyTo === "GBP") {
                convertedNumber = number * 0.73;
            }

            if (currencyTo === "EUR") {
                convertedNumber = number * 0.85;
            }

            if (currencyTo === "KRW") {
                convertedNumber = number * 1128.96;
            }

            if (currencyTo === "USD") {
                convertedNumber = number * 1;
            }
        }

        if (currencyFr === "VND") {
            if (currencyTo === "VND") {
                convertedNumber = number * 1;
            }

            if (currencyTo === "GBP") {
                convertedNumber = number * 0.000032;
            }

            if (currencyTo === "EUR") {
                convertedNumber = number * 0.000037;
            }

            if (currencyTo === "KRW") {
                convertedNumber = number * 0.049;
            }

            if (currencyTo === "USD") {
                convertedNumber = number * 0.000044;
            }
        }

        if (currencyFr === "GBP") {
            if (currencyTo === "VND") {
                convertedNumber = number * 31837.19;
            }

            if (currencyTo === "GBP") {
                convertedNumber = number * 1;
            }

            if (currencyTo === "EUR") {
                convertedNumber = number * 1.17;
            }

            if (currencyTo === "KRW") {
                convertedNumber = number * 1556.95;
            }

            if (currencyTo === "USD") {
                convertedNumber = number * 1.38;
            }
        }

        if (currencyFr === "EUR") {
            if (currencyTo === "VND") {
                convertedNumber = number * 27297.45;
            }

            if (currencyTo === "GBP") {
                convertedNumber = number * 0.86;
            }

            if (currencyTo === "EUR") {
                convertedNumber = number * 1;
            }

            if (currencyTo === "KRW") {
                convertedNumber = number * 1334.94;
            }

            if (currencyTo === "USD") {
                convertedNumber = number * 1.18;
            }
        }

        if (currencyFr === "KRW") {
            if (currencyTo === "VND") {
                convertedNumber = number * 20.45;
            }

            if (currencyTo === "GBP") {
                convertedNumber = number * 0.00064;
            }

            if (currencyTo === "EUR") {
                convertedNumber = number * 0.00075;
            }

            if (currencyTo === "KRW") {
                convertedNumber = number * 1;
            }

            if (currencyTo === "USD") {
                convertedNumber = number * 0.00089;
            }
        }
        result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;

    } else {
        result.innerHTML = "Vui lòng nhập số không âm!";
        result.style.color = "red";
    }

    result.style.fontSize = "2em";
}

function reload() {
    location.reload();
}
