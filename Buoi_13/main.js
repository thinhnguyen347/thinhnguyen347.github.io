//1. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: 'Anh', age: 20 }. 
// Viết hàm tính ra tuổi trung bình của toàn bộ sinh viên.

function tuoiTB(array) {
    let sum = 0;
    let avg;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i].age;
    }
    avg = sum / array.length;
    console.log("tuoi trung binh cua sinh vien la " + avg);
}

//  Chua bai

let students = [
    {
        name: "a",
        age: 40,
    }, {
        name: "b",
        age: 60,
    }, {
        name: "c",
        age: 30,
    }, {
        name: "d",
        age: 20,
    }, {
        name: "e",
        age: 50,
    },
]

function ageAvg(arrays) {
    let sum = 0;
    let avg = 0;
    for (let i of arrays) {
        console.log(i.age)
        sum = sum + i.age

    }
    console.log("sum:", sum);
    avg = sum / arrays.length;
    return avg;
}

console.log("Avg", ageAvg(students));

// 2. Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Anh'', age: 20 }. Viết hàm sắp mảng theo tuổi học viên từ cao đến thấp.

function Sapxep(array) {
    let min = array[0].age;
    for (i = 0; i < array.length; i++) {
        for (k = i + 1; k < array.length; k++)
            if (array[i] > array[k]) {
                min = array[i];
                array[i] = array[k];
                array[i] = min;
            }
    }
    console.log(array);
}

// Cach 2
function Sapxep2(array) {

    console.log(array.age.sort());
}

// 3. Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.

let values = [false, NaN, 24, 0, "", undefined, null, "ANBC", true]
function giaTri(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArr.push(arr[i]);
    }
    return newArr
}
console.log(giaTri(values))

// 4. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, 
//không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. 
//Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

function DoiXung(array) {
    let a = new Array(array.length);
    for (i = 0; i < array.length; i++) {
        array[array.length - i] = a[i];
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
    for (i = 0; i < array.length; i++) {
        for (k = 0; k < array.length; k++) {
            if (array[i] = a[k]) {
                console.log("Mang doi xung");
            } else {
                console.log("Mang khong doi xung")
            }
        }
    }
}

// Chua bai

function kiemTraChuoiDoiXung(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    reverseStr = reverseStr.split(" ").join("").toLowerCase();
    let newStr = str.split(" ").join("").toLowerCase();

    if (newStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

// 5. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. 
//Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

function MaxLength(array) {
    let max = array[0].length;
    for (let i = 0; i < array.length; i++)
        if (max < array[i].length) {
            max = array[i];
        }
    let arr = [];
    if (max === array[i]) {
        arr.push(array[i]);
    }
    console.log(arr);

}