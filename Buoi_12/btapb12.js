//BT1. Hai anh em nhà cừu không có gì chơi, thằng anh mới đố thằng em: “Tao cho mày 1 số, nếu nó chẵn thì chia đôi, nó lẻ thì nhân 3 cộng 1. 
// Đố mày biết sau bao nhiêu phép tính thì nó ra 1 ???”. 
// Ông em ngẩn tò te không biết trả lời như nào. Bạn hãy giúp chú bé 1 tay với. In ra đáp án hoặc “-1” nếu ko có số nào hợp lệ.

function DemPhepTinh(n) {
    if (Number.isInteger(n) === false) { return `-1`; }
    let dem = 0;
    for (let i = 0; i <= n / 2; i++) {
        k = n / 2;
        if (n % 2 === 0) {
            dem++;
            while (k === 1) {
                console.log(`So phep tinh la: ` + dem);
            }
        } else {
            n = n * 3 + 1;
            for (let i = 0; i <= n / 2; i++) {
                k = n / 2;



            }
        }

    }
}


// 3. Vẽ hình chữ nhật rỗng:



//4.  Vẽ tam giác vuông:

function tamgiacVuong(m) {
    if (m <= 0 || Number.isInteger(m) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    let str = "";
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= i; j++) {
            str += "*&#32;";
        }
        str += "<br/>";
    }
    document.writeln(str);
}
//5. Vẽ tam giác cân ngược:

function tamgiacCan(h) {
    if (h <= 0 || Number.isInteger(h) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    let str = "";
    for (let i = 0; i < h; i++) {
        for (let k = 0; k < i; k++) {
            str += "*&#32;".fontcolor("white");
        }
        for (let j = 0; j < (2 * h - 1 - 2 * i); j++) {
            str += "*&#32;";
        }
        str += "<br/>";
    }
    document.writeln(str);
}
// Chua bai

function printSpecialTriangle(h) {
    var str = "";
    for (i = h; i >= 1; i--) {
        for (j = 2 * h - 1; j >= 1; j--) {
            if (j >= h - i + 1 && j <= h + i - 1) {
                str += " *  ";
            } else {
                str += " *  ".fontcolor("white");
            }
        }
        str += "<br>";
    }
    document.writeln(str);
}

//6: Ve forward arrow:

function arrow(h) {
    if (h <= 0 || Number.isInteger(h) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }

    let str = "";
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < i; j++) {
            str += "*&#32;";
        }
        str += "<br/>";
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < h - 1 - i; j++) {
            str += "*&#32;";
        }
        str += "<br/>";
    }
    document.writeln(str);
}

//7: ve hinh thoi, h la so le.

function vehinhthoi(h) {
    if (h <= 0 || h % 2 === 0 || Number.isInteger(h) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    let str = "";
    // Ve nua tren
    for (i = 0; i < h; i++) {
        for (j = 0; j < 2 * h; j++) {
            if (j <= h - 1 + i && j >= h - 1 - i) {
                str += "*";
            } else {
                str += "*".fontcolor("white");
            }
        }
        str += "<br>";
    }
    // ve nua duoi
    let a = h-1;
    for (i = a; i >= 1; i--) {
        for (j = 2 * a - 1; j >= 1; j--) {
            if (j <= a - 1 + i && j >= a - 1 - i) {
                str += "*";
            } else {
                str += "*".fontcolor("white");
            }
        }
        str += "<br>";
    }
    document.writeln(str);
}