// --------------------------------PROGRESS BAR--------------------------------
let time = 0;

function callback() {
    if (!paused && time <= 99) {
        time++;
        $(".progress-bar").css("width", time + "%");
        $(".progress-bar").text(time + "%");
        console.log(time)
    }
}
let timer;
// Nút Start
$(".btn-danger").click(function () {
    timer = setInterval(callback, 1000);
    paused = false;
    $(this).attr("disabled", "disabled");
    $(this).siblings().removeAttr("disabled", "disabled");
})

// Nút Pause/Resume

let paused = false;
$(".btn-primary").click(function () {
    if (!paused) {
        clearInterval(timer);
        $(".progress-bar").css("width", time + "%");
        $(".btn-danger").attr("disabled", "disabled");
        $(this).next().text("Resume");
    }
    else {
        setInterval(callback, 1000);
    }
    console.log(paused)
})

// Nút Reset
$(".btn-success").click(function () {
    time = 0;
    clearInterval(timer);
    $(".progress-bar").css("width", "0%");
    $(this).attr("disabled", "disabled");
    $(".btn-primary").attr("disabled", "disabled");
    $(".btn-danger").removeAttr("disabled", "disabled");
    $(".btn-primary").text("Pause");
})