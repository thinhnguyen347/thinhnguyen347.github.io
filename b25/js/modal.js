 // ------------------------------------MODAL------------------------------------

 $("button.click").click(function () {
    $("div.info-container").toggleClass("d-none");
    $("div.info").toggleClass("d-none");
})

$(".close").click(function () {
    $("div.info-container").addClass("d-none");
    $("div.info").addClass("d-none");
})

$("div.info-container").click(function () {
    $(this).addClass("d-none")
    $("div.info").addClass("d-none");
})