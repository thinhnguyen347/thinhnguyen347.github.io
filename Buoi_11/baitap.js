/**1. Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo nhỏ hơn N 
(số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).*/

function kiemtrasonguyen(z) {
    if (Number.isInteger(z)) { return z }
    return `So khong hop le`;
}
let d


//2. Tìm số nhỏ nhất và lớn nhất trong mảng số nguyên
function MinMax(arr) {
    let arr;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            console.log(`${arr[i]} la so lon nhat`);
        }
        if (arr[i] < arr[i + 1]) {
            console.log(`${arr[i]} la so be nhat`);
        }
    }

}


//3. Tìm số lớn thứ 2 trong mảng số nguyên

function SecondMax(x) {
    for (let i in x) {
        if (x[i] < x[i + 1]) {
            return x[i+1]
        }
    }
    console.log(`Số lớn thứ 2 trong dãy là ${x[2]}`)
}

//4. Trả về Vị trí đầu tiên của số lẻ, vị trí cuối cùng của số chẵn trong mảng bất kì.

//5. In một chuỗi cho trước theo thứ tự ngược lại (Ví dụ: Hello in thành olleH)

//6. Sắp xếp mảng số nguyên theo chiều tăng dần và giảm dần.