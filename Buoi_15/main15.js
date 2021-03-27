

function Change() {
    let number = parseInt(document.getElementById("number").value);
    let currency = document.getElementById("from").value;
    let result = document.getElementById("result").innerHTML;
    
    if (currency === "VND") {
        convertedNumber = number * 23000;
        result = "convertedNumber"
    } else if (currency === "EUR") {
        convertedNumber = number * 27000;
        result = "convertedNumber"


    }
}

function reload() {
    location.reload();
}
