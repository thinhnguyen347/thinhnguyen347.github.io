let random = Math.floor(Math.random() * 100) + 1;
let alertMessage = document.getElementById("alert");
let resultMessage = document.getElementById("result");
let turnMessage = document.getElementById("turn");
let count = 0;

function clickGuess() {
    let numberGuess = parseInt(document.getElementById("number").value);
    console.log(random, numberGuess);

    if (numberGuess < 0 || !Number.isInteger(numberGuess)) {
        alertMessage.innerHTML = "Vui lòng nhập số lớn hơn hoặc bằng 0!";
        alertMessage.style.color = "red";
    } else {
        count++;
        if (numberGuess > random) {
            alertMessage.innerHTML = "Số quá lớn rồi!";
            alertMessage.style.fontSize = "1.8em";
            alertMessage.style.color = "#d44000";
        } else if (numberGuess < random) {
            alertMessage.innerHTML = "Tiếc thật! Số quá bé!";
            alertMessage.style.fontSize = "1.8em";
            alertMessage.style.color = "#1f441e";
        } else {
            alertMessage.innerHTML = "Chúc mừng bạn đã đoán đúng!";
            alertMessage.style.color = "#e84545";
            alertMessage.style.fontSize = "2em";
            alertMessage.style.backgroundColor = "#9ede73";
        }

        resultMessage.innerHTML += `Lần đoán thứ ${count} có giá trị là ${numberGuess} <br>`;
        turnMessage.innerHTML = `Bạn còn <span id="hightlight-number"> ${10 - count} </span> lượt đoán`;
                if (count >= 10) {
            document.getElementById("guessButton").disabled = true;
        }
    }
}

function reload() {
    location.reload();
}
