$(".info").addClass("d-none")

$(".btn").click(function () {
    let time = 5;
    let timer, countDown;

    $(".info").removeClass("d-none");

    // Ấn nút "x" để tắt pop-up ngay lập tức
    $(".close").click(function () {
        $("div.info").addClass("d-none");
    })

    // Tự tắt pop-up sau 5s

    function callback() {
        time--;
        $(".info").addClass("d-none");
    }

    timer = setTimeout(callback, 5000);

    // Đếm ngược đến lúc tự tắt
    countDown = setInterval(count, 1000);

    function count() {
        time--;
        $(".count-down").text(time);
    }

    if (time == 0) {
        clearInterval(countDown);
        clearTimeout(timer);
    }

})
