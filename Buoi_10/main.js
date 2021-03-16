//Cau dieu kien
function checkN(n) {

    //kiem tra n co lon hon 0
    if (n > 0) { console.log("n lon hon 0") }

    //kiem tra n co lon hon 0

    if (n % 2 === 0) {
        console.log("n la so chan")
    } else {
        console.log("n la so le")
    }
    //kiem tra so am duong
    if (n > 0) {
        console.log("n la so duong")
    } else if (n < 0) {
        console.log("n la so am")
    } else {
        console.log("n = 0")
    }
}
//bai tap 1: tryen vao hai so, tra ve so lon hon
function checkSoLon(a, b) {
    if (a > b) {
        return a;
    } else { return y }
}
//bai tap 2:
function xeploai(a, b, c) {
    if (a < 0 || a > 10 || b < 0 || b > 10 || c < 0 || c > 10) {
        console.log("khong hop le");
        return
    } else {
        let x = (a + b + c) / 3;
        if (x < 4) {
            console.log("Xep loai Yeu");
        } else if (x < 6.5) {
            console.log("Xep loai TB");
        } else if (x < 8) {
            console.log("Xep loai Kha");
        } else {
            console.log("Xep loai Gioi");
        }
    }
}

function hocluc(x, y, z) {
    if (x < 0 || x > 10 || y < 0 || y > 10 || z < 0 || z > 10) {
        console.log("diem khong hop le");
        return;
    }

    let a = (x + y + z) / 3;

    if (a < 4) {
        console.log("học lực yếu");
    } else if (a < 6.5) {
        console.log("học lưc trung bình");
    } else if (a < 8) {
        console.log("học lực khá");
    } else {
        console.log("học lực giỏi");
    }
}

function HamBac2(a, b, c) {
    if (a === 0) {
        let x = -c / b;
        console.log(x);
        return;
    }
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("Phuong trinh vo nghiem")
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log(`pt co 2 nghiem la ${x}`)
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`pt co 2 nghiem la ${x1} va ${x2}`);
    }
}

var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}

//Bt1: Kiem tra n co phai so nguyen to hay khong
//BT2: Dem va liet ke cac so nguyen to nho hon hoac bang x (x<1000)