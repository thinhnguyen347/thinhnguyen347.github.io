

function Change() {
    let number = document.getElementById("number").value;
    let currencyFr = document.getElementById("from").value;
    let currencyTo = document.getElementById("to").value;
    let result = document.getElementById("result");

    // console.log(number)
    // console.log(currencyFr)
    // console.log(currencyTo)
    
    if (number > 0) {

        if (currencyFr === "USD") {
            if (currencyTo === "VND") {
                convertedNumber = number * 23080;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "GBP") {
                convertedNumber = number * 0.73;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "EUR") {
                convertedNumber = number * 0.85;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "KRW") {
                convertedNumber = number * 1128.96;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "USD") {
                convertedNumber = number * 1;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
        }

        if (currencyFr === "VND") {
            if (currencyTo === "VND") {
                convertedNumber = number * 1;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "GBP") {
                convertedNumber = number * 0.000032;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "EUR") {
                convertedNumber = number * 0.000037;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "KRW") {
                convertedNumber = number * 0.049;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "USD") {
                convertedNumber = number * 0.000044;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
        }

        if (currencyFr === "GBP") {
            if (currencyTo === "VND") {
                convertedNumber = number * 31837.19;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "GBP") {
                convertedNumber = number * 1;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "EUR") {
                convertedNumber = number * 1.17;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "KRW") {
                convertedNumber = number * 1556.95;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "USD") {
                convertedNumber = number * 1.38;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
        }

        if (currencyFr === "EUR") {
            if (currencyTo === "VND") {
                convertedNumber = number * 27297.45;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "GBP") {
                convertedNumber = number * 0.86;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "EUR") {
                convertedNumber = number * 1;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "KRW") {
                convertedNumber = number * 1334.94;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "USD") {
                convertedNumber = number * 1.18;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
        }

        if (currencyFr === "KRW") {
            if (currencyTo === "VND") {
                convertedNumber = number * 20.45;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "GBP") {
                convertedNumber = number * 0.00064;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "EUR") {
                convertedNumber = number * 0.00075;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "KRW") {
                convertedNumber = number * 1;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
            if (currencyTo === "USD") {
                convertedNumber = number * 0.00089;
                result.innerText = `${number} ${currencyFr} = ${convertedNumber} ${currencyTo}`;
            }
        }

    } else {
        result.innerHTML = "Vui lòng nhập số lớn hơn 0!";
        result.style.color = "red";
    }

    result.style.fontSize = "2em";
}

function reload() {
    location.reload();
}
