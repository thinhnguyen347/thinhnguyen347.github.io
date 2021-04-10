

const a = document.getElementById("calculation");
const b = document.getElementById("result");
// Clear man hinh
function reset() {
    a.innerText = "0";
    b.innerText = "";
}

// Nhập data
function press(number) {

    if (a.innerText === "0") {
        a.innerText = "" + number;
    } else {
        a.innerText = a.innerText + number;
    }
}

function pressPlus() {

    if (a.innerText != "") {
        a.innerText = `${a}+`
    }
}

function pressMin() {

    if (a.innerText != "") {
        a.innerText = `${a}-`
    }
}

function pressMul() {

    if (a.innerText != "") {
        a.innerText = `${a}*`
    }
}

function pressDiv() {

    if (a.innerText != "") {
        a.innerText = `${a}/`
    }
}

function pressDot() {

    if (a.innerText != "") {
        a.innerText = `${a}.`
    } else { a.innerText = `0.` }
}


// Dấu bằng
function Equal() {


    x = eval(a.innerText);
    y = Number(x).toLocaleString();
    if (Number.isInteger(x)) {
        b.innerText = `${y}`
    } else {
        b.innerText = `${x.toFixed(3)}`;
    }

}
// Tinh phan tram
function percent() {

    if (a.innerText !== "") {
        let k = parseFloat(a.innerText);
        let x = k / 100;
        b.innerText = `${x}`;
    }
}
// Binh phuong
function Pow() {

    if (a.innerText !== "") {
        let k = parseFloat(a.innerText);
        document.getElementById("result").innerText = `${k * k}`;
    }
}

// Giai Thua

function Factorial() {

    if (a.innerText !== "") {
        let k = parseInt(a.innerText);
        if (k === 0) {
            b.innerText = "1";
        }
        if (Number.isInteger(k)) {
            let x = 1;

            for (let i = 1; i <= k; i++) {
                x = x * i;
            }

            b.innerText = `${x}`;
        }
    }
}

// Can bac 2
function Sqrt() {

    if (a.innerText !== "") {
        let k = parseFloat(a.innerText);

        if (!Number.isInteger(Math.sqrt(k))) {
            b.innerText = `${Math.sqrt(b).toFixed(5)}`;
        } else { b.innerText = `${Math.sqrt(k)}`; }

    }
}


