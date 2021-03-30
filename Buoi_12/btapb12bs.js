//1. Đếm số nguyên tố trong đoạn [a, b]

function songuyento(a, b) {
    if (Number.isInteger(a) === false || Number.isInteger(b) === false || a > b) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }

    if (a < 2) { console.log() }
    let dem = 0;
    for (let i = a; i <= b; i++) {
        if (i !== 2 && i % 2 === 0 || i % 3 === 0 || i === 0 || i === 1) {
            dem = 0;
        }
        dem++
    }
    console.log(dem);
}

//2. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.

function insertMax(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < araylength; j++) {
            if (array[i] < array[j]) {
                Max = array[j];
            }
        }
    }
    arr = array.slice(0, j)
}

//3. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.

//4. Kiểm tra tính đối xứng của một số.

function sodoixung(n) {
    let soMoi = 0;
    let temp = n;
    while (temp > 0) {
        let sotachra = temp % 10;
        soMoi = soMoi * 10 + sotachra;
        temp = Math.floor(temp / 10);
    }
    if (soMoi === n) {
        console.log(`So ${n} la so doi xung`);
    } else { console.log(`So ${n} khong la so doi xung`) }
}

//5. Viết chương trình tính tiền cước TAXI. Biết rằng:
// Giá cước khi mở cửa là 9.000 đồng/km.
// Giá cước từ km đầu tiên cho đến km thứ 30 là 11.000 đồng/km.
// Giá cước là 9.500 đồng/km tính từ km thứ 31.
//Thời gian chờ: 20.000 đồng/tiếng.

function giaCuoc() {
    let km = prompt("Nhập vào số km, phút chờ", "20");
    let phut = prompt("Nhập số phút chờ");
    
    thoiGianCho = phut * 20000 / 60;

    if (1 <= km <= 30) {
        gia = (km - 1) * 11000
    }
    if (km > 30) {
        gia = (km - 30) * 9500 + 30 * 11000
    }

    Tong = 9000 + gia + thoiGianCho;
    console.log(`Tổng tiền phải trả là ${Tong}`)

}