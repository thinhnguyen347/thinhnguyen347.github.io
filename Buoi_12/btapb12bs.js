//1. Đếm số nguyên tố trong đoạn [a, b]
function songuyento(a,b){
    if (Number.isInteger(a) === false || Number.isInteger(b) === false || a < b) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }


}

//2. Chèn phần tử có giá trị X vào phía sau phần tử có giá trị lớn nhất trong mảng.

//3. Chèn phần tử có giá trị X vào mảng sao cho mảng vẫn có thứ tự tăng dần.

//4. Kiểm tra tính đối xứng của một số.

function sodoixung(n){
    let soMoi= 0;
    let temp = n;
    while  (temp > 0){
        let sotachra = temp%10;
        soMoi = soMoi*10 + sotachra;
        temp= Math.floor(temp/10);
    }
    if (soMoi === n){
        console.log(`So ${n} la so doi xung`);
    } else {console.log(`So ${n} khong la so doi xung`)}
}

//5. Viết chương trình tính tiền cước TAXI. Biết rằng:
// Giá cước khi mở cửa là 9.000 đồng/km.
// Giá cước từ km đầu tiên cho đến km thứ 30 là 11.000 đồng/km.
// Giá cước là 9.500 đồng/km tính từ km thứ 31.
//Thời gian chờ: 20.000 đồng/tiếng.