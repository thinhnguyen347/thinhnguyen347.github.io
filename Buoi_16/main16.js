//tạo một trang web cho người dùng nhập vào năm sinh. Hiển thị ra tuổi của họ. Năm sinh không lớn hơn năm hiện tại

function Age() {
    let number = document.getElementById("number").value;
    let d = new Date();
    let year = d.getFullYear();
    let result = document.getElementById("result")

    if (number >= 1900) {
        let age = year - number;
        if (age < 18) {
            result.innerText = `Ở tuổi ${age}, bạn nên vận động 60 phút mỗi ngày qua các bộ môn thể thao như bơi lội, bóng chuyền, bống rổ để tăng chiều cao nhé.`;
        }
        if (18 < age < 50) {
            result.innerText = `Ở tuổi ${age}, bạn nên dành 60 phút mỗi ngày chạy bộ, tập thể hình hoặc yoga cho cơ thể khoẻ hơn nhé.`;
        }
        if (age > 50) {
            result.innerText = `Ở tuổi ${age}, bạn hãy tập tạ nhẹ hoặc đi bộ 30 phút mỗi ngày nhé.`;
        }
    }
    result.style.color = "red";
    result.style.fontSize = "1.2em";
}

function BMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result1");
    let alert = document.getElementById("alert");
    let d = height / 100
    let n = weight / Math.pow(d, 2);
    let a = n.toFixed(1)


    if (height >= 100 && height <= 200 && weight >= 20 && weight <= 200) {
        alert.innerText = `Chỉ số BMI của bạn là ${a},`;
        if (n >= 18 && n <= 23) {
            result.innerText = " cơ thể khá cân đối.";
        }
        if (n < 18) {
            result.innerText = " thuộc nhóm gầy.";
        }
        if (n > 23) {
            result.innerText = " thuộc nhóm thừa cân.";
        }
    } else { result.innerText = "Thông số nhập vào không hợp lệ"; }

    result.style.color = "red";
    result.style.fontSize = "1.2em";
    alert.style.color = "red";
    alert.style.fontSize = "1.2em";
}
