function reset() {
    document.getElementById("calculation").innerText = "0";
    document.getElementById("result").innerText = "";
}
// Nhập data

function press(number) {

    let a = document.getElementById("calculation").innerText;
    if (a === "0") {
        document.getElementById("calculation").innerText = "" + number;
    } else {
        document.getElementById("calculation").innerText = a + number;
    }
}

function pressPlus() {
    let a = document.getElementById("calculation").innerText;
    if (a != "") {
        document.getElementById("calculation").innerText = `${a}+`
    }
}

function pressMin() {
    let a = document.getElementById("calculation").innerText;
    if (a != "") {
        document.getElementById("calculation").innerText = `${a}-`
    }
}

function pressMul() {
    let a = document.getElementById("calculation").innerText;
    if (a != "") {
        document.getElementById("calculation").innerText = `${a}*`
    }
}

function pressDiv() {
    let a = document.getElementById("calculation").innerText;
    if (a != "") {
        document.getElementById("calculation").innerText = `${a}/`
    }
}

function pressDot() {
    let a = document.getElementById("calculation").innerText;
    if (a != "") {
        document.getElementById("calculation").innerText = `${a}.`
    } else { document.getElementById("calculation").innerText = `0.` }
}


// Dấu bằng
function Equal() {
    let a = document.getElementById("calculation").innerText;
    let b = document.getElementById("result");
    x = eval(a);
    y = Number(x).toLocaleString();
    if (Number.isInteger(x)) {
        b.innerText = `${y}`
    } else {
        b.innerText = `${x.toFixed(3)}`;
    }

}
// Tinh phan tram
function percent() {
    let b = document.getElementById("calculation").innerText
    if (b !== "") {
        let a = parseFloat(b);
        x = a / 100;
        document.getElementById("result").innerText = `${x}`;
    }
}
// Binh phuong
function Pow() {
    let b = document.getElementById("calculation").innerText
    if (b !== "") {
        let a = parseFloat(b);
        document.getElementById("result").innerText = `${a * a}`;
    }
}

// Giai Thua

function Factorial() {
    let b = document.getElementById("calculation").innerText
    if (b !== "") {
        let a = parseInt(b);
        if (a === 0) {
            document.getElementById("result").innerText = "1";
            return;
        }
        if (Number.isInteger(a)) {
            let x = 1;

            for (let i = 1; i <= a; i++) {
                x = x * i;
            }

            document.getElementById("result").innerText = `${x}`;
        }
    }
}

// Can bac 2
function Sqrt() {
    let b = document.getElementById("calculation").innerText
    if (b !== "") {
        let a = parseFloat(b);

        if (!Number.isInteger(Math.sqrt(a))) {
            document.getElementById("result").innerText = `${Math.sqrt(a).toFixed(5)}`;
        } else { document.getElementById("result").innerText = `${Math.sqrt(a)}`; }

    }
}

// function f() {

//     for (let i = 0; i <= 26; i++) {
//         x = document.getElementsByTagName("p")[i].innerText;
//         console.log(`${i} ${x}`);   }}
