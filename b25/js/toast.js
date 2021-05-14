let time = 5;
let countDown;

$(".btn").click(function () {
    // Hiện popup
    $(".count-down").text(time);
    $(".info").removeClass("d-none");

    // Xóa timer cũ
    clearInterval(countDown);

    // Đếm ngược đến lúc tự tắt
    countDown = setInterval(count, 1000);
});

// Ấn nút "x" để tắt pop-up ngay lập tức
$(".close").click(close);

function close() {
    $("div.info").addClass("d-none");
    clearInterval(countDown);
    time = 5;
}

function count() {
    time--;
    $(".count-down").text(time);

    if (time == 0) {
        close();
    }
}
