// Vòng lặp for có thể khuyết 1-3 điều kiện biến đếm, điều kiện check dừng, step
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break //Dừng vòng lặp khi i đạt giá trị 5
    }
}

//Vòng lặp while, step nhảy ghi bên trong
let i = 0;
while (i = 10) {
    console.log(i);
    i++;
}

//Chạy xong mới kiểm tra điều kiện
let k = 0;
do {
    console.log(k);
    k--
} while (k > 0)

let m = 10;
do {
    m--;
    if (m === 8) {
        console.log("Tam chia het cho 2");
        //continue; //Bỏ qua các câu lệnh phía dưới, thực hiện 1 vòng lặp mới
    }
    console.log(m);

} while (m > 0);

//Cho n<50. Đếm và liệt kê các số chi hết cho 5 trong đoạn từ 0 đến n
function chiahet5(n) {

    if (n < 0 || n > 50) {
        return
    }

    let dem = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i);
            dem++;
        }
    }
    console.log(`co tat ca ${dem} so chia het cho 5`)

}
/** Dữ liệu kiểu mảng 
 * đặt trong dấu [], có thể rỗng
 * Phần tử đầu tiên có giá trị 0
*/
