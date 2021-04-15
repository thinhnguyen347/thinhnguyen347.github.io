function MobileView() {
    if (window.matchMedia && window.matchMedia('(max-width: 600px)').matches) {
        $("#menu").addClass("hide")
    }

    $("img").click(function () {
        $("#menu").toggleClass("hide")
    })
}