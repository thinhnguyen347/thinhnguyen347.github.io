/**1. Cho một số nguyên dương N (N<10000), viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N 
(số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).*/

function kiemtrasonguyen(z) {
    if (Number.isInteger(z)) { return z }
    return `So khong hop le`;
}
let d =

    // chữa bài

    function KiemTraSoHoanHao(a) {
        let tongCacUoc = 0;
        for (let i = 1; i <= a / 2; i++) {
            if (a % i === 0) {
                tongCacUoc += i;
                console.log(i);
            }
        }
        if (tongCacUoc === a) {
            console.log(`${a} la so hoan hao`)
            return true;
        }
        return false;
    }
function inSoHoanHao(n) {
    for (let i = 1; i <= n; i++) {
        if (KiemTraSoHoanHao(i) == true) {
            console.log(i)
        }
    }
}

//2. Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
// function MinMax(arr) {
//     let arr;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] >= arr[i + 1]) {
//             console.log(`${arr[i]} la so lon nhat`);
//         }
//         if (arr[i] < arr[i + 1]) {
//             console.log(`${arr[i]} la so be nhat`);
//         }
//     }

// }

// Chữa bài
function MinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log("Gia tri lon nhat la: ", max);
    console.log("Gia tri nho nhat la: ", min);
}

//3. Tìm số lớn thứ 2 trong mảng số nguyên

function SecondMax(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            i--
        }
        return array;
    }
    console.log(`Số lớn thứ 2 trong dãy là ${array[2]}`)
}
// Chữa bài

function timsothu2(arr) {
    let max = arr[0];
    let max2 = arr[0];
    // tim Max trong mang arr
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    // xoa max trong mang arr
    for (i = 1; i < arr.length; i++) {
        if (arr[i] === max) {
            arr.splice(i, 1);
        }
    }

    // tim max cua mang arr sau khi da xoa phan tu lon nhat
    for (let i = 0; i < arr.length; i++) {
        if (max2 < arr[i]) {
            max2 = arr[i];
        }
    }
    console.log(max2);
}
// Cách 2:
function second_Max(a) {
    let max1;
    let max2;
    if (a[0] > a[1]) {
        max1 = a[0];
        max2 = a[1];
    } else {
        max1 = a[1];
        max2 = a[0];
    }
    for (let i = 2; i < a.length; i++) {
        if (a[i] > max1) {
            max2 = max1;
            max1 = a[i];
        } else if (a[i] > max2) {
            max2 = a[i];
        }
    }
    return `${max2} là số lớn thứ hai trong mảng`;
}

//4. Trả về Vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.

function ViTri(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) { return 'Vi tri so le la ', i }
    }
}

//Chua bai
function findFirstOdd(arr) {
    for (let i in arr) {
        if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
            return `Index: ${i} - value: ${arr[i]}`;
        }
    }
}

// Tra ve vi tri cuoi cung cua so chan trong mang

function findLastEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            return `Index: ${i} - value: ${arr[i]}`;
        }
    }
}

let array = [-4, 0, -3.6, -5, 8, 6, 9, 4, -6, 2, 7];

console.log(findFirstOdd(array));
console.log(findLastEven(array));


//5. In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH)

function DaoNguoc(array) {

    let m = array.length;
    if (m === 0) {
        return 'Không hợp lệ';
    }
    let x = [];
    for (let i = 0; i < m; i++) {

        x[i] = array[m - 1 - i];
    }
    return x.join("");
}

// Chữa bài


//6. Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần.

function tangdan(a) {

    let x = [];
    let y = 0;
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (y > a[i]) {
                y = a[i];
                x[i] = y;
            }
        }
    }
    return x;
}


//7. Tinh n!

function giaithua(n) {
    if (n < 0 || Number.isInteger(n) === false) { return; }
    if (n === 0 || n === 1) { return 1; }

    let gt = 1;
    while (n > 1) {
        gt = gt * n;
        n--;
    }
    return gt;
}
