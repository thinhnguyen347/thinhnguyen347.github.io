function reset() { 
    document.getElementById("calculation").innerText= "";
    document.getElementById("result").innerText = "";
}
//So
function press7() {
    let input = document.getElementsByTagName("p");
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[8].innerText;
}

function press8() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[9].innerText;
}

function press9() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[10].innerText;
}

function press4() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[13].innerText;
}

function press5() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[14].innerText;
}

function press6() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[15].innerText;
}

function press1() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[18].innerText;
}

function press2() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[19].innerText;
}

function press3() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[20].innerText;
}

function press0() {
    let input = document.getElementsByTagName("p")
    let a = document.getElementById("calculation").innerText;
    document.getElementById("calculation").innerText = a + input[23].innerText;
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


// Dau bang
function Equal() {
    let a = parseFloat(document.getElementById("calculation").innerText);
    document.getElementById("result").innerText = `${a}`;
}
// Tinh phan tram
function percentage() {
    let a = parseFloat(document.getElementById("calculation").innerText);
    x = a / 100;
    if (a != "") {
        document.getElementById("result").innerText = `${x}`;
    }
}
// Binh phuong
function Pow() {
    let a = parseFloat(document.getElementById("calculation").innerText);
    if (a != "") {
        document.getElementById("result").innerText = `${a * a}`;
    }
}

// Giai Thua

function Factorial() {
    let a = parseInt(document.getElementById("calculation").innerText);
    if (a != "" || !Number.isInteger(a)) {
        if (a === 0) {
            document.getElementById("result").innerText = "1";
            return;
        }

        let x = 1;

        for (let i = 1; i <= a; i++) {
            x = x * i;
        }

        document.getElementById("result").innerText = `${x}`;
    }
}

// Can bac 2
function Sqrt() {
    let a = parseFloat(document.getElementById("calculation").innerText);
    if (a != "") {
        if (!Number.isInteger(Math.sqrt(a))) {
            document.getElementById("result").innerText = `${Math.sqrt(a).toFixed(5)}`;
        } else { document.getElementById("result").innerText = `${Math.sqrt(a)}`; }
    }
}

// function f() {

//     for (let i = 0; i <= 26; i++) {
//         x = document.getElementsByTagName("p")[i].innerText;
//         console.log(`${i} ${x}`);
//     }

// }
