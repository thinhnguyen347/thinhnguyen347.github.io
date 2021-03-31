//Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. 
//Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function SumAB(a, b) {
    if (a < b) {
        let sum = 0;
        for (let i = a + 1; i < b; i++) {
            sum = sum + i;
        }

        console.log(sum)
    } else { return "Số nhập không hợp lệ" }

}

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.

function joinText(string) {

    let str = string.toLowerCase();
    let str1 = str.split(' ');
    let str2 = str1.join('-')

    console.log(str2);

}

//Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. 
//Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ: với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.



//Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét.
// Hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).

function OcSenbo(x, y, h) {

    if (x > 0 && y > 0 && h > 0) {
        let n = x - y;
        dem = 0
        for (let n = 1; n <= h / n; n++) {
            dem++;
        }
        console.log(`Số ngày để hoàn thành là ${dem}`)
    } else { return "Số không hợp lệ" }

}

//Bài 5: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). 
// Ví dụ với tham số 530751 thì kết quả là 103557.

function sapXep(array) {
    let arr = [];
    let min = array[0];

    if (array > 0) {
        for (let i = 0; i < array.length; i++) {

            for (let j = 1; j < array.length; j++) {
                if (min > array[j]) {
                    min = array[i];
                    array[i] = array[j];
                    array[j] = min;
                }
                arr.push(array[j]);

            }

        }

        console.log(arr);
    }
    console.log(arr.join(''));
}

//Bài 6: Tạo 1 trang HTML có một nút để thay đổi màu nền của trang web và hiển thị tên màu tương ứng. 
//Random màu bất kỳ, sử dụng mã hex, biết rằng, 
//mã hex được tạo thành từ các ký tự sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'].

function reset() {
    window.location.reload()
}

function changeBgColor() {
    let color = prompt("Vui lòng nhập mã màu nền 6 ký tự bằng mã hex sử dụng các ký tự sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']");

    if (color.length === 6) {

        document.getElementById("container").style.backgroundColor = `#${color}`;

        if (color === "000000") {
            document.getElementById("container").style.color = "white";
        }
        document.getElementById("color").innerHTML = `Màu nền hiện tại là: #${color}`;

    } else { window.alert("Mã màu không hợp lệ") }

}