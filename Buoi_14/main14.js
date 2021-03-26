let random = Math.floor(Math.random() * 100);
let alertMessage = document.getElementById("alert");
let resultMessage = document.getElementById("result");
let count = 0;

function clickGuess() {
    let numberGuess = parseInt(document.getElementById("number").value);
    console.log(random, numberGuess);

    if (!Number.isInteger(numberGuess)) {
        alertMessage.innerHTML = "Vui lòng nhập số!";
        alertMessage.style.color = "red";
    } else {
        count++;
        if (numberGuess > random) {
            alertMessage.innerHTML = "Số quá lớn";
        } else if (numberGuess < random) {
            alertMessage.innerHTML = "Số quá bé";
        } else {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng!";
        }

        resultMessage.innerHTML += 'Lần đoán thứ ${count} có giá trị là ${numberGuess} <br>';

        if (count >= 10) { 
            document.getElementById("guessButton").disabled= true;
        }
    }
}

location.reload()