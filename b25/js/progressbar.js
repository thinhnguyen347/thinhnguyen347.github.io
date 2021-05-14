// --------------------------------PROGRESS BAR--------------------------------
let time = 0;
let timer;
let pause = true;

function callback() {
    if (!pause && time <= 99) {
        time++;
        $(".progress-bar").css("width", time + "%");
        $(".progress-bar").text(time + "%");
        console.log(time)
    }
}

// Nút Start
$(".btn-danger").click(function () {
    pause = false;
    timer = setInterval(callback, 1000);
    $(this).attr("disabled", "disabled");
    $(this).siblings().removeAttr("disabled", "disabled");
})

// Nút Pause/Resume

$(".btn-primary").click(function () {
    if (pause == false) {
        clearInterval(timer);
        $(".btn-danger").attr("disabled", "disabled");
        $(this).text("Resume");
        pause = true;
    }
    else {
        $(this).text("Pause");
        timer = setInterval(callback, 1000);
        pause = false;
    }
})

// Nút Reset
$(".btn-success").click(function () {
    time = 0;
    pause = true;
    clearInterval(timer);
    $(".progress-bar").css("width", "0%");
    $(this).attr("disabled", "disabled");
    $(".btn-primary").attr("disabled", "disabled");
    $(".btn-danger").removeAttr("disabled", "disabled");
    $(".btn-primary").text("Pause");
})