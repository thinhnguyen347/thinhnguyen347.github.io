//** Tạo 1 trang HTML với nội dung là 3 đoạn văn. Hãy viết các function có tác dụng như sau:
// function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.

function changeColor(){
    document.getElementById("para1").style.color="blue";
    document.getElementById("para2").style.color="yellow";
    document.getElementById("para3").style.color="red";
}

// function changeBgColor(color): Thay đổi màu nền của trang thành màu color.

function changeBgColor(color){
    document.body.style.backgroundColor= color;
}

// function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 
//(tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).

function copyContent(paragraph1, paragraph2){
    
}

// function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).

function changeFontSize(x){
    if (!Number.isInteger(x) && x > 0 ){return 'Số không hợp lệ'}
    document.getElementById("para1").style.fontSize= x;
    document.getElementById("para2").style.fontSize= x;
    document.getElementById("para3").style.fontSize= x;
}

// function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn lên 1 pixel so với kích thước hiện tại,
//(tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn)  
//kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).

function increaseFontSize(paragraph){

}

// function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn xuống 1 pixels so với kích thước hiện tại
//(tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) , kích thước giảm xuống không vượt quá 10 pixels.



