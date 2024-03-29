/**BT 1: Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:
 * - Mùa xuân từ tháng 1 đến tháng 3
 * - Mùa hè từ tháng 4 đến tháng 6
 * - Mùa thu từ tháng 7 đến tháng 9
 * - Mùa đông từ tháng 10 đến tháng 12*/

function season() {
    let d = new Date();
    console.log(`Thời gian hiện tại là ${d}`);
    let n = d.getMonth();
    if (n <= 2) { console.log("Hiện tại đang là Mùa Xuân"); }
    else if (n <= 5) { console.log("Hiện tại đang là Mùa Hè"); }
    else if (n <= 8) { console.log("Hiện tại đang là Mùa Thu"); }
    else { console.log("Hiện tại đang là Mùa Đông"); }
}

//Chua bai

//Lấy ra ngày tháng năm bất kỳ, xác định mùa nào trong năm
function thang() {
    var date = new Date();
    console.log(date.getDate());
    var m = date.getMonth() + 1;
    if (m < 1 || m > 12) {
        return;
    }
    if (m <= 3) {
        return `Thang ${m} la mua xuan`;
    } else if (m <= 7) {
        return `Thang ${m} la mua he`;
    } else if (m <= 9) {
        return `Thang ${m} la mua thu`;
    } else if (m <= 12) {
        return `Thang ${m} la mua xuan`;
    }
}

//BT 2: Viết hàm trả về số ngày có trong 1 tháng.
//Lưu ý: Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.
/** 31 ngày: 1,3,5,7,8,10,12
 * 30 ngày: 4,6,9,11
 * 28/29 ngày: tháng 2
 */
function DateCount() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth();
    if (m === 1) {
        if (y % 4 === 0) { console.log("Tháng có 29 ngày"); }
        else { console.log("Tháng có 28 ngày"); }
    } else if (m === 3 || m === 5 || m === 8 || m === 10) { console.log("Tháng có 30 ngày"); }

    else { console.log("Tháng có 31 ngày"); }
}

//Chua bai

function kiemTraNamNhuan(y) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
        return true;
    }

    return false;
}

function NgayThang(m, y) {
    if (m < 1 || m > 12 || y < 1) {
        return `Dữ liệu không hợp lệ`;
    }

    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return `Thang ${m} nam ${y} co 30 ngay`;
    } else if (m === 2) {
        return kiemTraNamNhuan(y)
            ? `Thang ${m} nam ${y} co 29 ngay`
            : `Thang ${m} nam ${y} co 28 ngay`;
    } else {
        return `thang ${m} nam ${y} co 31 ngay`;
    }

}
//BT 3: Tính tổng các chữ số trong 1 số nguyên dương.
function TinhTong(d) {
    if (d <= 0 && Number.isInteger(d) == false) { console.log(`Số không hợp lệ`) }

    let x = 0;
    let y = d % 10;
    for (; y < 10;) {
        y = d % 10;
        x += y;
    }
    console.log(`${x}`);

}
// Chữa bài: 
/**tinh tong chu so cua so nguyen */
function tinhTong(number) {
    //kiem tra so dau vao
    if (number < 0 || Number.isInteger(number) == false) {
        return;
    }

    //tinh tong
    let tachSo;
    let tong = 0;
    for (; number != 0;) {
        tachSo = number % 10;
        tong += tachSo;
        number = Math.floor(number / 10);
    }
    return tong;
}

//BT 4: In ra một chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì thực hiện cắt chuỗi lấy 10 ký tự và hiển thị phía sau là dấu ba chấm 

function CatChuoi(n) {
    let x = n.length;
    let y = n.substring(0, 10);
    if (x <= 10) { console.log(n) } else { console.log(`${y}...`) }
}

//Chua bai
function catchuoi(n) {
    let x = n.length;
    let y = n.substring(0, 10);
    if (x > 10) {
        return `${y}...`;
    } else {
        return `${y}`;
    }
}

/**BT 5: Viết hàm có tính năng translate. Truyền vào hàm tên đất nước bạn muốn biết về lời chào ở nuớc họ: French, Hawaiian, Germany, Italy, Croatia. 
 * Nếu không nhập gì chúng tôi có thể cho rằng bạn muốn nói biết ở Việt Nam. Hàm sẽ in ra lời chào theo đất nước tương ứng. 
 * Ví dụ nước Việt Nam có lời chào: "Xin chào" */

function translate(language) {
    switch (language) {
        case "French":
            console.log("Bonjour");
            break;
        case "Hawaiian":
            console.log("Hui");
            break;
        case "Germany":
            console.log("Hallo");
            break;
        case "Italy":
            console.log("Ciao");
            break;
        case "Hawaiian":
            console.log("Aloha");
            break;
        default:
            console.log("Xin chào");
    }
}
// Chua bai
function translate2(text) {
    if (typeof text !== "string") {
        return "Xin chao, du lieu cua ban khong hop le";
    }

    if (text === "French") {
        return "Borjou";
    } else if (text === "Hawaii") {
        return "aloha";
    } else if (text === "Gemany") {
        return "Hallo";
    } else if (text === "Italy") {
        return "Ciao";
    } else if (text === "China") {
        return "Nihao";
    } else {
        return "Xin chao";
    }
}