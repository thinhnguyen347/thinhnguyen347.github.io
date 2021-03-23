//1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: 'Anh', age: 20 }. 
// Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.

function tuoiTB(array) {
    let sum = 0;
    let avg;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i].age;
    }
    avg = sum / array.length;
    console.log(`tuoi trung binh cua sinh vien la `, ${ avg });
}

// 2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.

function Sapxep(array) {

    for (i = 0; i < array.length; i++) {
        if (array[i].age > array[i + 1].age) {
            array[i] = array[i + 1];
            array[i + 1] = array[i];
        }
    }
    console.log(array);
}

// Cach 2
function Sapxep2(array) {

    console.log(array.age.sort(););
}

// 3. Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.

function XoaGT(array) {

    for (i = 0; i < array.length; i++) {
        if (array[i] === null || array[i] === fales || array[i] === undefined || array[i] === NaN || array[i] === 0 || array[i] === "") {
            delete array[i];
        }
    }
    console.log(array);
}

// 4. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

function DoiXung(array) {
    let a = new Array(array.length);
    for (i = 0; i < array.length; i++) {
        array[array.length - i] = a[i]
        if (array[i] = a[i]) {
            console.log("Mang doi xung");
        } else {
            console.log("Mang khong doi xung")
        }
    }
}

// Cach 2

function DoiXung2(array) {
    
    let a = array.reverse();

    if (array[i] = a[i]) {
        console.log("Mang doi xung");
    } else {
        console.log("Mang khong doi xung")
    }

}

// 5. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

function MaxLength(array) {

}