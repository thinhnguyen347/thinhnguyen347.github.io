let array = [1, 2, 3];
let names;

names = ["An", "Anh", "Tu", "Thinh"];

names.length; //dếm số phần tử của mảng

//lấy phần tử theo index
names[3];
console.log(names[3])

//duyệt mảng
for (let i = 0; i < names.length; i++) {
    console.log(`Toi ten la ${names[i]}`)
}

for (let index in names) {
    console.log(`Index la ${index} và item la ${names[index]}`);
}
for (let item of names) {
    console.log(item);
}

// Phuong thuc voi mang
names.push("Quynh"); // Dùng hàm push thêm mới 1 phần tử vào mảng
console.log(names);

/**array.pop: lấy ra/xoá phần tử cuối mảng
 * array.shift:
 * array.unshift 
 */

/** Cho 1 mảng số nguyên. Kiểm tra nếu có phần tử bé hơn 0 thì thay thế nó bằng 0 */
function CheckArray(arr) {
    for (let i in arr) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr
}

function drawSquare(n) {
    for (let i = 0 ; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log("*");
        }
    }

}