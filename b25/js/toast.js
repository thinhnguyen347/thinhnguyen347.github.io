
// Ấn nút "x" để tắt pop-up ngay lập tức
$(".close").click(function () {
    $("div.info").addClass("d-none");
})

// Tự tắt pop-up sau 5s
let time = 5;

function callback() {
    time--;
    $(".info").addClass("d-none");
}

setTimeout(callback, 5000);

// Đếm ngược đến lúc tự tắt
function counter() {
    time--;
    $(".count-down").text(time)
}

setInterval(counter, 1000)

