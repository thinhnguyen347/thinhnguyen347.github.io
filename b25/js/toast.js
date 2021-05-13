$(".info").addClass("d-none")

$(".btn").click(function () {
    let time = 5;

    $(".info").removeClass("d-none");

    // Ấn nút "x" để tắt pop-up ngay lập tức
    $(".close").click(function () {
        $("div.info").addClass("d-none");
    })

    // Tự tắt pop-up sau 5s

    function callback() {
        let time = 5;
        time--;
        $(".info").addClass("d-none");
    }

    let timer = setTimeout(callback, 5000);

    // Đếm ngược đến lúc tự tắt
    let count = 5;
    counts = setInterval(counter, 1000);

    if (count < 0) {
        clearInterval(counts);
        clearTimeout(timer)
    }

    function counter() {
        count--;
        $(".count-down").text(count);
        console.log(count);
    }
})
